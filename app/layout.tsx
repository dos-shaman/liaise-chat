import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import { bricolage } from "@/app/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Li.AI.se",
  description: "Real-time AI Teaching Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased`}>
        <ClerkProvider appearance={{ variables: { colorPrimary: '#fe5933' }} }>
          <Navbar />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
