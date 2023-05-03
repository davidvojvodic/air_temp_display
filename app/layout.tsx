import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/theme/Theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Air Temperature Recorder",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={inter.className}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
