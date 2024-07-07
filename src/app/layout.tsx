import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import Loading from "./Loading";
import Provider from "./Provider";
import { Toaster } from "@/components/ui/toaster"


const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
export const metadata: Metadata = {
  title: "Meri Ride",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./icon.svg" type="image/svg+xml" />
      </head>
      <body className={`w-screen ${poppins.variable}`}>
        <Provider>
          <Loading>
            <Header />
            <main className="w-screen min-h-screen bg-background">
              {children}
          <Toaster />

            </main>
            <Footer />
          </Loading>
        </Provider>
      </body>
    </html>
  );
}
