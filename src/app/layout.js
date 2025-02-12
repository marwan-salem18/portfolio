import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "marwan salem's portfolio",
  description: "my portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <header>
          <Navbar />
        </header>
        <main
          className="grid
          justify-around
          items-center
          mt-20
          grid-cols-12
          sm:max-w-screen
          w-full
          sm:gap-y-70
          gap-y-15
          "
        >
          {children}
        </main>
        <footer>

        </footer>
      </body>
    </html>
  );
}
