@echo off
cd test
echo build templates
node ../ember-precompile.js application.hbs -f templates.js || exit -1
echo execute test phantomjs required
phantomjs test.js || exit -1;
echo tests successful
rm templates.js