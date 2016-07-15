
test: lint
	@mocha -R spec

tolint := *.js *.json config

lint:
	@eslint --verbose $(tolint)

.PHONY: test lint watch build less
