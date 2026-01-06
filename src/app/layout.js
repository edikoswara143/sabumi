import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from 'next/font/google';
import "./globals.css";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  // weight: ['400', '700'], // Specify the weights you need (e.g., normal and bold)
  subsets: ['latin'],    // Specify the character subsets
  display: 'swap',       // Optional: controls font display behavior
  variable: '--font-poppins', // Optional: for use with CSS variables
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sabumi Foundation",
  description: "Sabumi Foundation",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${poppins.className} antialiased scroll-smooth mx-auto max-w-md bg-slate-300`}
      >
        <div className="bg-white min-h-screen">{children}
        </div>
      </body>
    </html>
  );
}
