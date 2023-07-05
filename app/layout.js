import "./globals.css";
import "./style.css";
import { Inter } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Script } from "@/components/Scripts";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurente Adega 25 de Abril",
  description: "A melhor cozinha tradicional alentejana em Beja",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        {/* Required meta tags */}
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Adega Típica 25 de Abril</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        ></link>
        <Script />
      </head>
      <body className="font-serif p-0 m-0 text-base text-lg">
        {children}
        <Header />
      </body>
      <footer>
        {/* footer part start*/}
        <Footer />
        {/* footer part end*/}
      </footer>
    </html>
  );
}
