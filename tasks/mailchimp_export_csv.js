/*
 * grunt-mailchimp-export-csv
 * https://github.com/gst1984/gruntmailchimpexportcsv
 *
 * Copyright (c) 2015 Gerald Stockinger
 * Licensed under the MIT license.
 */

'use strict';
var csv = require('fast-csv');
var fs = require('fs');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('mailchimp_export_csv', 'Export a mailchimp list to csv', function() {
	var done = this.async();
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });
	
	var MailChimpExportAPI = require('mailchimp').MailChimpExportAPI;
	var outputFile = options.csvFile;
	var apiKey = options.apiKey;

	try { 
		var exportApi = new MailChimpExportAPI(apiKey, { version : '1.0', secure: false });
	} catch (error) {
		console.log(error.message);
	}
	
	exportApi.list({ id : options.listId  }, function (error, data) {
		if (error){
			console.log(error.message);
			done(false);
			}
		else {
			console.log(JSON.stringify(data)); // Do something with your data!
			
			var ws = fs.createWriteStream(outputFile);
			csv
			   .write(data, {headers: true})
			   .pipe(ws)
			   .on("finish", function(){
					 console.log("done");
					 done();
				 });
			}
	});
    
  });

};
