module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        shell: {
            launch: {
              options: {
                stdout: true
              },
              command: 'node server.js'
            }
        },

        concurrent: {
            watchers: {
                tasks: ['shell', 'browserSync'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },        

        browserSync: {
            dev: {
               options: {
                    proxy: "localhost:3006",
                    port: "3007",
                    files: "css/*, partials/*.html, *.html, *.js, js/* partials/**/*.html"
                }
            }
        },

        htmlSnapshot: {
            debug: {
                options: {
                    snapshotPath: 'snapshots/',
                    sitePath: 'http://localhost:3006/',
                    msWaitForPages: 1000,
                    urls: [
                        '/',
                        '/about'
                    ]
                }
            },

            prod: {
                options: {}
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-html-snapshot');

    grunt.loadNpmTasks("grunt-concurrent");
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ["concurrent:watchers"]);

};