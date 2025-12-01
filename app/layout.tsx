import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "大溫社區中心活動一站式搜尋",
  description: "Vancouver ⋅ Burnaby ⋅ Coquitlam ⋅ New West ⋅ Richmond ⋅ Surrey ⋅ 北溫 ⋅ 西溫",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-HK">
      <body className="dark:bg-black">{children}</body>
    </html>
  );
}
