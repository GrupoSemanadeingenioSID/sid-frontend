import { lilita } from "./layout";
import CourseCard from "@/components/courses/courseCard";

export default function Home() {
  return (
    <div>
        <header></header> {/* ESPACIO PARA EL COMPONENTE HEADER */}

        <main className="bg-[url(/images/background.png)] bg-cover bg-no-repeat">
          {/* SECCION PARA EL BANNER */}
          <section>
              
          </section>

          {/* SECCION PARA EL CONTENIDO */}
          <section className="flex flex-col py-5 px-10 gap-5">
            {/* ARTICULO PARA LAS ACTIVIDADES */}
            <article>
  
            </article>

            {/* ARTICULO PARA LOS CURSOS */}
            <article className="flex flex-col gap-5">
              <CourseCard />
              <CourseCard />
              <CourseCard />
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
