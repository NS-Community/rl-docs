# rl-docs

North 服务条款与隐私政策站点，部署于 `https://rl.nsbbs.eu.cc/`，由论坛页脚的「服务条款 / 隐私政策」链接进入。

站点基于 Docusaurus 3，只发布这一页内容：首页在 `docs/intro.mdx`（`slug: /`），中文语言入口在 `i18n/zh-Hans/docusaurus-plugin-content-docs/current/intro.mdx`；两份内容保持一致，修改条款时请同步更新。原 wiki 的其余文档与页面已移除，侧栏（`sidebars/en.ts`、`sidebars/zh-hans.ts`）只保留《服务条款与隐私政策》一条入口。

由于全站只有这一页，任何无法匹配的旧链接或错误路径都会自动跳回本页：开发模式由 `src/theme/NotFound` 覆盖组件处理，构建产物则通过 `scripts/fix-404.mjs` 在 `404.html` 中写入重定向（含 `meta refresh` 兜底，无需 JS 也能跳转）。

## 本地开发

```bash
npm ci
npm start          # 默认语言预览
npm run start-zhcn # 中文语言预览
npm run build      # 静态产物输出到 build/
```

## 部署说明

- `url` 为 `https://rl.nsbbs.eu.cc`，`baseUrl` 必须保持 `/`。站点部署在域名根路径，改成 `/<项目名>/` 会导致所有静态资源 404。
- `.github/workflows/deploy.yml` 是手动触发的 GitHub Pages 工作流；在仓库设置里绑定自定义域名 `rl.nsbbs.eu.cc` 后即可使用，也可用任意静态托管构建 `npm run build` 并发布 `build/`。
- `showLastUpdateTime` / `showLastUpdateAuthor` 已关闭：这两项依赖 Git 工作树，在纯静态部署环境会让构建直接失败，条款页也无需展示「最后更新」。
- 仓库使用 npm 的 `package-lock.json`，不要提交 pnpm 锁文件。
