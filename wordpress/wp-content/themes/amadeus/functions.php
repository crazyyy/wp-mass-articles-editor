<?php
/**
 * Amadeus functions and definitions
 *
 * @package Amadeus
 */

/**
 * Loads products array.
 *
 * @param array $products All products.
 *
 * @return array Products array.
 */
function amadeus_load_sdk( $products ) {
	$products[] = get_template_directory() . '/style.css';

	return $products;
}
add_filter( 'themeisle_sdk_products', 'amadeus_load_sdk' );

if ( ! function_exists( 'amadeus_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function amadeus_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Amadeus, use a find and replace
		 * to change 'amadeus' to the name of your theme in all the template files
		 */
		load_theme_textdomain( 'amadeus', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		// Content width
		global $content_width;
		if ( ! isset( $content_width ) ) {
			$content_width = 1040;
		}

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
		 */
		add_theme_support( 'post-thumbnails' );
		add_image_size( 'amadeus-entry-thumb', 750 );
		add_image_size( 'amadeus-slider-size', 1000, 250, true );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'primary' => __( 'Primary Menu', 'amadeus' ),
				'social'  => __( 'Social', 'amadeus' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
			)
		);

		/*
		 * Enable support for Post Formats.
		 * See http://codex.wordpress.org/Post_Formats
		 */
		add_theme_support(
			'post-formats',
			array(
				'aside',
				'image',
				'video',
				'quote',
				'link',
			)
		);

		// Set up the WordPress core custom background feature.
		add_theme_support(
			'custom-background',
			apply_filters(
				'amadeus_custom_background_args',
				array(
					'default-color' => 'f7f3f0',
					'default-image' => '',
				)
			)
		);

		/* Add custom logo support */
		add_theme_support( 'custom-logo' );

		/* migrate the old logo option to the new option */
		if ( get_theme_mod( 'site_logo' ) ) {
			$logo = attachment_url_to_postid( get_theme_mod( 'site_logo' ) );
			if ( is_int( $logo ) ) {
				set_theme_mod( 'custom_logo', $logo );
			}
			remove_theme_mod( 'site_logo' );
		}
	}
endif; // amadeus_setup
add_action( 'after_setup_theme', 'amadeus_setup' );

/**
 * Register widget area.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_sidebar
 */
function amadeus_widgets_init() {
	register_sidebar(
		array(
			'name'          => __( 'Sidebar', 'amadeus' ),
			'id'            => 'sidebar-1',
			'description'   => '',
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h4 class="widget-title">',
			'after_title'   => '</h4>',
		)
	);
	register_sidebar(
		array(
			'name'          => __( 'Footer left', 'amadeus' ),
			'id'            => 'sidebar-4',
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h4 class="widget-title">',
			'after_title'   => '</h4>',
		)
	);
	register_sidebar(
		array(
			'name'          => __( 'Footer center', 'amadeus' ),
			'id'            => 'sidebar-5',
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h4 class="widget-title">',
			'after_title'   => '</h4>',
		)
	);
	register_sidebar(
		array(
			'name'          => __( 'Footer right', 'amadeus' ),
			'id'            => 'sidebar-6',
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h4 class="widget-title">',
			'after_title'   => '</h4>',
		)
	);

	// Custom widgets
	register_widget( 'Amadeus_Video' );
	register_widget( 'Amadeus_Recent_Comments' );
	register_widget( 'Amadeus_Recent_Posts' );
	register_widget( 'Amadeus_About' );
}
add_action( 'widgets_init', 'amadeus_widgets_init' );

// Custom widgets
require get_template_directory() . '/widgets/video-widget.php';
require get_template_directory() . '/widgets/recent-comments.php';
require get_template_directory() . '/widgets/recent-posts.php';
require get_template_directory() . '/widgets/about-me.php';

/**
 * Enqueue scripts and styles.
 */
function amadeus_scripts() {

	wp_enqueue_style( 'amadeus-bootstrap', get_template_directory_uri() . '/css/bootstrap/css/bootstrap.min.css', array(), true );

	if ( get_theme_mod( 'body_font_name' ) != '' ) {
		wp_enqueue_style( 'amadeus-body-fonts', '//fonts.googleapis.com/css?family=' . esc_attr( get_theme_mod( 'body_font_name' ) ) );
	} else {
		wp_enqueue_style( 'amadeus-body-fonts', '//fonts.googleapis.com/css?family=Noto+Serif:400,700,400italic,700italic' );
	}

	if ( get_theme_mod( 'headings_font_name' ) != '' ) {
		wp_enqueue_style( 'amadeus-headings-fonts', '//fonts.googleapis.com/css?family=' . esc_attr( get_theme_mod( 'headings_font_name' ) ) );
	} else {
		wp_enqueue_style( 'amadeus-headings-fonts', '//fonts.googleapis.com/css?family=Playfair+Display:400,700' );
	}

	wp_enqueue_style( 'amadeus-style', get_stylesheet_uri() );

	wp_enqueue_style( 'amadeus-font-awesome', get_template_directory_uri() . '/fonts/font-awesome.min.css' );

	wp_enqueue_script( 'amadeus-parallax', get_template_directory_uri() . '/js/parallax.min.js', array( 'jquery' ), true );

	wp_enqueue_script( 'amadeus-slicknav', get_template_directory_uri() . '/js/jquery.slicknav.min.js', array( 'jquery' ), true );

	wp_enqueue_script( 'amadeus-fitvids', get_template_directory_uri() . '/js/jquery.fitvids.min.js', array( 'jquery' ), true );

	wp_enqueue_script( 'amadeus-scripts', get_template_directory_uri() . '/js/scripts.js', array( 'jquery' ), true );

	wp_enqueue_script( 'amadeus-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20120206', true );

	wp_enqueue_script( 'amadeus-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20130115', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'amadeus_scripts' );

/**
 * Customizer styles
 */
function amadeus_customizer_styles() {

	wp_enqueue_style( 'amadeus-customizer-styles', get_template_directory_uri() . '/css/customizer.css' );

	wp_enqueue_style( 'amadeus-font-awesome', get_template_directory_uri() . '/fonts/font-awesome.min.css' );

}
add_action( 'customize_controls_print_styles', 'amadeus_customizer_styles' );

/* tgm-plugin-activation */
require_once get_template_directory() . '/class-tgm-plugin-activation.php';

/**
 * TGMPA register
 */
function amadeus_register_required_plugins() {
	$plugins = array(

		array(
			'name'     => 'Orbit Fox',
			'slug'     => 'themeisle-companion',
			'required' => false,
		),

		array(
			'name'     => 'Nivo Slider Lite',
			'slug'     => 'nivo-slider-lite',
			'required' => false,
		),

		array(
			'name'     => 'Pirate Forms',
			'slug'     => 'pirate-forms',
			'required' => false,
		),
	);

	$config = array(
		'default_path' => '',
		'menu'         => 'tgmpa-install-plugins',
		'has_notices'  => true,
		'dismissable'  => true,
		'dismiss_msg'  => '',
		'is_automatic' => false,
		'message'      => '',
	);

	tgmpa( $plugins, $config );

}
add_action( 'tgmpa_register', 'amadeus_register_required_plugins' );


/**
 * Change the excerpt length
 */
function amadeus_excerpt_length( $length ) {
	$excerpt = get_theme_mod( 'exc_lenght', '55' );
	return $excerpt;
}
add_filter( 'excerpt_length', 'amadeus_excerpt_length', 999 );

/**
 * Excerpt more link
 */
function amadeus_excerpt_more( $more ) {
	return sprintf(
		'&hellip;<a href="%1$s" class="more-link">%2$s</a>',
		esc_url( get_permalink( get_the_ID() ) ),
		/* translators: post title */
		sprintf( __( 'Continue reading %s', 'amadeus' ), '<span class="screen-reader-text">' . get_the_title( get_the_ID() ) . '</span>' )
	);
}
add_filter( 'excerpt_more', 'amadeus_excerpt_more' );

/**
 * Footer credits
 */
function amadeus_footer_credits() {
	echo '<a href="' . esc_url( __( 'http://wordpress.org/', 'amadeus' ) ) . '" rel="nofollow">';
	/* translators: WordPress */
	printf( __( 'Proudly powered by %s', 'amadeus' ), 'WordPress' );
	echo '</a>';
	echo '<span class="sep"> | </span>';
	/* translators: 1 - WordPress link, 2 - Theme name */
	printf( __( 'Theme: %2$s by %1$s.', 'amadeus' ), 'Themeisle', '<a href="http://themeisle.com/themes/amadeus/" rel="nofollow">Amadeus</a>' );
}
add_action( 'amadeus_footer', 'amadeus_footer_credits' );

/**
 * Load html5shiv
 */
function amadeus_html5shiv() {
	echo '<!--[if lt IE 9]>' . "\n";
	echo '<script src="' . esc_url( get_template_directory_uri() . '/js/html5shiv.js' ) . '"></script>' . "\n";
	echo '<![endif]-->' . "\n";
}
add_action( 'wp_head', 'amadeus_html5shiv' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';

/**
 * Banner
 */
require get_template_directory() . '/inc/banner.php';

/**
 * Styles
 */
require get_template_directory() . '/inc/styles.php';

/**
 *  Upsells
 */
require_once( trailingslashit( get_template_directory() ) . 'inc/class/class-customizer-theme-info-control/class-customizer-theme-info-root.php' );

/**
 * Filter for post's classes.
 *
 * @param array $classes Classes from posts.
 *
 * @return array
 */
function amadeus_post_class( $classes ) {
	global $post;

	$amadeus_index_feat_image = get_theme_mod( 'index_feat_image' );
	$amadeus_post_feat_image  = get_theme_mod( 'post_feat_image' );

	if ( ( is_single() && ! empty( $amadeus_post_feat_image ) && ( $amadeus_post_feat_image == 1 ) ) || ( is_home() && ! empty( $amadeus_index_feat_image ) && ( $amadeus_index_feat_image == 1 ) ) ) {
		$classes[] = 'amadeus-image-hidden';
	}

	return $classes;
}
add_filter( 'post_class', 'amadeus_post_class' );


/**
 * Add a dismissible notice in the dashboard about Neve
 */
function amadeus_neve_notice() {
	global $current_user;
	$user_id        = $current_user->ID;
	$ignored_notice = get_user_meta( $user_id, 'amadeus_ignore_neve_notice_new' );
	if ( ! empty( $ignored_notice ) ) {
		return;
	}
	$should_display_notice = amadeus_is_before_date( '2019-09-12' );
	if ( ! $should_display_notice ) {
		return;
	}
	$dismiss_button =
		sprintf(
			/* translators: Install Neve link */
			'<a href="%s" class="notice-dismiss" style="text-decoration:none;"></a>',
			'?amadeus_nag_ignore_neve=0'
		);
	$message = sprintf(
		/* translators: Install Neve link */
		esc_html__( 'Check out %1$s. Fully AMP optimized and responsive, Neve will load in mere seconds and adapt perfectly on any viewing device. Neve works perfectly with Gutenberg and the most popular page builders. You will love it!', 'amadeus' ),
		sprintf(
			/* translators: Install Neve link */
			'<a target="_blank" href="%1$s"><strong>%2$s</strong></a>',
			esc_url( admin_url( 'theme-install.php?theme=neve' ) ),
			esc_html__( 'our newest theme', 'amadeus' )
		)
	);
	printf( '<div class="notice updated" style="position:relative;">%1$s<p>%2$s</p></div>', $dismiss_button, $message );
}
add_action( 'admin_notices', 'amadeus_neve_notice' );
/**
 * Update the amadeus_ignore_neve_notice_new option to true, to dismiss the notice from the dashboard
 */
function amadeus_nag_ignore_neve() {
	global $current_user;
	$user_id = $current_user->ID;
	/* If user clicks to ignore the notice, add that to their user meta */
	if ( isset( $_GET['amadeus_nag_ignore_neve'] ) && '0' == $_GET['amadeus_nag_ignore_neve'] ) {
		add_user_meta( $user_id, 'amadeus_ignore_neve_notice_new', 'true', true );
	}
}
add_action( 'admin_init', 'amadeus_nag_ignore_neve' );

/**
 * Function that decide if current date is before a certain date.
 *
 * @param string $date Date to compare.
 * @return bool
 */
function amadeus_is_before_date( $date ) {
	$countdown_time = strtotime( $date );
	$current_time   = time();
	return $current_time <= $countdown_time;
}

/**
 * Retirement notice
 */
function amadeus_retirement_notice() {
	global $current_user;
	$user_id        = $current_user->ID;
	$ignored_notice = get_user_meta( $user_id, 'amadeus_ignore_retirement_notice' );
	if ( ! empty( $ignored_notice ) ) {
		return;
	}
	$should_display_notice = ! amadeus_is_before_date( '2019-09-12' );
	if ( ! $should_display_notice ) {
		return;
	}
	$dismiss_button =
		sprintf(
			/* translators: Install Neve link */
			'<a href="%s" class="notice-dismiss" style="text-decoration:none;"></a>',
			'?amadeus_nag_ignore_retirement=0'
		);

	$theme_args = wp_get_theme();
	$name       = $theme_args->__get( 'Name' );

	$notice_template = '
			<div class="nv-notice-wrapper">
			%1$s
			<hr/>
				<div class="nv-notice-column-container">
					<div class="nv-notice-column nv-notice-image">%2$s</div>
					<div class="nv-notice-column nv-notice-starter-sites">%3$s</div>
					<div class="nv-notice-column nv-notice-documentation">%4$s</div>
				</div> 
			</div>
			<style>%5$s</style>';

	/* translators: 1 - notice title, 2 - notice message */
	$notice_header = sprintf(
		'<h2>%1$s</h2><p class="about-description">%2$s</p></hr>',
		esc_html__( 'Your theme is no longer maintained. A New, Modern WordPress Theme is Here!', 'amadeus' ),
		sprintf(
			/* translators: %s - theme name */
			esc_html__( '%s is no longer maintained. Switch to Neve today and get more powerful features (for free).', 'amadeus' ),
			$name
		)
	);

	$notice_picture = sprintf(
		'<picture>
					<source srcset="about:blank" media="(max-width: 1024px)">
					<img src="%1$s">
				</picture>',
		esc_url( get_template_directory_uri() . '/images/neve.png' )
	);

	$notice_right_side_content = sprintf(
		'<div><h3> %1$s</h3><p>%2$s</p></div>',
		__( 'Switch to Neve today', 'amadeus' ),
		// translators: %s - theme name
		esc_html__( 'With Neve you get a super fast, multi-purpose theme, fully AMP optimized and responsive, that works perfectly with Gutenberg and the most popular page builders like Elementor, Beaver Builder, and many more.', 'amadeus' )
	);

	$notice_left_side_content = sprintf(
		'<div><h3> %1$s</h3><p>%2$s</p><p class="nv-buttons-wrapper"><a class="button button-hero button-primary" href="%3$s" target="_blank">%4$s</a></p> </div>',
		// translators: %s - theme name
		sprintf( esc_html__( '%s is no longer maintained', 'amadeus' ), $name ),
		// translators: %s - theme name
		sprintf( __( 'We\'re saying goodbye to amadeus in favor of our more powerful Neve free WordPress theme. This means that there will not be any new features added although we will continue to update the theme for major security issues.', 'amadeus' ) ),
		esc_url( admin_url( 'theme-install.php?theme=neve' ) ),
		esc_html__( 'See Neve theme', 'amadeus' )
	);

	$style = '
				.nv-notice-wrapper p{
					font-size: 14px;
				}
				.nv-buttons-wrapper {
					padding-top: 20px !important;
				}
				.nv-notice-wrapper h2{
					margin: 0;
					font-size: 21px;
					font-weight: 400;
					line-height: 1.2;
				}
				.nv-notice-wrapper p.about-description{
					color: #72777c;
					font-size: 16px;
					margin: 0;
					padding:0px;
				}
				.nv-notice-wrapper{
					padding: 23px 10px 0;
					max-width: 1500px;
				}
				.nv-notice-wrapper hr {
					margin: 20px -23px 0;
					border-top: 1px solid #f3f4f5;
					border-bottom: none;
				}
				.nv-notice-column-container h3{	
					margin: 17px 0 0;
					font-size: 16px;
					line-height: 1.4;
				}
				.nv-notice-text p.ti-return-dashboard {
					margin-top: 30px;
				}
				.nv-notice-column-container .nv-notice-column{
					 padding-right: 60px;
				} 
				.nv-notice-column-container img{ 
					margin-top: 23px;
					width: 100%;
					border: 1px solid #f3f4f5; 
				} 
				.nv-notice-column-container { 
					display: -ms-grid;
					display: grid;
					-ms-grid-columns: 24% 32% 32%;
					grid-template-columns: 24% 32% 32%;
					margin-bottom: 13px;
				}
				.nv-notice-column-container a.button.button-hero.button-secondary,
				.nv-notice-column-container a.button.button-hero.button-primary{
					margin:0px;
				}
				@media screen and (max-width: 1280px) {
					.nv-notice-wrapper .nv-notice-column-container {
						-ms-grid-columns: 50% 50%;
						grid-template-columns: 50% 50%;
					}
					.nv-notice-column-container a.button.button-hero.button-secondary,
					.nv-notice-column-container a.button.button-hero.button-primary{
						padding:6px 18px;
					}
					.nv-notice-wrapper .nv-notice-image {
						display: none;
					}
				} 
				@media screen and (max-width: 870px) {
					 
					.nv-notice-wrapper .nv-notice-column-container {
						-ms-grid-columns: 100%;
						grid-template-columns: 100%;
					}
					.nv-notice-column-container a.button.button-hero.button-primary{
						padding:12px 36px;
					}
				}
			';

	$message = sprintf(
		$notice_template,
		$notice_header,
		$notice_picture,
		$notice_left_side_content,
		$notice_right_side_content,
		$style
	);// WPCS: XSS OK.

	printf( '<div class="notice updated" style="position:relative; padding-right: 35px;">%1$s<p>%2$s</p></div>', $dismiss_button, $message );
}
add_action( 'admin_notices', 'amadeus_retirement_notice' );

/**
 * Update the amadeus_ignore_retirement_notice option to true, to dismiss the notice from the dashboard
 */
function amadeus_nag_ignore_retirement() {
	global $current_user;
	$user_id = $current_user->ID;
	/* If user clicks to ignore the notice, add that to their user meta */
	if ( isset( $_GET['amadeus_nag_ignore_retirement'] ) && '0' == $_GET['amadeus_nag_ignore_retirement'] ) {
		add_user_meta( $user_id, 'amadeus_ignore_retirement_notice', 'true', true );
	}
}
add_action( 'admin_init', 'amadeus_nag_ignore_retirement' );

