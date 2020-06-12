<?php
/**
 * Disable admin notices core class
 *
 * @author        Alexander Kovalev <alex.kovalevv@gmail.com>
 *                Github: https://github.com/alexkovalevv
 * @copyright (c) 2018 Webraftic Ltd
 * @version       1.0
 */

// Exit if accessed directly
//use WBCR\Factory_Adverts_108\Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class WDN_Plugin extends Wbcr_Factory428_Plugin {

	/**
	 * @var Wbcr_Factory428_Plugin
	 */
	private static $app;
	private $plugin_data;


	/**
	 * @param string $plugin_path
	 * @param array  $data
	 *
	 * @throws Exception
	 */
	public function __construct( $plugin_path, $data ) {
		parent::__construct( $plugin_path, $data );

		self::$app         = $this;
		$this->plugin_data = $data;

		$this->global_scripts();

		if ( is_admin() ) {
			$this->admin_scripts();
		}
	}

	/**
	 * @return Wbcr_Factory428_Plugin
	 */
	public static function app() {
		return self::$app;
	}

	private function registerPages() {
		if ( $this->as_addon ) {
			return;
		}

		self::app()->registerPage( 'WDN_NoticesPage', WDN_PLUGIN_DIR . '/admin/pages/class-pages-notices.php' );
		self::app()->registerPage( 'WDN_MoreFeaturesPage', WDN_PLUGIN_DIR . '/admin/pages/class-pages-more-features.php' );
	}

	private function admin_scripts() {
		require( WDN_PLUGIN_DIR . '/admin/options.php' );

		if ( defined( 'DOING_AJAX' ) && DOING_AJAX ) {
			require( WDN_PLUGIN_DIR . '/admin/ajax/hide-notice.php' );
			require( WDN_PLUGIN_DIR . '/admin/ajax/restore-notice.php' );
		}

		require( WDN_PLUGIN_DIR . '/admin/boot.php' );
		$this->registerPages();
	}

	private function global_scripts() {
		require( WDN_PLUGIN_DIR . '/includes/classes/class-configurate-notices.php' );
		new WDN_ConfigHideNotices( self::$app );
	}
}
