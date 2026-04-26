import {visit} from 'unist-util-visit';

const plugin = () => {
  const transformer = (ast) => {
    visit(ast, 'image', (node, index, parent) => {
      const url = node.url;
      if (!url.match(/youtu\.?be/)) return;

      const match =
        url.match(/youtube\.com\/watch\?v=([^&]+)/) ||
        url.match(/youtu\.be\/([^?]+)/);
      if (!match) return;

      const videoId = match[1];

      parent.children.splice(index, 1, {
        type: 'mdxJsxFlowElement',
        name: 'iframe',
        attributes: [
          { type: 'mdxJsxAttribute', name: 'width', value: '100%' },
          {
            type: 'mdxJsxAttribute',
            name: 'style',
            value: {
              type: 'mdxJsxAttributeValueExpression',
              value: '({aspectRatio: "16/9"})',
              data: {
                estree: {
                  type: 'Program',
                  body: [{
                    type: 'ExpressionStatement',
                    expression: {
                      type: 'ObjectExpression',
                      properties: [{
                        type: 'Property',
                        key: { type: 'Identifier', name: 'aspectRatio' },
                        value: { type: 'Literal', value: '16/9' },
                        kind: 'init',
                      }],
                    },
                  }],
                  sourceType: 'module',
                },
              },
            },
          },
          { type: 'mdxJsxAttribute', name: 'src', value: `https://www.youtube.com/embed/${videoId}` },
          { type: 'mdxJsxAttribute', name: 'frameBorder', value: '0' },
          { type: 'mdxJsxAttribute', name: 'allowFullScreen', value: null },
        ],
        children: [],
      });
    });
  };
  return transformer;
};

export default plugin;