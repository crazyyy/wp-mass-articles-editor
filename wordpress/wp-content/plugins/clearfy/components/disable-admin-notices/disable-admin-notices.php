<?php
/**
 * Plugin Name: Webcraftic Disable Admin Notices Individually
 * Plugin URI: https://webcraftic.com
 * Description: Disable admin notices plugin gives you the option to hide updates warnings and inline notices in the admin panel.
 * Author: Webcraftic <wordpress.webraftic@gmail.com>
 * Version: 1.1.1
 * Text Domain: disable-admin-notices
 * Domain Path: /languages/
 * Author URI: https://webcraftic.com
 * Framework Version: FACTORY_428_VERSION
 */

/**
 * Developers who contributions in the development plugin:
 *
 * Alexander Kovalev
 * ---------------------------------------------------------------------------------
 * Full plugin development.
 *
 * Email:         alex.kovalevv@gmail.com
 * Personal card: https://alexkovalevv.github.io
 * Personal repo: https://github.com/alexkovalevv
 * ---------------------------------------------------------------------------------
 */

// Exit if accessed directly
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * -----------------------------------------------------------------------------
 * CHECK REQUIREMENTS
 * Check compatibility with php and wp version of the user's site. As well as checking
 * compatibility with other plugins from Webcraftic.
 * -----------------------------------------------------------------------------
 */

require_once( dirname( __FILE__ ) . '/libs/factory/core/includes/class-factory-requirements.php' );

// @formatter:off
$wdan_plugin_info = array(
	'prefix'         => 'wbcr_dan_',
	'plugin_name'    => 'wbcr_dan',
	'plugin_title'   => __( 'Webcraftic disable admin notices', 'disable-admin-notices' ),

	// PLUGIN SUPPORT
	'support_details'      => array(
		'url'       => 'https://webcraftic.com',
		'pages_map' => array(
			'support'  => 'support', // {site}/support
			'docs'     => 'docs'     // {site}/docs
		)
	),

	// PLUGIN ADVERTS
	'render_adverts' => true,
	'adverts_settings'    => array(
		'dashboard_widget' => true, // show dashboard widget (default: false)
		'right_sidebar'    => true, // show adverts sidebar (default: false)
		'notice'           => true, // show notice message (default: false)
	),

	// FRAMEWORK MODULES
	'load_factory_modules' => array(
		array( 'libs/factory/bootstrap', 'factory_bootstrap_429', 'admin' ),
		array( 'libs/factory/forms', 'factory_forms_426', 'admin' ),
		array( 'libs/factory/pages', 'factory_pages_428', 'admin' ),
		array( 'libs/factory/clearfy', 'factory_clearfy_220', 'all' ),
		array( 'libs/factory/adverts', 'factory_adverts_108', 'admin')
	)
);

$wdan_compatibility = new Wbcr_Factory428_Requirements( __FILE__, array_merge( $wdan_plugin_info, array(
	'plugin_already_activate'          => defined( 'WDN_PLUGIN_ACTIVE' ),
	'required_php_version'             => '5.4',
	'required_wp_version'              => '4.2.0',
	'required_clearfy_check_component' => false
) ) );


/**
 * If the plugin is compatible, then it will continue its work, otherwise it will be stopped,
 * and the user will throw a warning.
 */
if ( ! $wdan_compatibility->check() ) {
	return;
}

/**
 * -----------------------------------------------------------------------------
 * CONSTANTS
 * Install frequently used constants and constants for debugging, which will be
 * removed after compiling the plugin.
 * -----------------------------------------------------------------------------
 */

// This plugin is activated
define( 'WDN_PLUGIN_ACTIVE', true );
define( 'WDN_PLUGIN_VERSION', $wdan_compatibility->get_plugin_version() );
define( 'WDN_PLUGIN_DIR', dirname( __FILE__ ) );
define( 'WDN_PLUGIN_BASE', plugin_basename( __FILE__ ) );
define( 'WDN_PLUGIN_URL', plugins_url( null, __FILE__ ) );




/**
 * -----------------------------------------------------------------------------
 * PLUGIN INIT
 * -----------------------------------------------------------------------------
 */

require_once( WDN_PLUGIN_DIR . '/libs/factory/core/boot.php' );
require_once( WDN_PLUGIN_DIR . '/includes/class-plugin.php' );

try {
	new WDN_Plugin( __FILE__, array_merge( $wdan_plugin_info, array(
		'plugin_version'     => WDN_PLUGIN_VERSION,
		'plugin_text_domain' => $wdan_compatibility->get_text_domain(),
	) ) );
} catch( Exception $e ) {
	// Plugin wasn't initialized due to an error
	define( 'WDN_PLUGIN_THROW_ERROR', true );

	$wdan_plugin_error_func = function () use ( $e ) {
		$error = sprintf( "The %s plugin has stopped. <b>Error:</b> %s Code: %s", 'Webcraftic Disable Admin Notices', $e->getMessage(), $e->getCode() );
		echo '<div class="notice notice-error"><p>' . $error . '</p></div>';
	};

	add_action( 'admin_notices', $wdan_plugin_error_func );
	add_action( 'network_admin_notices', $wdan_plugin_error_func );
}
// @formatter:on