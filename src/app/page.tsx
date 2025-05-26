import { lilita } from "./layout";
import Link from "next/link";
import CourseCard from "@/components/courses/courseCard";
import TeamCard from "@/components/team/teamCard.tsx";

export default function Home() {

  let courses = [1, 2, 3]
  const team = [
    {
      nombre: "Angélica",
      rol: "Desarrolladora",
      foto: "/images/team/angelica.webp",
      alt: "Foto de Angélica"
    },
    {
      nombre: "Diego",
      rol: "Desarrollador",
      foto: "/images/team/diego.webp",
      alt: "Foto de Diego"
    },
        {
      nombre: "Javier",
      rol: "Desarrolladora",
      foto: "/images/team/javier.webp",
      alt: "Foto de Javier"
    },
    {
      nombre: "Juan Carlos",
      rol: "Desarrollador",
      foto: "/images/team/juancarlos.webp",
      alt: "Foto de Juan Carlos"
    },
        {
      nombre: "Sara",
      rol: "Desarrolladora",
      foto: "/images/team/sara.webp",
      alt: "Foto de Sara"
    },
  ];

  return (
    <div>
      <header></header> {/* ESPACIO PARA EL COMPONENTE HEADER */}

      <main className="bg-[url(/images/background.png)] bg-cover bg-no-repeat">
        {/* SECCION PARA EL BANNER */}
        <section>

        </section>

        {/* SECCION PARA EL CONTENIDO */}
        <section className="flex flex-col py-5 px-10 gap-5 lg:px-40">
          {/* ARTICULO PARA LAS ACTIVIDADES */}
          <article>

          </article>

          {/* ARTICULO PARA LOS CURSOS */}
          <article className="flex flex-col gap-5 md:flex-row md:flex-wrap md:justify-between">
            <h2 className="w-full text-center text-2xl font-bold lg:text-3xl">Cursos disponibles</h2>

            {courses.map((course, index) => (
              <CourseCard key={index} />
            ))}

            <Link href="/course"  className="w-full flex items-center justify-end font-bold text-sm lg:text-xl">
              <p className="px-2.5 py-1.5 border-french-gray border-2 rounded-full hover:scale-105 transition-all">Ver más</p>
            </Link>
          </article>

          {/* ARTICULO PARA LOS PROYECTOS */}
          <article>

          </article>

          {/* ARTICULO PARA LOS EQUIPOS*/}
          <article className="flex flex-col py-[20px] gap-[10px] md:flex-row md:flex-wrap md:justify-between w-full! overflow-hidden">
            <h2 className="w-full text-center text-2xl font-bold lg:text-3xl">Nuestro equipo</h2>

            <div className="flex gap-4 w-[300px] h-[252px] justify-between justify-center">
              {team.map((miembro, index) => (
              <TeamCard key={index} {...miembro}/>
              
            ))}

            </div>


          </article>
        </section>

      </main>

      <footer></footer> {/* ESPACIO PARA EL COMPONENTE FOOTER */}
    </div>
  );
}
