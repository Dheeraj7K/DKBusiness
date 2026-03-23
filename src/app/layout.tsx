import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import AutomationPrompt from '@/components/AutomationPrompt';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Business Model Generator - Create Professional Business Models with AI",
  description: "Generate comprehensive business models using AI-powered insights, industry templates, and the proven Business Model Canvas framework.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black`}>
        <Navbar />
        <main className="min-h-screen bg-black pb-20">
          {children}
        </main>
        <AutomationPrompt />
      </body>
    </html>
  );
}
