import { Lilita_One } from 'next/font/google';
import Link from "next/link";
import CourseCard from "@/components/courses/courseCard";
import { link } from 'fs';

const lilita = Lilita_One({
  subsets: ["latin"],
  variable: "--font-lilita",
  weight: "400",
});

export default function Home() {

  const courses = [1, 2, 3]

  const activities = [1,2,3,4]

  return (
    <div>
      <header></header> {/* ESPACIO PARA EL COMPONENTE HEADER */}

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
            <h2 className="w-full text-center text-2xl font-bold lg:text-3xl">Actividades Programadas</h2>
            
            <div className="flex flex-row flex-wrap gap-4 mt-5 justify-around">

              {activities.map((activity, index) => (
                <div key={index} className="w-full min-h-49 flex items-end rounded-lg relative overflow-hidden max-w-[45%] md:max-w-[22%] md:min-h-75 lg:min-h-83 xl:min-w-57 shadow-md bg-black/50 py-2 transition-transform duration-300 hover:scale-105">
                  <a key={index} href="" target="_blank" rel="noopener noreferrer">
                    <img
                    src="/images/activity/ilustracion.webp"
                    alt="Lectura"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    />
                    <div className="absolute bottom-0 z-10 w-full flex flex-col bg-gradient-to-t from-black/90 via-black/45 to-transparent mt-auto p-3 pt-3">
                      <h3 className="text-center text-[#CED5DC] font-bold font-nunito md:text-xl lg:text-2xl">Lectura</h3>
                      <p className="text-center text-[#CED5DC] font-normal font-nunito text-[10px] md:text-[14px]">Reunión para leer clasico literatura</p>
                    </div>
                  </a>
                </div>
              ))}

            </div>
            
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
