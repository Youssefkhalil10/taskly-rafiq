import type { Metadata } from "next";
import {Inter} from "next/font/google"
import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-local",
});

export const metadata: Metadata = {
  title: "Tasklt",
  description: "Task managment Application",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`flex min-h-full flex-col`}>{children}</body>
    </html>
  );
}
