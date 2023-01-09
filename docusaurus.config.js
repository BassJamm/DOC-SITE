// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The IT KB',
  tagline: '',
  url: 'https://theitkb.co.uk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-book.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'TheITKB', // Usually your GitHub org/user name.
  projectName: 'KB-Project', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".

  plugins: [require.resolve('docusaurus-lunr-search')],
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-SYXJ4RP3B9',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/', // Serve the docs at the site's root
          // Please change this to your repo.
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'The IT Knowledge base',
        logo: {
          alt: 'My Site Logo',
          src: 'img/favicon-book.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Welcome',
            position: 'right',
            label: 'Docs',
          },
         // {to: '/blog',
         // label: 'Blog',
          //position: 'right'},
          {
            href: 'https://github.com/BassJamm',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Helpful Links',
            items: [
              {
                label: 'Microsoft Docs',
                href: 'https://learn.microsoft.com/en-in/docs/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/it_jamm',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/BassJamm',
              },
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} IT Jamm, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
      },
      metadata: [{name: 'keywords', content: 'IT, KnowledgeBase, Microsoft, Azure, Computers'}],
    // This would become <meta name="keywords" content="cooking, blog"> in the generated HTML
    }),
};

module.exports = config;
