import {
  Facebook,
  Instagram,
  MessageCircleMore,
  Mail,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] flex flex-col justify-center items-center w-full h-76 pt-2.5 pr-10 pb-2.5 pl-10">
      <section
        className="w-75 h-58.5 gap-2.5 pr-2.5 pl-2.5 flex flex-col justify-center items-center 
      lg:flex-row lg:justify-between lg:w-full lg:max-w-310 lg:pr-2.5 lg:pl-2.5"
      >
        <Image
          src="/images/logotype/bluelogo.webp" // Ruta dentro de public
          alt="Logo"
          width={150} // Ancho en píxeles (requerido)
          height={80} // Alto en píxeles (requerido)
        />
        <article
          className="p-2.5 flex justify-between w-70 h-36 
        lg:w-102.5 lg:h-32"
        >
          <div className="w-30 h-31 gap-1.5">
            <div className="w-full h-10 p-2.5 gap-2.5">
              <h3 className="font-bold text-sm text-[#135e8c]">Información</h3>
            </div>
            <button className="pt-0.5 pr-2.5 pb-0.5 pl-2.5 gap-2.5 text-sm">
              Quienes somos
            </button>
            <button className="pt-0.5 pr-2.5 pb-0.5 pl-2.5 gap-2.5 text-sm">
              {" "}
              Proyectos
            </button>
            <button className="pt-0.5 pr-2.5 pb-0.5 pl-2.5 gap-2.5 text-sm">
              {" "}
              Aliados
            </button>
          </div>
          <div className="w-35 h-31 gap-1.5">
            <div className="p-2.5">
              <h3 className="font-bold text-sm text-[#135e8c]">
                Links de ayuda
              </h3>
            </div>
            <button className="pt-0.5 pr-2.5 pb-0.5 pl-2.5 gap-2.5 text-sm">
              Contacto
            </button>
            <button className="pt-0.5 pr-2.5 pb-0.5 pl-2.5 gap-2.5 text-sm">
              Grupo de trabajo
            </button>
            <button className="pt-0.5 pr-2.5 pb-0.5 pl-2.5 gap-2.5 text-sm">
              Administradores
            </button>
          </div>
        </article>
        <article className="hidden  lg:flex lg:flex-col w-55.5 h-29 p-2.5 gap-2.5">
          <div className="w-29.5 h-10.5 p-2.5 gap-2.5">
            <h3 className="text-[#135e8c]">Contáctanos:</h3>
          </div>
          <div className="w-50.5 h-11 rounded-full border p-2.5 gap-2.5 border-[#135e8c]">
            <a
              className="flex text-[#135e8c] w-full h-full"
              href="mailto:sidud@udistrital.edu.co"
            >
              <Mail className="mr-2" />
              Ingresa tu correo
            </a>
          </div>
        </article>
      </section>

      <section
        className="flex justify-center w-75 h-12.5 p-2.5 gap-2.5 border-t border-white border-opacity-100
      lg:w-full lg:max-w-310 lg:h-22 lg:pt-5 lg:pr-2.5 lg:pb-2.5 lg:-2.5 lg:gap-7.5"
      >
        <article className="flex space-x-2">
          <a href="https://x.com/home">
            <Twitter />
          </a>
          <a href="https://web.facebook.com/sidud?locale=es_LA" target="_blank">
            <Facebook />
          </a>
          <a href="https://www.whatsapp.com/?lang=es_LA">
            <MessageCircleMore />
          </a>
          <a href="https://www.instagram.com/sid.ud/" target="_blank">
            <Instagram />
          </a>
        </article>
      </section>
    </footer>
  );
}
