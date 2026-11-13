import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'North',

  favicon: 'img/north-mark.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    // Use the faster toolchain (Rspack + SWC + Lightning CSS + MDX-rs)
    // provided by the installed @docusaurus/faster package.
    faster: true,
  },

  // The terms site is served from the domain root of its own custom domain.
  // baseUrl must stay '/' — a '/<projectName>/' path here would break every
  // static asset when opened at https://rl.nsbbs.eu.cc/.
  url: 'https://rl.nsbbs.eu.cc',
  baseUrl: '/',

  // Deployed to the custom domain above, not GitHub Pages: no
  // organizationName / projectName deploy target is needed.

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    }
  },

  // Reapply saved theme preferences BEFORE first paint so the navbar/active
  // states don't flash defaults on reload. The pickers (initThemeColorPicker,
  // initSidebarToolbar) own these attributes thereafter; this only sets them
  // early. Runs in <head>, before React mounts.
  headTags: [
    {
      tagName: 'script',
      attributes: {},
      innerHTML: `
      try {
        const themeColor = localStorage.getItem('theme-color');
        if (themeColor) {
          document.documentElement.setAttribute('data-theme-color', themeColor);
        }
      } catch (_) {}
      try {
        const eyecare = localStorage.getItem('eyecare');
        if (eyecare) {
          document.documentElement.setAttribute('data-eyecare', eyecare);
        }
      } catch (_) {}
      `,
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // No editUrl: this is a terms site, not a community-editable wiki.
          // Last-update metadata requires a Git worktree and hard-fails the
          // whole build on static deployments, so keep it disabled.
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'North',
      logo: {
        src: 'img/north-mark.svg',
        width: 32,
        height: 32,
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java'],
    },
    colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    zoom: {
      selector: '.markdown img',
      background: {
        light: 'rgba(255,255,255,0.8)',
        dark: 'rgba(36,36,36,0.8)',
      },
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ["en", "zh"],
        searchBarShortcutKeymap: "ctrl+shift+f",
        docsRouteBasePath: "/",
      }),
    ],
    'docusaurus-plugin-image-zoom',
  ],
};

export default config;
