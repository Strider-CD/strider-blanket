
test: lint
	@mocha -R spec

tolint := *.js config

lint:
	@eslint $(tolint)

.PHONY: test lint watch build less
