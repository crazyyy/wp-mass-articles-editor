<?php
  /**
   * Plugin Name: Mass Articles Editor
   * Plugin URI: https://wordpress.org/plugins/google/
   * Description:
   * Author: SS <ss@gmail.com>
   * Version: 1.1.1
   * Text Domain: wpmae
   * Domain Path: /languages/
   * Author URI: http://google.com
   * Framework Version: FACTORY_428_VERSION
   */

  // Exit if accessed directly
  if( !defined('ABSPATH') ) {
    exit;
  }

  // Path to this file.
  if ( ! defined( 'MAE_PLUGIN_FILE' ) ) {
    define( 'MAE_PLUGIN_FILE', __FILE__ );
  }

  // Path to the plugin's directory.
  if ( ! defined( 'MAE_DIRECTORY' ) ) {
    define( 'MAE_DIRECTORY', dirname( __FILE__ ) );
  }

  // Load the actual plugin.
  require 'init.php';


  // Same handler function...
  add_action( 'wp_ajax_my_action', 'my_action' );
  function my_action() {
    global $wpdb;
    $whatever = intval( $_POST['whatever'] );
    $whatever += 10;
    echo $whatever;
    wp_die();
  }
