TESTFILES = $(wildcard tests/*.test.js)
MOCHA = node_modules/.bin/mocha
MOCHAOPTIONS = --reporter spec \
				--timeout 3000 \

ISTANBULOPTIONS =  -- -R spec \
				--timeout 30000 \

ISTANBUL = node_modules/.bin/istanbul cover _mocha

all: test

test:
	@$(MOCHA) $(TESTFILES) $(MOCHAOPTIONS)

cover:
	@$(ISTANBUL) $(TESTFILES) $(ISTANBULOPTIONS)

.PHONY: test
