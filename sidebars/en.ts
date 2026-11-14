import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// rl.nsbbs.eu.cc publishes a single page: docs/intro.mdx (slug: /).
// The former wiki pages have been removed, so the sidebar has one entry only.
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '服务条款与隐私政策',
    },
  ],
};

export default sidebars;
