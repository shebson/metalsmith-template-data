module.exports = function (grunt) {
    "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jslint: {
            server: {
                src: [
                    '*.js',
                    'test/*.js'
                ],
                directives: {
                    node: true,
                    nomen: true
                },
                options: {
                    edition: 'latest',
                    log: 'jslint/result.log',
                    junit: 'jslint/client-junit.xml',
                    errorsOnly: false,
                    failOnError: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-jslint');
};
