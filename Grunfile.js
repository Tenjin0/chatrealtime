module.exports = function(grunt) {

  // Configuration de Grunt
  grunt.initConfig({

 	watch: {
		broswer_js: {
			files: "./*.js",
			tasks: ["jshint", "browserify"]
		}
	}
// ...
}) 
  // Définition des tâches Grunt
grunt.loadNpmTasks('grunt-contrib-watch');
}