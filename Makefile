
test: lint
	@mocha -R spec

tolint := *.js *.json config

lint:
	@jshint --verbose $(tolint)

.PHONY: test lint watch build less
