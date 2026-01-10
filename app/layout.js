import { Inter, Amiri } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Noorayn Academy - Online Quran Learning",
  description: "Global online Quran academy providing quality Islamic education via Zoom.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${amiri.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
