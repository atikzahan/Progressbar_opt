Progressbar_opt
===============

Developer's Note


·	The codes for developing is in /app 
·	The packaged/minified codes is in /dist"
1. grunt dev
This will watch your changes to css/style.scss and create .css instantly when you save.

2.  grunt
This will run sass, jshint to create .css and validate Javascript code in /app and copy all of the stuff to /dist

3. grunt release
This will run sass, jshint, concat, uglify, cssmin to create .css/validate Javascript/concate multiple javascript and css files/minify javascript and css files to /dist


