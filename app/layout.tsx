import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import ClientLayout from "./clientLayout";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "WorldExplorer: Your Global Country Guide",
  description: "Discover the world with WorldExplorer. Search, filter, and learn about countries across the globe. Get detailed information on population, languages, currencies, and more in an intuitive, user-friendly interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-[#212E37]`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
