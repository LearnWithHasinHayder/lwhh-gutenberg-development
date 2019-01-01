<?php
/*
Plugin Name: LWHH Gutenberg Development
Plugin URI: https://github.com/LearnWithHasinHayder/lwhh-gutenberg-development
Description: Demonstration plugin to learn WordPress gutenberg development with LWHH
Version: 0.0.1
Author: LWHH
Author URI: https://learnwith.hasinhayder.com/wp/wordpress-gutenberg-development/
License: GPLv2 or later
Text Domain: lwhhgd
*/

defined( 'ABSPATH' ) || exit;

require plugin_dir_path( __FILE__ ) . 'blocks/block-1/index.php';
require plugin_dir_path( __FILE__ ) . 'blocks/block-2/index.php';

function lwhhgd_enqueue_block_assets() {
    wp_enqueue_style(
        'lwhhgd-block-1',
        plugins_url( 'blocks/block-1/style.css', __FILE__ ),
        array( 'wp-blocks' )
    );

    if ( is_admin() ) {
        wp_enqueue_style(
            'lwhhgd-block-1-editor',
            plugins_url( 'blocks/block-1/editor.css', __FILE__ ),
            array( 'wp-edit-blocks' )
        );
    }
}
// add_action( 'enqueue_block_assets', 'lwhhgd_enqueue_block_assets' );

function lwhhgd_add_block_categories( $categories, $post ) {
    if ( 'page' !== get_post_type( $post ) ) {
        return $categories;
    }
    return array_merge( $categories, array(
        array(
            'slug' => 'lwhhgd',
            'title' => __( 'LWHH GD', 'lwhhgd' ),
        )
    ) );
}
add_filter( 'block_categories', 'lwhhgd_add_block_categories', 10, 2 );