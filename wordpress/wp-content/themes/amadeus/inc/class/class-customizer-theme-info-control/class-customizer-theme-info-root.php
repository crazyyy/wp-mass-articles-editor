<?php
/**
 * Singleton class file.
 *
 * @package amadeus
 */

/**
 * Singleton class for handling the theme's customizer integration.
 *
 * @since  1.0.0
 * @access public
 */
final class Amadeus_Customizer_Upsell {

	/**
	 * Returns the instance.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return object
	 */
	public static function get_instance() {

		static $instance = null;

		if ( is_null( $instance ) ) {
			$instance = new self;
			$instance->setup_actions();
		}

		return $instance;
	}

	/**
	 * Constructor method.
	 *
	 * @since  1.0.0
	 * @access private
	 * @return void
	 */
	private function __construct() {}

	/**
	 * Sets up initial actions.
	 *
	 * @since  1.0.0
	 * @access private
	 * @return void
	 */
	private function setup_actions() {

		// Register panels, sections, settings, controls, and partials.
		add_action( 'customize_register', array( $this, 'sections' ) );

		// Register scripts and styles for the controls.
		add_action( 'customize_controls_enqueue_scripts', array( $this, 'enqueue_control_scripts' ), 0 );
	}

	/**
	 * Sets up the customizer sections.
	 *
	 * @since  1.0.0
	 * @access public
	 * @param  object $manager Customizer manager.
	 * @return void
	 */
	public function sections( $manager ) {

		// Load custom sections.
		require_once( trailingslashit( get_template_directory() ) . 'inc/class/class-customizer-theme-info-control/class-amadeus-customize-theme-info-main.php' );
		require_once( trailingslashit( get_template_directory() ) . 'inc/class/class-customizer-theme-info-control/class-amadeus-customize-theme-info-section.php' );

		// Register custom section types.
		$manager->register_section_type( 'Amadeus_Customizer_Theme_Info_Main' );
		$manager->register_section_type( 'Amadeus_Customizer_Theme_Info_Section' );

		// Main Documentation Link In Customizer Root.
		$manager->add_section(
			new Amadeus_Customizer_Theme_Info_Main(
				$manager, 'amadeus-theme-info', array(
					'theme_info_title' => __( 'Amadeus', 'amadeus' ),
					'label_url'        => esc_url( 'http://docs.themeisle.com/article/270-amadeus-documentation' ),
					'label_text'       => __( 'Documentation', 'amadeus' ),
				)
			)
		);
	}

	/**
	 * Loads theme customizer CSS.
	 *
	 * @since  1.0.0
	 * @access public
	 * @return void
	 */
	public function enqueue_control_scripts() {

		wp_enqueue_script( 'amadeus-upsell-js', trailingslashit( get_template_directory_uri() ) . 'inc/class/class-customizer-theme-info-control/js/amadeus-upsell-customize-controls.js', array( 'customize-controls' ) );

		wp_enqueue_style( 'amadeus-theme-info-style', trailingslashit( get_template_directory_uri() ) . 'inc/class/class-customizer-theme-info-control/css/style.css' );

	}
}

Amadeus_Customizer_Upsell::get_instance();
