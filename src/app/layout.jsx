import { Space_Grotesk, IBM_Plex_Sans, Inter } from "next/font/google";
import "./globals.css";

const logo = Space_Grotesk({
  variable: "--font-logo",
  weight: ["600", "700"],
  subsets: ["latin"],
});

const ibm = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Frontend Projects",
  description: "All of Waled Karim's frontend projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${logo.variable} ${ibm.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
