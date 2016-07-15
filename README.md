# strider-blanket

Node.js coverage reporting for [Strider-CD](https://github.com/Strider-CD/strider), using the fantastic [blanket.js](http://blanketjs.org/) instrumentation library.

See the full-on coverage report **right on the build page**. Does it get better than this? If you have any ideas, feel free to open an issue or pull-request :)

## Configuration
You need to add a "blanket" section to your `package.json` file, indicating what files should be instrumented [(see the docs)](https://github.com/alex-seville/blanket/blob/master/docs/getting_started_node.md).

The default command is `mocha -r blanket -R json-cov`. If you need a different command, you can specify it in the ui; it just needs to output (to std out) the same format as mocha's json-cov reporter.

## Screenshots

### Coverage Overview

![coverage overview](https://github.com/Strider-CD/strider-blanket/blob/master/docs/coverage-overview.png?raw=true)

### Coverage Open (click "details")

![coverage open](https://github.com/Strider-CD/strider-blanket/blob/master/docs/coverage-open.png?raw=true)
