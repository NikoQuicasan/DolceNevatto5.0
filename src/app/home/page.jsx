"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">

      {/* Título */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold text-gray-900 mb-6 tracking-tight"
      >
        Dolce Nevatto
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-xl max-w-xl text-gray-600 mb-8"
      >
        Repostería premium, elaborada con amor y los mejores ingredientes.
        Un lugar donde cada postre cuenta una historia dulce.
      </motion.p>

      {/* Botón */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Button className="px-6 py-6 text-lg">
          Ver productos
        </Button>
      </motion.div>

      {/* Imagen central (placeholder, puedes cambiarla) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-14"
      >
        <img
          src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=1200"
          alt="Postre Dolce Nevatto"
          className="rounded-3xl shadow-xl w-[500px] max-w-full object-cover"
        />
      </motion.div>
    </section>
  );
}
