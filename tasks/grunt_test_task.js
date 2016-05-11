var inquirer = require('inquirer');


module.exports = function (grunt) {
  grunt.registerTask('testPassword', 'xxx', function () {

   //  var questions = [ {
   //    name: 'passwort',
   //    type: 'password',
   //    message: 'password:',
   //    validate: function (input) {
   //      // var done = this.async();
   //      console.log('input', input);
   //      return new Promise(function(resolve,reject){
   //        if (result.selectedConfigKey !== 'CANCEL') {
   //          resolve(true);
   //        } else {
   //          reject('CANCEL');
   //        }
   //      })
   //    }
   //  } ];
   // // var done = this.async();
   //  console.log('vor inquirer...');
   //  inquirer.prompt(questions).then(function (result) {
   //    // do upload, if user confirmed to do so
   //    console.log('result', result);
   //    if (result.selectedConfigKey !== 'CANCEL') {
   //      console.log('TEST');
   //    } else {
   //      console.log('CANCEL');
   //    }
   //   // done();
   //
   //  });
    var done=this.async();
    inquirer.prompt([
      {
        type: 'password',
        message: 'Enter your git password',
        name: 'password',
        validate: function(input){
          console.log('input',input);
          // done(null,true);
          return true

        }
      }

    ]).then(function (answers) {
      console.log('####',JSON.stringify(answers, null, '  '));
      done();
    });
  });
};

