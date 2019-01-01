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
        plugins_url( 'index.js', __FILE__ ),
        array( 'wp-blocks', 'wp-i18n', 'wp-element' )
    );

    // wp_register_style(
    //     'lwhhgd-block-1',
    //     plugins_url( 'style.css', __FILE__ ),
    //     array( 'wp-blocks' )
    // );

    // wp_register_style(
    //     'lwhhgd-block-1-editor',
    //     plugins_url( 'editor.css', __FILE__ ),
    //     array( 'wp-edit-blocks' )
    // );

    register_block_type( 'lwhhgd/hello-world', array(
        'editor_script' => 'lwhhgd-block-1',
        // 'editor_style' => 'lwhhgd-block-1-editor',
        // 'style' => 'lwhhgd-block-1',
    ) );
}
add_action( 'init', 'lwhhgd_register_block_1' );
