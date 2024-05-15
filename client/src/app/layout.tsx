import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import './styles/globals.scss'
import NavBar from '../componets/main/navBar';

const inter = Inter({ subsets: ["latin"] });
//Default metadata
export const metadata: Metadata = {
  title: "Pumped dev",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
