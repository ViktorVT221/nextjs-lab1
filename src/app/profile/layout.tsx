// src/app/layout.tsx
import '../styles/globals.scss'; // Імпорт глобальних стилів

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
