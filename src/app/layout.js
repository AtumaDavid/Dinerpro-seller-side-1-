import React from "react";
import MainLayout from "./components/main_layout/MainLayout";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-screen">
      <body className={inter.className + " h-full"}>
        <main className="h-full">
          <div className="h-full">
            <MainLayout>{children}</MainLayout>
          </div>
        </main>
      </body>
    </html>
  );
}
