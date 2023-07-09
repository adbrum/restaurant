import "./globals.css";
import "./styles/styles.css";
import "./styles/themify-icons.css";
import { Inter } from "next/font/google";
import { Footer } from "@/app/components/Footer";
import { Script } from "@/app/components/Scripts";
import { Header } from "@/app/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Restaurente Adega 25 de Abril",
  description: "A melhor cozinha tradicional alentejana em Beja",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <meta
          name="description"
          content="Restaurante em Beja que oferece comida regional alentejana. Conheça a Adega Típica 25 de Abril e saboreie os pratos típicos da região."
        />
        <meta
          name="keywords"
          content="restaurante, Beja, Adega Típica 25 de Abril, comida regional, alentejana"
        />
        <title>Restaurante em Beja | Adega Típica 25 de Abril</title>

        <link rel="icon" href="img/favicon.png" />

        <link rel="stylesheet" href="css/bootstrap.min.css" />

        <link rel="stylesheet" href="css/themify-icons.css" />

        <link rel="stylesheet" href="css/style.css" />
      </head>
      <Script />
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
