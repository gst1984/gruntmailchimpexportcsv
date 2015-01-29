# grunt-mailchimp-export-csv

> Export a mailchimp list to csv

## Getting Started
ATTENTION: This plugin is not really tested - no warranties for anything...

This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-mailchimp-export-csv --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-mailchimp-export-csv');
```

## The "mailchimp_export_csv" task

Additionally this plugin requires a few node modules: 
fast-csv, fs, mailchimp

### Overview
In your project's Gruntfile, add a section named `mailchimp_export_csv` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  mailchimp_export_csv: {
		websubscriber_list: {
			options : { 
					apiKey : '****', 
					listId : '****',
					csvFile : 'output.csv'
				},
		},
    },
});
```

### Options

apiKey - Mailchimp API - Key

listId - Mailchimp ListId (Attention there are two listIds - don't take the one from the web but from the lists/list call.

csvFile - outputfile
