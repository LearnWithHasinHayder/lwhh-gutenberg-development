; (function (wp) {
    const { createElement } = wp.element;
    const { registerBlockType } = wp.blocks;
    const { __ } = wp.i18n;

    function hasStyle(className) {
        return (className && (
            className.includes('is-style-rounded') ||
            className.includes('is-style-outline')
        ));
    }

    registerBlockType('lwhhgd/btn', {
        title: __('Button'),
        description: __('This is a simple button block.'),
        category: 'lwhhgd',
        icon: 'editor-removeformatting',
        keywords: [
            __('btn'),
            __('button'),
        ],
        styles: [
            {
                name: 'rounded',
                label: __('Rounded'),
                isDefault: true
            },
            {
                name: 'outline',
                label: __('Outline'),
            }
        ],
        edit({ className }) {
            hasStyle(className) || (className += ' is-style-rounded');
            return createElement('a', { className: className }, 'Button');
        },
        save({ className }) {
            hasStyle(className) || (className += ' is-style-rounded');
            return createElement('a', { className: className }, 'Button');
        }
    });
}(window.wp));
