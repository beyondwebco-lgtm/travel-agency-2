import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Voyara | Every Journey, Beautifully Planned",
  description: "Discover Incredible India with Voyara. Curated premium domestic tours from Jubilee Hills, Hyderabad across India's most breathtaking destinations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#FAFAF8] text-[#1E293B] font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
