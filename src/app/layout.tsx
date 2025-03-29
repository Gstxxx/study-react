import type { Metadata } from "next";
import { ThemeProvider } from "./context/themeContext";
import { ThemeWrapper } from "./components/ThemeWrapper";
import "./globals.css";

export const metadata: Metadata = {
  title: "Estudando nextjs",
  description: "Estudo de nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <ThemeWrapper>{children}</ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
