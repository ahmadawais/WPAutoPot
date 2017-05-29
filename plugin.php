<?php
/**
 * Plugin Name: WPAutoPot Dummy Plugin
 * Text Domain: WPAutoPot
 * Author: mrahmadawais
 * Plugin URI: http://AhmadAwais.com/
 * Description: Just a dummy plugin with few translateable strings.
 * Author URI: http://AhmadAwais.com/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package WP
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Translatable Strings.
$first = __( 'First String with __()', 'WPAutoPot' );


// Make sure the function is unique.
if ( ! function_exists( 'wpautopot_function' ) ) {
	/**
	 * Random function that outputs translated string.
	 *
	 * @since 1.0.0
	 */
	function wpautopot_function() {
		_e( 'Second String with __e()', 'WPAutoPot' );
	} // End fucntion wpautopot_function().
} // End if().
