import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Dolce Nevatto",
  description: "Repostería Premium",
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">
        <header className="w-full bg-white shadow-sm px-10 py-4 flex items-center gap-10">
          <Link href="/home" className="font-semibold">Home</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/productos">Productos</Link>
          <Link href="/galeria">Galería</Link>
          <Link href="/contacto">Contacto</Link>
        </header>

        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
