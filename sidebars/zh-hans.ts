import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// 中文语言同样只发布《服务条款与隐私政策》一页（current/intro.mdx，slug: /）。
// 原 wiki 的其余文档已移除，侧栏不再有分类与子页面。
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
