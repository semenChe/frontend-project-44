install-deps:
	npm ci

run:
	node bin/brain-games.js

lint:
	npx eslint .
	
publish:
	npm publish --dry-run	