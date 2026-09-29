import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "TOD EUROPE | 58€ / YEAR + VPN Included for Arabs in Europe",
  description: "Watch beIN SPORTS official 4K without buffering. 80% cheaper than local providers in Europe. VPN included.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar">
      <body className="bg-[#080A0F] text-white antialiased">{children}</body>
    </html>
  );
}