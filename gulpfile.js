/**
 * Gulpfile.
 *
 * Auto Generates .pot file for i18n and l10n.
 *
 * @author Ahmad Awais ( @ahmadawais )
 * @version 1.0.0
 */

/**
 * Configuration.
 *
 * Project Configuration for gulp tasks.
 *
 * In paths you can add <<glob or array of globs>>. Edit the variables as per your project requirements.
 */

//— START Editing Project Variables. —//.

// Project related variables.
var translateFiles = './**/*.php'; // Path to all PHP files.

// Translation related variables.
var text_domain    = 'WPAutoPot'; // Your textdomain here.
var destFile       = 'WPAutoPot.pot'; // Name of the transalation file.
var packageName    = 'WPAutoPot'; // Package name.
var bugReport      = 'https://AhmadAwais.com/contact/'; // Where can users report bugs.
var lastTranslator = 'Ahmad Awais <your_email@email.com>'; // Last translator Email ID.
var team           = 'Team Name <your_email@email.com>'; // Team's Email ID.
var translatePath  = './languages/' // Where to save the translation files.

//— STOP Editing Project Variables. —//.

/**
 * Load Plugins.
 *
 * Load gulp plugins and assing them semantic names.
 */
var gulp   = require( 'gulp' ); // Gulp of-course
var wpPot  = require( 'gulp-wp-pot' ); // For generating the .pot file.
var sort   = require( 'gulp-sort' ); // Recommended to prevent unnecessary changes in pot-file.
var notify = require( 'gulp-notify' ); // Sends message notification to you

 /**
 * WP POT Translation File Generator.
 *
 * * This task does the following:
 *     1. Gets the source of all the PHP files
 *     2. Sort files in stream by path or any custom sort comparator
 *     3. Applies wpPot with the variable set at the top of this file
 *     4. Generate a .pot file of i18n that can be used for l10n to build .mo file
 */
 gulp.task( 'translate', function () {
		return gulp.src( translateFiles )
			.pipe( sort() )
			.pipe( wpPot( {
				domain        : text_domain,
				destFile      : destFile,
				package       : packageName,
				bugReport     : bugReport,
				lastTranslator: lastTranslator,
				team          : team
			} ) )
			.pipe( gulp.dest( translatePath + '/' + destFile ) )
			.pipe( notify( { message: 'SUCCESS: Pot file generated! 💯', onLast: true } ) )
 } );

 /**
 * Watch Tasks.
 *
 * Watches for file changes and runs specific tasks.
 */
 gulp.task( 'default', ['translate'] );
