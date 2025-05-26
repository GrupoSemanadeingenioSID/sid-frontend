import { Lilita_One } from 'next/font/google';
import Link from "next/link";
import CourseCard from "@/components/courses/courseCard";

const lilita = Lilita_One({
  subsets: ["latin"],
  variable: "--font-lilita",
  weight: "400",
});

export default function Home() {

  const courses = [1, 2, 3]

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
            
            <div className="w-full max-w-screen-xl flex flex-wrap justify-between gap-x-2 gap-y-2 max-[380px]:gap-x-1 max-[380px]:gap-y-1 py-4">

              <div className="w-[8.75rem] sm:w-full sm:max-w-[15rem] h-[198px] sm:h-[340px] flex flex-col justify-between items-center gap-2 rounded-lg overflow-hidden shadow-md bg-black/50 py-2 relative transition-transform duration-300 hover:scale-105">
                <img 
                  src="/images/activity/lectura.webp" 
                  alt="Lectura" 
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute bottom-0 left-0 w-full h-[40%] z-0" 
                  style={{
                    background: "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0) 100%)"
                  }}></div>
                  
                <div className="relative z-10 w-full flex flex-col items-center justify-end mt-auto gap-1 px-2 my-4 space-y-2 rounded-lg sm:my-8 sm:space-y-4
                  sm:mt-auto sm:mb-8">
                  <h3 className="text-center text-[#CED5DC] text-lg md:text-2xl font-bold font-['Nunito'] leading-none">
                    Lectura
                  </h3>
                  <p className="text-center text-[#CED5DC] text-sm font-normal font-['Nunito'] leading-none text-[10px] sm:text-sm">
                    Reunión para leer clásico literatura
                  </p>
                </div>
              </div>

              <div className="w-[8.75rem] sm:w-full sm:max-w-[15rem] h-[198px] sm:h-[340px] flex flex-col justify-between items-center gap-2 rounded-lg overflow-hidden shadow-md bg-black/50 py-2 relative transition-transform duration-300 hover:scale-105">
                <img 
                  src="/images/activity/seguridad.webp" 
                  alt="Ciberseguridad" 
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute bottom-0 left-0 w-full h-[40%] z-0" 
                  style={{
                    background: "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0) 100%)"
                  }}></div>
                  
                <div className="relative z-10 w-full flex flex-col items-center justify-end mt-auto gap-1 px-2 my-4 space-y-2 rounded-lg sm:my-8 sm:space-y-4
                  sm:mt-auto sm:mb-8">
                  <h3 className="text-center text-[#CED5DC] text-lg md:text-2xl font-bold font-['Nunito'] leading-none">
                    Ciberseguridad
                  </h3>
                  <p className="text-center text-[#CED5DC] text-sm font-normal font-['Nunito'] leading-none text-[10px] sm:text-sm">
                    Taller corto sobre ciberseguridad en la universidad
                  </p>
                </div>
              </div>

              <div className="w-[8.75rem] sm:w-full sm:max-w-[15rem] h-[198px] sm:h-[340px] flex flex-col justify-between items-center gap-2 rounded-lg overflow-hidden shadow-md bg-black/50 py-2 relative transition-transform duration-300 hover:scale-105">
                <img 
                  src="/images/activity/ilustracion.webp" 
                  alt="Ilustración" 
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />

                <div className="absolute bottom-0 left-0 w-full h-[40%] z-0" 
                  style={{
                    background: "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0) 100%)"
                }}></div>
                  
                <div className="relative z-10 w-full flex flex-col items-center justify-end mt-auto gap-1 px-2 my-4 space-y-2 rounded-lg sm:my-8 sm:space-y-4
                  sm:mt-auto sm:mb-8">
                  <h3 className="text-center text-[#CED5DC] text-lg md:text-2xl font-bold font-['Nunito'] leading-none">
                    Ilustración
                  </h3>
                  <p className="text-center text-[#CED5DC] text-sm font-normal font-['Nunito'] leading-none text-[10px] sm:text-sm">
                    Taller de ilustración realista para el diseño gráfico
                  </p>
                </div>
              </div>

              <div className="w-[8.75rem] sm:w-full sm:max-w-[15rem] h-[198px] sm:h-[340px] flex flex-col justify-between items-center gap-2 rounded-lg overflow-hidden shadow-md bg-black/50 py-2 relative transition-transform duration-300 hover:scale-105">
                <img 
                  src="/images/activity/fotografia.webp" 
                  alt="Fotografía" 
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />

                <div className="absolute bottom-0 left-0 w-full h-[40%] z-0" 
                  style={{
                    background: "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.45) 50%, rgba(0, 0, 0, 0) 100%)"
                  }}></div>

                <div className="relative z-10 w-full flex flex-col items-center justify-end mt-auto gap-1 px-2 my-4 space-y-2 rounded-lg sm:my-8 sm:space-y-4
                  sm:mt-auto sm:mb-8">
                  <h3 className="text-center text-[#CED5DC] text-lg md:text-2xl font-bold font-['Nunito'] leading-none">
                    Fotografía
                  </h3>
                  <p className="text-center text-[#CED5DC] text-sm font-normal font-['Nunito'] leading-none text-[10px] sm:text-sm">
                    Taller de fotografías a paisajes de la ciudad
                  </p>
                </div>
              </div>
              
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
