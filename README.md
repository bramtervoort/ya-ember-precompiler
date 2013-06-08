ya-ember-precompiler
====================
Yet another precompiler for emberjs handlebars templates. But this one is easy to keep up to date because it only requires a patched ember module and the handlebars library.

Instalation
-----------
    npm install ya-ember-precompiler
	
Don't forget to set your path var correct - %PATH%;.\node_modules\.bin - (yes this is for windows, you linux people should know what to put in your path.)

Usage
-----
    ember-compiler templatea.hbs templateb.hbs ... -f compiled.js

The compiled templates will be named after the basename of each file without the hbs, to support nested templates. "Yes this works like this for windows if you set your path right."

Why another ember-precompiler
-----------------------------
Its simple I could easyer make a new compile script myself than get the other compilers to work on windows. 

The other compilers either use jQuery (with won't build for me on windows), or slack behind the current ember / handlebars version so much I kept running in to trouble every time I wanted to update to the next ember release. I build this script in 2 day's (3 hours to figure out howto compile ember, 1 hour for writing the script and the other time for figuring out how to bundle and publish stuf to npm). 

I just took the 'ember-handlebars-compiler' module, patched it so it would work standalone in nodes and there I had my own compile script. Easy to keep up to date and easy to install. O and easy to use in symfony 2.