import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// rl.nsbbs.eu.cc publishes a single page: docs/intro.mdx (slug: /).
// Navigation hierarchy: Gamesense (top category) › skintro (sub-category) › 条款.
// Former wiki pages were removed, so the sub-category holds only this one doc.
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Gamesense',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'skintro',
          collapsed: false,
          items: [
            {
              type: 'doc',
              id: 'intro',
              label: '服务条款与隐私政策',
            },
          ],
        },
      ],
    },
  ],
};

export default sidebars;
