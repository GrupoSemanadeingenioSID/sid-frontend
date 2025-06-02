import { Lilita_One } from 'next/font/google';
import Link from "next/link";
import CourseCard from "@/components/courses/courseCard";
import Header from '@/components/Header/Header';

const lilita = Lilita_One({
  subsets: ["latin"],
  variable: "--font-lilita",
  weight: "400",
});
export default function Home() {

  const courses = [1, 2, 3]

  return (
    <div>
      <header>
        <Header/>
      </header> {/* ESPACIO PARA EL COMPONENTE HEADER */}

      <main className="">
        {/* SECCION PARA EL BANNER */}
        <section className="bg-[url(/images/banner.webp)] bg-cover bg-center bg-no-repeat h-dvh w-full flex flex-col items-center justify-end lg:h-screen">
          <div className={`${lilita.className} text-4xl text-center w-full h-2/5 flex items-end justify-center banner-gradient py-7 px-[20%] lg:text-5xl lg:py-16`}>
            <p>¡Te damos la bienvenida!</p>
          </div>
        </section>

        {/* SECCION PARA EL CONTENIDO */}
        <section className="flex flex-col py-5 px-10 gap-5 lg:px-40 bg-[url(/images/background.png)] bg-cover bg-no-repeat">
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
