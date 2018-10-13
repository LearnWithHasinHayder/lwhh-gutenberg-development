const { createElement: el } = wp.element;
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;
const blockStyles = {
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
    category: 'layout', //common | formatting | layout | widgets | embed

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
        h2: {
            type: 'string',
            source: 'text',
            selector: 'h2',
            default: __( 'Hello World!' ) // Set default value
        },
    },

    /**
     * Block edit function works on editor
     *
     * @type {block}
     */
    edit( {attributes, setAttributes} ) {
        return el(
            'div',
            {style: blockStyles},
            el(
                'h2',
                {style: {color: 'white', marginTop: 0}},
                'Hello World!'
            ),
            el(
                'p',
                {style: {color: 'white'}},
                'আমরা করব জয় একদিন, ওহ বুকের গভীরে আছে প্রত্যয়, আমরা করব জয় একদিন।'
            ),
        );
    },

    /**
     * Block save function works for output
     *
     * @type {block}
     */
    save( {attributes, setAttributes} ) {
        return el(
            'div',
            {style: blockStyles},
            el(
                'h2',
                {style: {color: 'white', marginTop: 0}},
                'Hello World!'
            ),
            el(
                'p',
                {style: {color: 'white'}},
                'আমরা করব জয় একদিন, ওহ বুকের গভীরে আছে প্রত্যয়, আমরা করব জয় একদিন।'
            ),
        );
    }
} );
