const { createElement, Fragment } = wp.element;
const { registerBlockType } = wp.blocks;
const { __ } = wp.i18n;

registerBlockType('lwhhgd/hello-world', {
    title: __('Hello World'),
    description: __('This is hello world block.'),
    category: 'lwhhgd', // common, formatting, layout widgets embed
    icon: {
        src: 'admin-customizer',
        background: 'purple',
        foreground: 'green'
    },
    keywords: [
        __('hello world'),
        __('dummy block'),
        __('lwhh')
    ],
    attributes: {},
    styles: [],
    transforms: {},
    // parent: [],
    supports: {
        // align: true,
        // alignWide: false,
        // anchor: true,
        //customClassName: true,
        // className: false
        // html: false,
        // inserter: false
        // multiple: false,
        // reusable: false
    },
    edit() {
        return createElement('h2', {}, 'Hello World!');
    },
    save() {
        return createElement('h2', {}, 'Hello Awesome World!');
    }
});
