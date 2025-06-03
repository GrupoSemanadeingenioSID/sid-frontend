import Image from 'next/image';

export default function ProjectCard() {
  return (
    <article className="flex flex-col h-auto w-auto hover:scale-102 transition-all gap-5 bg-french-gray/60 rounded-3xl shadow-lg backdrop-blur-md overflow-hidden">
      
      {/* Imagen del proyecto */}
      <div className="aspect-video w-full rounded-3xl overflow-hidden">
        <Image
          src="/images/proyect/desarrollo.webp"
          alt="Proyecto Fundaciones"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Título con glassmorphism */}
      <div className="absolute bottom-4 left-0 w-full flex items-center px-4">
        <div className="bg-white/15 backdrop-blur-md rounded-3xl px-4 py-2 flex items-center gap-2 shadow-md w-full">
          <span className="text-white ">Desarrollo Web</span>
        </div>
      </div>
    </article>
  );
}