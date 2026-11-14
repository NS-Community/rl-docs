// Post-build step: overwrite Docusaurus's default 404.html with a redirect to
// the site's only page — the Terms of Service & Privacy Policy. This site
// publishes a single document, so any legacy wiki URL or broken link must land
// back on that page instead of a dead-end "Page Not Found".
//
// Usage: node scripts/fix-404.mjs [outDir]   (defaults to "build")
import { existsSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.argv[2] || 'build';

function redirectHtml(url) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>North</title>
<meta http-equiv="refresh" content="0; url=${url}">
</head>
<body>
<script>window.location.replace(${JSON.stringify(url)});</script>
</body>
</html>
`;
}

function fix(dir, url) {
  const target = join(dir, '404.html');
  if (!existsSync(target)) return;
  writeFileSync(target, redirectHtml(url));
  console.log(`[fix-404] ${target} -> ${url}`);
}

if (!existsSync(outDir)) {
  console.error(`[fix-404] output directory not found: ${outDir}`);
  process.exit(1);
}

// Root 404.html redirects to the site root (the terms page).
fix(outDir, '/');

// Each locale subpath (e.g. /zh-Hans/) gets its own 404.html -> /<locale>/.
for (const entry of readdirSync(outDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  fix(join(outDir, entry.name), `/${entry.name}/`);
}
