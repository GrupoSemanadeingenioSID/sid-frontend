import { lilita } from "./layout";
import Link from "next/link";
import CourseCard from "@/components/courses/courseCard";

export default function Home() {

  let courses = [1, 2, 3]

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
          <article>

          </article>
        </section>

      </main>

      <footer></footer> {/* ESPACIO PARA EL COMPONENTE FOOTER */}
    </div>
  );
}
