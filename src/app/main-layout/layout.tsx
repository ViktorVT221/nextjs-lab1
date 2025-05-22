// src/app/main-layout/layout.tsx
import Link from "next/link";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav style={{ background: '#eee', padding: '10px' }}>
        <Link href="/articles" style={{ marginRight: '10px' }}>Articles</Link>
        <Link href="/profile/settings" style={{ marginRight: '10px' }}>Settings</Link>
        <Link href="/profile/security">Security</Link>
      </nav>
      <main style={{ padding: '20px' }}>
        {children}
      </main>
    </div>
  );
}
