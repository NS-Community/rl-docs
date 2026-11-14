import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// 中文语言同样只发布《服务条款与隐私政策》一页（current/intro.mdx，slug: /）。
// 导航层级与英文一致：Gamesense（大类）› skintro（子类）› 条款。
// 原 wiki 其余文档已移除，子类下仅此一页。
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
