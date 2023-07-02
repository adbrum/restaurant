import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Restaurente Adega 25 de Abril',
  description: 'A melhor cozinha tradicional alentejana em Beja',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="font-serif p-0 m-0 text-base text-lg">{children}</body>
    </html>
  );
}
