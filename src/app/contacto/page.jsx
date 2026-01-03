import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactoPage() {
  return (
    <section className="p-10 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Contacto</h1>

      <div className="flex flex-col gap-4">
        <Input placeholder="Tu nombre" />
        <Input placeholder="Correo" />
        <Textarea placeholder="Mensaje" rows={4} />
        <Button>Enviar Mensaje</Button>
      </div>
    </section>
  );
}
