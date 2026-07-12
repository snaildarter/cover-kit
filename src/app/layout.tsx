import type { Metadata } from "next";
import { Noto_Serif_SC, Noto_Sans_SC, ZCOOL_KuaiLe } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif_SC({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const notoSans = Noto_Sans_SC({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-sans",
});

const zcoolKuaiLe = ZCOOL_KuaiLe({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-casual",
});

export const metadata: Metadata = {
  title: "CoverKit — 公众号封面图 10 秒搞定",
  description: "输入标题、选风格、下载封面图。每天日更的封面，不该花超过 30 秒。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${notoSerif.variable} ${notoSans.variable} ${zcoolKuaiLe.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
