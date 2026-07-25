import {visit, SKIP} from 'unist-util-visit';

// ==[cor]texto== -> <mark style={{background: '#...', color: '#111111'}}>texto</mark>
const COLORS = {
  azul: '#8ecae6',
  blue: '#8ecae6',
  amarelo: '#ffe066',
  yellow: '#ffe066',
  laranja: '#ffb347',
  orange: '#ffb347',
  vermelho: '#ff6b6b',
  red: '#ff6b6b',
};

const TEXT_COLOR = '#111111';

const HIGHLIGHT_RE = /==\[(azul|blue|amarelo|yellow|laranja|orange|vermelho|red)\]([\s\S]+?)==/gi;

function styleExpression(background) {
  return {
    type: 'mdxJsxAttribute',
    name: 'style',
    value: {
      type: 'mdxJsxAttributeValueExpression',
      value: `({background: '${background}', color: '${TEXT_COLOR}'})`,
      data: {
        estree: {
          type: 'Program',
          body: [
            {
              type: 'ExpressionStatement',
              expression: {
                type: 'ObjectExpression',
                properties: [
                  {
                    type: 'Property',
                    key: {type: 'Identifier', name: 'background'},
                    value: {type: 'Literal', value: background},
                    kind: 'init',
                  },
                  {
                    type: 'Property',
                    key: {type: 'Identifier', name: 'color'},
                    value: {type: 'Literal', value: TEXT_COLOR},
                    kind: 'init',
                  },
                ],
              },
            },
          ],
          sourceType: 'module',
        },
      },
    },
  };
}

const plugin = () => {
  const transformer = (ast) => {
    visit(ast, 'text', (node, index, parent) => {
      if (!parent || index === null) return;

      HIGHLIGHT_RE.lastIndex = 0;
      if (!HIGHLIGHT_RE.test(node.value)) return;
      HIGHLIGHT_RE.lastIndex = 0;

      const newNodes = [];
      let lastIndex = 0;
      let match;

      while ((match = HIGHLIGHT_RE.exec(node.value))) {
        const [fullMatch, colorKey, text] = match;
        if (match.index > lastIndex) {
          newNodes.push({type: 'text', value: node.value.slice(lastIndex, match.index)});
        }
        newNodes.push({
          type: 'mdxJsxTextElement',
          name: 'mark',
          attributes: [styleExpression(COLORS[colorKey.toLowerCase()])],
          children: [{type: 'text', value: text}],
        });
        lastIndex = match.index + fullMatch.length;
      }
      if (lastIndex < node.value.length) {
        newNodes.push({type: 'text', value: node.value.slice(lastIndex)});
      }

      parent.children.splice(index, 1, ...newNodes);
      return [SKIP, index + newNodes.length];
    });
  };
  return transformer;
};

export default plugin;
