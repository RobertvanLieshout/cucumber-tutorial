/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
*/
module.exports = function (grunt) {
    grunt.initConfig({
        cucumberjs: {
            src: 'features',
            options: {
                steps: "features/step_definitions"
            }
        }
    });

    grunt.loadNpmTasks('grunt-cucumber');
};
