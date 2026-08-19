import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UNIQ TRADE INC. | Industrial Spare Parts & Equipment Supply",
  description: "UNIQ TRADE INCORPORATED — U.S.-based industrial spare parts sourcing and supply for oil & gas, chemical, mining, metallurgical and industrial applications.",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return <html lang="en"><body>{children}</body></html>;
}
