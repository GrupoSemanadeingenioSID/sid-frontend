import { Lilita_One } from "next/font/google";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import CourseCard from "@/components/courses/courseCard";
import TeamCard from "@/components/team/teamCard";
import Footer from "@/components/footer";

const lilita = Lilita_One({
  subsets: ["latin"],
  variable: "--font-lilita",
  weight: "400",
});

export default function Home() {

  const courses = [1, 2, 3];

  const activities = [1,2,3,4]
  const equipo = [
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
      rol: "Desarrollador",
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
      <main className="">
        {/* SECCION PARA EL BANNER */}
        <section className="bg-[url(/images/banner.webp)] bg-cover bg-center bg-no-repeat h-dvh w-full flex flex-col items-center justify-end lg:h-screen">
          <div
            className={`${lilita.className} text-4xl text-center w-full h-2/5 flex items-end justify-center banner-gradient py-7 px-[20%] lg:text-5xl lg:py-16`}
          >
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
                <Link key={index} href={""}
                  className="w-full flex items-end rounded-lg relative overflow-hidden max-w-[45%] md:max-w-[23%] aspect-[3/4] shadow-md bg-black/50 py-2 transition-transform duration-300 hover:scale-105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                  src="/images/activity/ilustracion.webp"
                  alt="Lectura"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  />
                  <div className="absolute bottom-0 z-10 w-full flex flex-col bg-gradient-to-t from-black/90 via-black/45 to-transparent mt-auto p-3 pt-3">
                  <h3 className="text-center text-[#CED5DC] font-bold font-nunito md:text-xl lg:text-2xl">Lectura</h3>
                  <p className="text-center text-[#CED5DC] font-normal font-nunito text-[10px] md:text-[14px]">Reunion para leer clasico literatura</p>
                  </div>
                </Link>
              ))}
            </div>
            
          </article>

          {/* ARTICULO PARA LOS CURSOS */}
          <article className="flex flex-col gap-5 md:flex-row md:flex-wrap md:justify-between">
            <h2 className="w-full text-center text-2xl font-bold lg:text-3xl">
              Cursos disponibles
            </h2>

            {courses.map((course, index) => (
              <CourseCard key={index} />
            ))}

            <Link
              href="/course"
              className="w-full flex items-center justify-end font-bold text-sm lg:text-xl"
            >
              <p className="px-2.5 py-1.5 border-french-gray border-2 rounded-full hover:scale-105 transition-all">
                Ver más
              </p>
            </Link>
          </article>

          {/* ARTICULO PARA LOS PROYECTOS */}
          <article></article>

          {/* ARTICULO PARA LOS EQUIPOS*/}
          
          <article className="flex flex-col py-1.25 md:py-2.5 gap-2.5 justify-around items-center overflow-hidden">

            <h2 className="w-full text-center text-2xl font-bold lg:text-3xl">
              Nuestro equipo
            </h2>
            
            <Marquee pauseOnHover={true} className="min-h-61 sm:min-h-67 md:min-h-74 lg:min-h-80 xl:min-h-91" style={{minHeight: "275px", }}>
              {equipo.map((miembro, index) => (
                <TeamCard nombre={miembro.nombre} rol={miembro.rol} foto={miembro.foto} key={index}></TeamCard>
              ))}
            </Marquee>

          </article>
        </section>
      </main>
      <footer>
        <Footer />{" "}
      </footer>{" "}
      {/* ESPACIO PARA EL COMPONENTE FOOTER */}
    </div>
  );
}
