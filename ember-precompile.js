#!/usr/bin/env node

var optimist = require('optimist')
		.usage('Precompile handlebar templates.\nUsage: ember-precompile template... -f template.js', {
			'f': {
				'type': 'string',
				'description': 'Output File',
				'alias': 'output',
				'demand': true
			}}),
		
	argv = optimist.argv,
	handlebars = require('./libs/ember-handlebars-compiler'),
	util = require('util'),
	fs = require('fs'),
	path = require('path'),
	output = "",
	files = argv._.length,
	
	do_write = function (output){
		fs.writeFile(argv.f, util.format("(function () {%s})()",output));
	};
	
argv._.forEach(function(filename) {
	fs.readFile(filename, 'utf8', function (err, data) {
		var templateName = path.basename(filename).replace(/\.(handlebars|hbs)$/, '').replace(/\./g, '/'),
			str = 'Ember.TEMPLATES["%s"] = Ember.Handlebars.template(%s);\n';
		
		if(err) { throw err; }
		
		output += util.format(str, templateName, handlebars.precompile(data).toString());
		files--;
		
		do_write(output);
	});
});

