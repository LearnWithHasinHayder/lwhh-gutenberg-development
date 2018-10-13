<?php
/**
 * Block 1 definition and functions
 *
 * @package LWHH Gutenberg Development
 * @since 0.0.1
 */
defined( 'ABSPATH' ) || exit;

/**
 * Register block 1
 *
 * @return void
 */
function lwhhgd_register_block_1() {
    wp_register_script(
        'lwhhgd-block-1',
        plugins_url( 'index-es5.js', __FILE__ ),
        array( 'wp-blocks', 'wp-i18n', 'wp-element' )
    );

    register_block_type( 'lwhhgd/block-1', array(
        'editor_script' => 'lwhhgd-block-1',
    ) );
}
add_action( 'init', 'lwhhgd_register_block_1' );
