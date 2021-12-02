const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Eccentric Touch',
  tagline: 'Modern. Scalable design support',
  url: 'https://eccentrictouch.thedesignsystems.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',            
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'DesignSystemsOSS', // Usually your GitHub org/user name.
  projectName: 'eccentrictouch', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/DesignSystemsOSS/eccentrictouch/tree/docs/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/DesignSystemsOSS/eccentrictouch/tree/docs/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: "product-revamping-banner",
        content:
          "<b>What's New!</b> We are building new design support/solutions for developers for developing application designs.",
        backgroundColor: "var(--color-green-900)",
        textColor: "var(--white)",
        isCloseable: false,
      },
      navbar: {
        title: 'Eccentric Touch Documentation',
        logo: {
          alt: 'thedesignsystems-logo',
          src: 'https://ik.imagekit.io/vjy2bxam20u/TheDesignSystems-Assets/logo-blue-purple_EufNYn0ba.svg?updatedAt=1637436258402',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'right'},
          {to: '/screencasts', label: 'Screencasts', position: 'left'},
          {to: '/showcase', label: 'Projects Showcase', position: 'right'},
          {
            href: 'https://bit.ly/eccentrictouch-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/eccentrictouch',
              },
              {
                label: 'Discord',
                href: 'https://bit.ly/discord-thedesignsystems',
              },
              {
                label: 'Twitter',
                href: 'https://bit.ly/twitter-thedesignsystems',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'The DesignSystems - GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Eccentric Touch, by The DesignSystems. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
