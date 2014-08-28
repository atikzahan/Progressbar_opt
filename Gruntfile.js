module.exports = function(grunt) {
    grunt.initConfig({
        paths: {
            app: 'app',
            dist: 'dist'
        },
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: {
                src: ['<%= paths.dist %>/*', ]
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            src: ['<%= paths.app %>/js/script.js']
        },
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: '<%= paths.app %>',
                    src: ['js/*', 'css/*', 'bower_components/**'],
                    dest: '<%= paths.dist %>',
                }, {
                    expand: true,
                    cwd: '<%= paths.app %>',
                    src: ['index.html'],
                    dest: '<%= paths.dist %>',
                }]
            }
        },
        qunit: {
            files: ['test/**/*.html']
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    '<%= paths.app %>/css/style.css': '<%= paths.app %>/css/style.scss'
                }
            }
        },
        watch: {
            sass: {
                files: ['<%= paths.app %>/css/style.scss'],
                tasks: ['sass'],
            },
        },
        useminPrepare: {
            html: '<%= paths.dist %>/index.html',
            options: {
                flow: {
                    steps: {
                        'js': ['concat', 'uglifyjs'],
                        'css': ['concat', 'cssmin']
                    },
                    post: []
                }
            }
        },
        usemin: {
            html: '<%= paths.dist %>/index.html',
        }
    });
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('dev', ['watch']);
    grunt.registerTask('test', ['sass', 'qunit']);
    grunt.registerTask('default', ['clean', 'sass', 'qunit', 'jshint', 'copy']);
    grunt.registerTask('release', ['sass', 'qunit', 'jshint', 'copy', 'useminPrepare', 'usemin', 'concat', 'uglify', 'cssmin']);
};
