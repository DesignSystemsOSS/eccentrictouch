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
        id: "hacktoberfest-21",
        content:
          "We are participating in <b>Hacktoberfest 2021</b> Contribute to Eccentric Touch this October. <a href='https://github.com/DesignSystemsOSS/thedesignsystems-planning/blob/master/hacktoberfest/2021/Planning.md'>Learn More</a>",
        backgroundColor: "var(--color-purple-900)",
        textColor: "var(--neutral-gray-100)",
        isCloseable: false,
      },
      navbar: {
        title: 'Eccentric Touch Documentation',
        logo: {
          alt: 'thedesignsystems-logo',
          src: 'https://ik.imagekit.io/vjy2bxam20u/TheDesignSystems-Assets/logo-discord_no_bg_NsvWF5MSFR.png?updatedAt=1631737806979',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
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
        copyright: `Copyright © ${new Date().getFullYear()} Eccentric Touch, by The DesignSystems, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
