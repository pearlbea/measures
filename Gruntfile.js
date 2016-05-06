module.exports = function(grunt){

    'use strict';

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        watch : {
            browserify : {
                files : ['public/js/**/*.js'],
                tasks : ['browserify']
            }
        },

        browserify : {
            app : {
                src: ['public/js/*.js', 'public/js/**/*.js'],
                dest: 'public/dist/main.js',
                options: {
                    watch: true,
                    transform: [
                      ["babelify", { presets: ["es2015", "react"] }]
                     ]
                }
            }
        },

        clean : {
            dist : ['public/dist']
        }

    });
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');


    grunt.registerTask('default',['clean', 'browserify']);



};
