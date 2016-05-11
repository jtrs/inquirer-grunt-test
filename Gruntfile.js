/*
 * grunt-cubx-webpackage-upload
 *
 * Copyright (c) 2015 Hd Böhlau
 * Licensed under the MIT license.
 */

'use strict';
var path = require('path');

module.exports = function (grunt) {
  // Project configuration.
   // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-prompt');
  grunt.initConfig({
    prompt: {
      target: {
        options: {
          questions: [
            {
              config: 'config.name', 
              type: 'password',
              message: 'password'

            }
          ]
        }
      }
    }
  })
};
