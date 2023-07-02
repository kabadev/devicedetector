import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Love story Between Lans Kaba and F. Bah",
  description:
    "Once upon a time, in a bustling city, there lived a young man named Lans Kaba. Lans was a charming and ambitious individual with a heart full of dreams.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar mb-10 flex justify-between items-center h-[80px] bg-white px-10">
          <h1 className="logo text-3xl font-bold max-md:text-[20px] text-black">
            SimNews
          </h1>
          {/* <nav className="flex justify-center gap-8">
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Gallery</Link>
          <Link href="#">Contact</Link>
        </nav> */}
        </div>
        {children}
      </body>
    </html>
  );
}
