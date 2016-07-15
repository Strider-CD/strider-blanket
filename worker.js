var path = require('path')
  , fs = require('fs')
  , jade = require('jade')

  , fpath = path.join(__dirname, 'node_modules/mocha/lib/reporters/templates/coverage.jade')
  , template = fs.readFileSync(fpath, 'utf8')
  , htmlCov = jade.compile(template, {filename: fpath});

function coverageClass(n) {
  if (n >= 75) return 'high';
  if (n >= 50) return 'medium';
  if (n >= 25) return 'low';
  return 'terrible';
}

module.exports = {
  // Initialize the plugin for a job
  //   config:     taken from DB config extended by flat file config
  //   job & repo: see strider-runner-core
  //   cb(err, initialized plugin)
  init: function (config, job, context, cb) {
    config = config || {};
    var ret = {
      prepare: function (context, done) {
        var haveit = fs.existsSync(path.join(context.dataDir, 'node_modules/blanket'));
        context.data({enabled: true});
        if (haveit) return done();
        context.cmd('npm install blanket', done)
      },
      test: function (context, done) {
        context.comment('Generating coverage report');
        context.cmd({
          cmd: config.test || 'mocha -r blanket -R json-cov',
          silent: true
        }, function (err, stdout) {
          if (err) return done(err);
          var report;
          try {
            report = JSON.parse(stdout)
          } catch (e) {
            return done(new Error('coverage report not json'))
          }
          var goodness = report.coverage > 80 ? 'good' : (report.coverage > 50 ? 'ok' : 'bad');
          report.files.map(function (file) {
            file.filename = path.relative(context.dataDir, file.filename);
          });
          context.data({
            enabled: true,
            percent: report.coverage,
            coverageStatus: goodness,
            covered: report.hits,
            sloc: report.sloc,
            html: htmlCov({
              cov: report,
              coverageClass: coverageClass
            }),
            files: report.files.map(function (file) {
              return {
                percent: file.coverage,
                covered: file.hits,
                sloc: file.sloc,
                path: file.filename
              }
            })
          }, 'replace', null);
          done()
        })
      }
    };
    cb(null, ret)
  }
};

