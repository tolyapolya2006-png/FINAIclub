import type { Metadata } from "next";
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/manrope/wght.css";

import "./globals.css";

export const metadata: Metadata = {
  title: "FU AI Club",
  description: "Студенческое AI-сообщество Финансового университета.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}

