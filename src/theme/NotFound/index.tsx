import React, {type ReactNode} from 'react';
import Layout from '@theme/Layout';

// This site publishes exactly one page: the Terms of Service & Privacy Policy.
// Any unknown path (e.g. legacy wiki links such as /docs/getting-started/...)
// must fall back to that single page instead of a dead-end 404. This covers
// both the dev server (docusaurus start) and client-side route misses.
export default function NotFound(): ReactNode {
  React.useEffect(() => {
    const path = window.location.pathname || '/';
    const home = path.startsWith('/zh-Hans/') ? '/zh-Hans/' : '/';
    window.location.replace(home);
  }, []);

  return (
    <Layout title="服务条款与隐私政策">
      <main className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2 text--center">
            <p>正在跳转到《服务条款与隐私政策》…</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
