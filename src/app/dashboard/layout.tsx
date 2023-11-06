import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import { Header } from "./components/header";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "CoinSynch - Dashboard",
  description:
    "Dashboard for managing, buying and selling coins with your crypto wallet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(cn(roboto.className), "h-screen flex flex-col")}>
        <Header />
        {children}
      </body>
    </html>
  );
}
