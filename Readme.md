strider-blanket
===============

Node.js coverage reporting for strider-cd, using the fantastic [blanket.js](http://blanketjs.org/) instrumentation library.

## Configuration
You need to add a "blanket" section to your `package.json` file, indicating what files should be instrumented.

The default command is `mocha -r blanket -R json-cov`. If you need a different command, you can specify it in the ui; it just needs to output (to std out) the same format as mocha's json-cov reporter.
