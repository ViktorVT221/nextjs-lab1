// src/app/articles/layout.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./articles.css"; // можеш винести стилі сюди або використовуй Tailwind

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const links = [
    { href: "/articles/favorite", label: "Favorite Articles" },
    { href: "/articles/create", label: "Create Article" },
  ];

  return (
    <div>
      <nav className="mb-4 flex gap-4 border-b pb-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={
              pathname === link.href
                ? "text-blue-600 font-bold"
                : "text-gray-700 hover:underline"
            }
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div>{children}</div>
    </div>
  );
}
