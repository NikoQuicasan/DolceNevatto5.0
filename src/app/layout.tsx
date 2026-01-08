// app/layout.tsx

import "./globals.css";
import Link from "next/link";
import { ReactNode } from "react";
import Image from "next/image";
import localFont from 'next/font/local'; // Importar el loader de fuentes locales
import { Button } from "@/components/ui/button"; // Asumiendo que Button está aquí

export const metadata = {
  title: "Dolce Nevatto",
  description: "Repostería Premium",
};

// 1. DEFINICIÓN DE LA FUENTE EN EL ALCANCE DEL MÓDULO (module scope)
// La ruta DEBE ser relativa a dónde está el archivo de código (layout.tsx)
const customFont = localFont({
  src: '../../src/assets/fonts/vag-rounded-regular.ttf', // Depende de la profundidad
  variable: '--font-custom',
});


export default function RootLayout({ children }: { children: ReactNode }) {
  // URL de Cloudinary para el logo
  const logoUrl = "https://res.cloudinary.com/dbfnrk4ck/image/upload/v1767867213/LogoMoradoLetras_nndw3r.png";

  return (
    // 2. APLICACIÓN DE LA FUENTE a la etiqueta <html>
    <html lang="es" className={customFont.className}> 
      <body className="text-gray-900 bg-gradient-to-tr from-[#EBFFD0] via-[#EBFFD0] to-[#F3D9FF]">
        
        <header className="w-full px-12 pt-8 pb-2 flex items-center justify-between">
            
            {/* 1. Logo (Izquierda) */}
            <Link href="/">
                <Image
                    src={logoUrl}
                    alt="Dolce Nevatto Logo"
                    width={150} 
                    height={40}
                    priority
                />
            </Link>

            {/* 2. Navegación (Centro) */}
            <nav className="hidden md:flex items-center gap-10 text-gray-800 text-lg">
                <Link href="/" className="font-semibold text-gray-900">Inicio</Link> 
                <Link href="/productos">Productos</Link>
                <Link href="/nosotros">Nosotros</Link>
                <Link href="/contacto">Contactanos</Link>
            </nav>

            {/* 3. Botón de Acción (Derecha) */}
            <Button 
                className="px-8 py-6 text-base bg-[#423d6a] hover:bg-[#322d56] text-white rounded-3xl transition-colors shadow-lg">
                HABLEMOS!!!
            </Button>
        </header>

        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}