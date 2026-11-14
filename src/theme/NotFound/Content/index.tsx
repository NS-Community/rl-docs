import React, {type ReactNode} from 'react';

// Leaf component that actually renders the 404 body. Redirecting here (in
// addition to the NotFound wrapper) guarantees the fallback works even if the
// wrapper is ever bypassed. Any unknown path lands back on the single Terms
// of Service & Privacy Policy page.
export default function NotFoundContent(): ReactNode {
  React.useEffect(() => {
    const path = window.location.pathname || '/';
    const home = path.startsWith('/zh-Hans/') ? '/zh-Hans/' : '/';
    window.location.replace(home);
  }, []);

  return (
    <main className="container margin-vert--lg">
      <p>正在跳转到《服务条款与隐私政策》…</p>
    </main>
  );
}
