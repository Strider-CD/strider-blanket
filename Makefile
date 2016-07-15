
test: lint
	@mocha -R spec

tolint := *.js *.json config

lint:
	@eslint $(tolint)

.PHONY: test lint watch build less
