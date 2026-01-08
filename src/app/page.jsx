"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Variables de animación para reutilizar
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function HomePage() {
  // URL de Cloudinary para el producto
  const productUrl = "https://res.cloudinary.com/dbfnrk4ck/image/upload/v1767867142/helado-hero_oixdfq.png";

  return (
    // 1. Contenedor principal: Cambiamos a 'relative' para que la imagen flote dentro de esta sección
    <section className="min-h-screen flex items-top justify-center p-8 md:p-12 lg:p-14 relative">
      
      {/* 2. La TARJETA VERDE (Contenido de texto). Quitamos 'overflow-hidden'. */}
      <div className="relative w-full max-w-[80%] h-[500px] rounded-[3rem] shadow-xl"> 
        
        {/* Fondo degradado suave del CARD INTERIOR */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#BFF7DE] via-[#BFF7DE] to-[#DFDEBF] opacity-100 rounded-[3rem]"></div>
        
        <motion.div
          className="relative grid grid-cols-1 md:grid-cols-2 h-full items-center px-8 md:px-16 z-10" // Añadimos z-10
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Columna Izquierda: Contenido de Texto */}
          <div className="text-left py-10 md:py-0">
            {/* Título y Texto */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-[40px] font-bold text-gray-900 leading-tight mb-4 tracking-tighter max-w-lg"
            >
              Dolce Nevatto Una<br />
              Manera Diferente de<br />
              de Comer Helado
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-[16px] max-w-sm text-gray-700 mb-8"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
              Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </motion.p>

            {/* Botón */}
            <motion.div variants={itemVariants}>
              <Button
                className="px-8 py-6 text-base bg-[#423d6a] hover:bg-[#322d56] text-white rounded-3xl transition-colors shadow-lg"
              >
                Ver Productos
              </Button>
            </motion.div>
          </div>
          
          {/* Columna Derecha: Placeholder de la Grid. La imagen real NO está aquí. */}
          <div className="hidden md:block h-full">
            {/* Solo un espacio vacío para mantener el espaciado de la grid */}
          </div>
          
        </motion.div>
      </div>

      {/* 3. IMAGEN DEL PRODUCTO: Ahora es un elemento hermano de la tarjeta verde,
          lo que le permite flotar por encima de ella. */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.68, -0.55, 0.265, 1.55] }}

        // Posicionamiento absoluto respecto al <section> padre
        className="hidden md:block absolute" 
        style={{ 
            // Posicionamiento calculado para que caiga sobre el lado derecho de la tarjeta
            top: '-3%',
            right: '15%', // Ajusta este valor si quieres mover la imagen horizontalmente
            transform: 'translateY(-50%)',
            width: '595px', 
            height: '640px',
            zIndex: 20, // Asegura que esté por encima de la tarjeta (z-10)
        }}
      >
        <Image
          src={productUrl}
          alt="Dolce Nevatto Yogurt Frambuesa"
          layout="fill"
          objectFit="contain"
          priority
        />
      </motion.div>
    </section>
  );
}