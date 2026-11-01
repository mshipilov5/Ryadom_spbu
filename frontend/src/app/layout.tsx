import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Рядом — Практики',
  description: 'Каталог коротких практик самопомощи платформы Рядом',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
