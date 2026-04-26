// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import youtubePlugin from './src/remark/youtube.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GDSH',
  tagline: 'Personal website',
  favicon: 'img/mask.png',
  plugins: [
    require.resolve('docusaurus-plugin-image-zoom'),
  ],
  future: {
    v4: true,
  },
  url: 'https://book.gdsh.xyz',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath, youtubePlugin],
          rehypePlugins: [rehypeKatex],

        },
        blog: {
          remarkPlugins: [remarkMath, youtubePlugin],
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
  
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      zoom: {
        selector: '.markdown :not(em) > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        }
      },
      image: 'img/socialcard.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'GDSH',
        logo: {
          alt: 'My Site Logo',
          src: 'img/mask.png',
        },
        items: [
          {to: '/', label: 'home', position: 'left'},
          {to: '/blog', label: 'blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Ciência da Computação',
          //       to: '/docs/fundamentos/computerscience',
          //     },
          //   ],
          // },
          // {
          //   title: 'Cybersecurity',
          //   items: [
          //     {
          //       label: 'Android Security',
          //       to: '/docs/cybersecurity/androidsec',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GDSH, Inc. Built with pain and caffeine.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['powershell','java'],
      },
    }),
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],
};

export default config;
