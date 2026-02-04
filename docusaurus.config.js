// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking

import {themes as prismThemes} from 'prism-react-renderer';



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GDSH',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/mask.png',

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
        },
        blog: {
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
          {to: '/blog', label: 'Blog', position: 'left'},
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
};

export default config;
