import "@/styles/main.scss";
import "@/styles/globals.scss";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VetGroup",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
