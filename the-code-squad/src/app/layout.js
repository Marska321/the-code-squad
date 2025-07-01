import "./globals.css";
import Header from "@/components/Header"; // 1. Add this import

export const metadata = {
  title: "The Code Squad",
  description: "Learn to code with rugby-themed challenges",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* 2. Add the Header here */}
        {children}
      </body>
    </html>
  );
}