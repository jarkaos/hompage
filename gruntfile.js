module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.initConfig({
        uglify: {
            my_target: {
                files: {
                    '_/js/script.js': ['_/components/js/*.js']
                } // files
            } // my_target
        },
        compass: {
            dev: {
                options: {
                    config: 'config.rb'
                } // options
            } // dev
        }, // compass
        watch: {
            options: {
                spawn: false,
                livereload: true
            }, //options
            scripts: {
                files: ['_/components/js/*.js'],
                tasks: ['uglify']
            },
            sass: {
                files: ['_/components/sass/**/*.scss'],
                tasks: ['compass:dev']
            }, // sass
            html: {
                files: ['*.html']
            } // html
        } // watch
    }); // initconfig

    grunt.registerTask('default', 'watch');
}