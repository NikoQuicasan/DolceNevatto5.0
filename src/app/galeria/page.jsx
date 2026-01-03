export default function GaleriaPage() {
    return (
      <section className="p-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Galería</h1>
  
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-gray-200 h-40 rounded-xl animate-pulse" />
          ))}
        </div>
      </section>
    );
  }
  