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
  add_action( 'wp_ajax_get_empty_users', 'get_empty_users' );
  function get_empty_users() {
    global $wpdb;
  // Same handler function...
//    $result = get_posts(array(
//      'author'        =>  1,
//      'post_type' => 'post',
//      'post_status'    => 'any',
//      'fields'          => 'ids', // Only get post IDs
//      'posts_per_page'  => -1
//    ));
//
    $authors = get_transient('mytheme_all_authorr');
    if (empty($authors)){

      $user_args = array(
//        'role__in'    => array('Author', 'Administrator', 'Contributor'),
//        'orderby' => 'post_count',
////        'post_status'    => 'any',
//        'order'   => 'DESC',
//        'count_total'  => true,
//        'has_published_posts'  => false,
//        'has_published_posts' => array('post'),
        'fields'          => 'ids',
        'role' => 'Subscriber',
      );

      $authors = new WP_User_Query( $user_args );
      set_transient('mytheme_all_authorr', $authors, 1 * HOUR_IN_SECONDS );
    }

    $total= $authors->get_total();
    $authors = $authors->results;

    echo json_encode($authors);

    //echo count($result);
    //    print_r( $result);

    wp_die();
  }

  // Same handler function...
  add_action( 'wp_ajax_get_ids', 'get_ids' );
  function get_ids() {
    global $wpdb;
  // Same handler function...
    $result = get_posts(array(
      'author'        =>  1,
      'post_type' => 'post',
      'post_status'    => 'any',
      'fields'          => 'ids', // Only get post IDs
      'posts_per_page'  => -1
    ));

    echo json_encode($result);

    //echo count($result);
    //    print_r( $result);

    wp_die();
  }


  add_action( 'wp_ajax_my_action', 'my_action' );
  function my_action() {
    global $wpdb;
//    $whatever = intval( $_POST['whatever'] );
//    $whatever += 10;

    $args = array(
      'post_type' => 'post',
      'posts_per_page'   => -1,
//      'meta_query' => array(
//        array(
//          'key' => 'bookingref',
//          'value' => 'the_value_you_want',
//          'compare' => 'LIKE'
//        ),
//        array(
//          'key' => 'customerref',
//          'value' => 'the_value_you_want',
//          'compare' => 'LIKE'
//        )
//      )
    );
    $result = query_posts($args);

    $iter = 0;

    $response = array();

  foreach ($result as $post_item) {
    $post_id = $post_item->ID;

    $author_id = intval($post_item->post_author);
    $author_display_name = get_the_author_meta( 'display_name' , $author_id );
    $author_nickname= get_the_author_meta( 'nickname' , $author_id );

    $custom_post_username = get_post_meta( $post_id, 'username',true );
    $custom_post_nicename = get_post_meta( $post_id, 'nicename',true );
    $custom_post_edited = get_post_meta( $post_id, 'edited',true );

    $custom_author_obj = get_user_by('slug', $custom_post_username);

    if ($custom_author_obj != false ) {
      $custom_author_data = $custom_author_obj->data;
      $custom_author_id = intval($custom_author_data->ID);
      $custom_author_display_name = $custom_author_data->display_name;
      $custom_author_nicename = $custom_author_data->user_nicename;

      $is_author_different = $author_id != $custom_author_id;
      $is_author_has_nice_display_name = $custom_post_nicename == $custom_author_display_name;
      $is_custom_author_absent = false;
    } else {
//      $userdata = array(
//        'user_pass'       => 'superssffalmlolxmslgvm34i', // обязательно
//        'user_login'      => $custom_post_username, // обязательно
//        'user_nicename'   => $custom_post_nicename,
//        'display_name'    => $custom_post_nicename,
//        'nickname'        => $custom_post_nicename,
//      );
//
//      $custom_author_id = wp_insert_user( $userdata );

      $custom_author_id = false;

      $custom_author_data = false;
      $custom_author_display_name = false;
      $custom_author_nicename = false;

      $is_author_different = false;
      $is_author_has_nice_display_name = true;
      $is_custom_author_absent = true;
    }


    if ($is_author_different) {
      $arg = array(
        'ID' => $post_id,
        'post_author' => $custom_author_id,
      );
      wp_update_post( $arg );
    }

    if ($is_author_has_nice_display_name == false) {
      $updated_user_display_name = wp_update_user( array( 'ID' => $custom_author_id, 'display_name' => $custom_post_nicename ) );
      $updated_user_nickname = wp_update_user( array( 'ID' => $custom_author_id, 'nickname' => $custom_post_nicename ) );
    } else {
      $updated_user_display_name = 'nochanges';
      $updated_user_nickname = 'nochanges';
    }

//    $updated_nickname = 'nochanges';
//    $updated_display_name = 'nochanges';



//    if ($post_id === 48 && $is_author_has_nicename === false) {
//    if ($post_id === 209 ) {
//    if ($is_author_has_nicename === false) {
//    if ($is_custom_author_absent) {



//      delete_user_meta($author_data_id, 'display_name');
//      delete_user_meta($author_data_id, 'nicename');
//      delete_user_meta($author_data_id, 'username');
//      delete_user_meta($author_data_id, 'nickname');
//
//      $updated_nickname = update_user_meta( $author_data_id, 'nickname', $post_nicename );
//      $updated_display_name= update_user_meta( $author_data_id, 'display_name', $post_nicename );
//      $updated_nicename = update_user_meta( $author_data_id, 'nicename', $post_nicename );
//      $updated_username = update_user_meta( $author_data_id, 'username', $post_nicename );




    $item = array(
      "post_id" => $post_id,
      "author_id" => $author_id,
      "author_display_name" => $author_display_name,
      "author_nickname" => $author_nickname,
      "custom_post_username" => $custom_post_username,
      "custom_post_nicename" => $custom_post_nicename,
      "custom_post_edited" => $custom_post_edited,
      "custom_author_id" => $custom_author_id,
      "custom_author_data" => $custom_author_data,
      "custom_author_display_name" => $custom_author_display_name,
      "custom_author_nicename" => $custom_author_nicename,
      "is_author_different" => $is_author_different,
      "is_author_has_nice_display_name" => $is_author_has_nice_display_name,
      "is_custom_author_absent" => $is_custom_author_absent,
      "updated_user_nickname" => $updated_user_nickname,
      "updated_user_display_name" => $updated_user_display_name,

      //      "updated_user_data_nickname" => $updated_user_data_nickname,
//      "updated_display_name" => $updated_display_name,
//      "updated_nicename" => $updated_nicename,




    );

    array_push($response, $item);

//    }


//    $author_obj
//      array_push($author_obj, $item);

//    wp_insert_user
//    https://wp-kama.ru/function/wp_insert_user
//    print_r($post_id);
//    echo ', ';
    $iter++;
  }

    echo json_encode($response);

//echo count($result);
//    print_r( $result);

    wp_die();
  }




  add_action( 'wp_ajax_my_action_chanked', 'my_action_chanked' );
  function my_action_chanked() {
    global $wpdb;
        $whatever =$_POST['whatever'];
//        $whatever = intval( $_POST['whatever'] );
    //    $whatever += 10;


//    echo $whatever ;
//    echo json_encode(is_array ($whatever ));
//    echo json_decode($whatever );

    $args = array(
      'post_type' => 'post',
      'posts_per_page'   => -1,
      'post__in' => $whatever
      //      'meta_query' => array(
      //        array(
      //          'key' => 'bookingref',
      //          'value' => 'the_value_you_want',
      //          'compare' => 'LIKE'
      //        ),
      //        array(
      //          'key' => 'customerref',
      //          'value' => 'the_value_you_want',
      //          'compare' => 'LIKE'
      //        )
      //      )
    );
    $result = query_posts($args);

    $iter = 0;

    $response = array();

    foreach ($result as $post_item) {
      $post_id = $post_item->ID;

      $author_id = intval($post_item->post_author);
      $author_display_name = get_the_author_meta( 'display_name' , $author_id );
      $author_nickname= get_the_author_meta( 'nickname' , $author_id );

      $custom_post_username = get_post_meta( $post_id, 'username',true );
      $custom_post_nicename = get_post_meta( $post_id, 'nicename',true );
      $custom_post_edited = get_post_meta( $post_id, 'edited',true );

      $custom_author_obj = get_user_by('login', $custom_post_username);
//      $custom_author_obj = get_user_by('slug', $custom_post_username);

      if ($custom_author_obj != false ) {
        $custom_author_data = $custom_author_obj->data;
        $custom_author_id = intval($custom_author_data->ID);
        $custom_author_display_name = $custom_author_data->display_name;
        $custom_author_nicename = $custom_author_data->user_nicename;

        $is_author_different = $author_id != $custom_author_id;
        $is_author_has_nice_display_name = $custom_post_nicename == $custom_author_display_name;
        $is_custom_author_absent = false;
      } else {
        //      $userdata = array(
        //        'user_pass'       => 'superssffalmlolxmslgvm34i', // обязательно
        //        'user_login'      => $custom_post_username, // обязательно
        //        'user_nicename'   => $custom_post_nicename,
        //        'display_name'    => $custom_post_nicename,
        //        'nickname'        => $custom_post_nicename,
        //      );
        //
        //      $custom_author_id = wp_insert_user( $userdata );

        $custom_author_id = false;

        $custom_author_data = false;
        $custom_author_display_name = false;
        $custom_author_nicename = false;

        $is_author_different = false;
        $is_author_has_nice_display_name = true;
        $is_custom_author_absent = true;
      }


      if ($is_author_different) {
        $arg = array(
          'ID' => $post_id,
          'post_author' => $custom_author_id,
        );
        wp_update_post( $arg );
      }

      if ($is_author_has_nice_display_name == false) {
        $updated_user_display_name = wp_update_user( array( 'ID' => $custom_author_id, 'display_name' => $custom_post_nicename ) );
        $updated_user_nickname = wp_update_user( array( 'ID' => $custom_author_id, 'nickname' => $custom_post_nicename ) );
      } else {
        $updated_user_display_name = 'nochanges';
        $updated_user_nickname = 'nochanges';
      }

      //    $updated_nickname = 'nochanges';
      //    $updated_display_name = 'nochanges';



      //    if ($post_id === 48 && $is_author_has_nicename === false) {
      //    if ($post_id === 209 ) {
      //    if ($is_author_has_nicename === false) {
      //    if ($is_custom_author_absent) {



      //      delete_user_meta($author_data_id, 'display_name');
      //      delete_user_meta($author_data_id, 'nicename');
      //      delete_user_meta($author_data_id, 'username');
      //      delete_user_meta($author_data_id, 'nickname');
      //
      //      $updated_nickname = update_user_meta( $author_data_id, 'nickname', $post_nicename );
      //      $updated_display_name= update_user_meta( $author_data_id, 'display_name', $post_nicename );
      //      $updated_nicename = update_user_meta( $author_data_id, 'nicename', $post_nicename );
      //      $updated_username = update_user_meta( $author_data_id, 'username', $post_nicename );




      $item = array(
        "post_id" => $post_id,
        "author_id" => $author_id,
        "author_display_name" => $author_display_name,
        "author_nickname" => $author_nickname,
        "custom_post_username" => $custom_post_username,
        "custom_post_nicename" => $custom_post_nicename,
        "custom_post_edited" => $custom_post_edited,
        "custom_author_id" => $custom_author_id,
        "custom_author_data" => $custom_author_data,
        "custom_author_display_name" => $custom_author_display_name,
        "custom_author_nicename" => $custom_author_nicename,
        "is_author_different" => $is_author_different,
        "is_author_has_nice_display_name" => $is_author_has_nice_display_name,
        "is_custom_author_absent" => $is_custom_author_absent,
        "updated_user_nickname" => $updated_user_nickname,
        "updated_user_display_name" => $updated_user_display_name,

        //      "updated_user_data_nickname" => $updated_user_data_nickname,
        //      "updated_display_name" => $updated_display_name,
        //      "updated_nicename" => $updated_nicename,




      );

      array_push($response, $item);

      //    }


      //    $author_obj
      //      array_push($author_obj, $item);

      //    wp_insert_user
      //    https://wp-kama.ru/function/wp_insert_user
      //    print_r($post_id);
      //    echo ', ';
      $iter++;
    }

//    echo 'done done done';
    echo json_encode($response);

    //echo count($result);
    //    print_r( $result);

    wp_die();
  }



  add_action( 'wp_ajax_my_action_chanked_authors', 'my_action_chanked_authors' );
  function my_action_chanked_authors() {
    global $wpdb;
        $whatever =$_POST['whatever'];
    $author_id = $whatever[0];
//    echo $whatever ;
//    echo json_encode(is_array ($whatever ));
//    echo json_decode($whatever );

    $args = array(
      'post_type' => 'post',
      'post_status' => 'any',
      'posts_per_page'   => -1,
      'author' => $author_id
    );
    $result = query_posts($args);

    $count = count($result);




    if ($count == 0 ) {
      $item = array(
        "author_id" => $author_id,
        "count" => $count,
        "remove" => true,
      );
      $isDeleted = wp_delete_user($author_id, 1);
    } else {
      $item = array(
        "author_id" => $author_id,
        "count" => $count,
        "remove" => false,
      );
    }

    echo json_encode($item);




    wp_die();
  }



