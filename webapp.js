
module.exports = {
  // an object that defines the schema for configuration
  config: {
    test: { type: String, default: 'mocha -r blanket -R json-cov' },
    threshhold: { type: Number, min: 0, max: 100, default: 0 }
  }
}
