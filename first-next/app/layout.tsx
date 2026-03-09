import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/Navbar";


export const metadata: Metadata = {
  title: "Contact Maneger",
  description: "Simple Contact Maneder appliction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar/>
          <main>
          {children}
          </main>
        </div>
      </body>

    </html>
  );
}
