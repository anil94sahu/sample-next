'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/navbar";
import ReduxProvider from "@/src/redux/redux-provider";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body className={inter.className}>
      <ReduxProvider>
        <Navbar />
        {children}
      </ReduxProvider>
      </body>
    </html>
  );
}
