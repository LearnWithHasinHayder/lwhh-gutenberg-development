var el = wp.element.createElement;
var registerBlockType = wp.blocks.registerBlockType;
var __ = wp.i18n.__;
var blockStyles = {
    backgroundColor: '#0073aa',
    color: 'white',
    padding: '2em 2.5em',
    textAlign: 'center'
};

registerBlockType( 'lwhhgd/block-1', {
    /**
     * Block title
     *
     * @type {string}
     */
    title: __( 'LWHH Hello World' ),

    /**
     * Block description
     *
     * @type {string}
     */
    description: __( 'Hello World is a dummy block to demonstrate what are blockers to develop a block.' ),

    /**
     * Block icon
     *
     * @type {string|object}
     */
    icon: 'admin-site',

    /**
     * Block category
     *
     * @type {string}
     */
    category: 'common', //common | formatting | layout | widgets | embed

    /**
     * Block keywords helps to search the block
     *
     * @type {array}
     */
    keywords: [ __( 'lwhh' ), __( 'hello world' ), __( 'test block' ) ],

    /**
     * Block attribute or fields map
     *
     * @type {object}
     */
    attributes: {
        heading: {
            type: 'string',
            source: 'text',
            selector: 'h2',
            default: __( 'Hello World!' ) // Set default value
        },
        excerpt: {
            type: 'string',
            source: 'text',
            selector: 'p',
            default: __( 'This is a simple except to show how the default property works. Hope you got the idea.' ) // Set default value
        },
    },

    /**
     * Block edit function works on editor
     *
     * @type {block}
     */
    edit: function( props ) {
        return el( 'div', {style: blockStyles}, 'Hello World!' );
    },

    /**
     * Block save function works for output
     *
     * @type {block}
     */
    save: function( props ) {
        return el( 'div', {style: blockStyles}, 'Hello World!' );
    }
} );
