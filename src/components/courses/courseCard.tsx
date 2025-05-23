import { Timer } from 'lucide-react';

export default function CourseCard() { 
    return (
        <article className="flex flex-col h-auto w-full hover:scale-105 transition-all gap-2.5 bg-french-gray rounded-3xl p-2.5 md:w-[30%]  lg:w-[28%]">
            {/* IMAGEN DEL CURSO */}
            <div className="h-1/2 w-auto rounded-3xl overflow-hidden">
                <img src="/images/course/diseño.webp" className="w-full h-full bg-cover" alt="Course Image" />
            </div>

            {/* CONTENIDO DEL CURSO */}
            <div className='h-1/2 flex flex-col justify-between p-2.5 gap-2'>
                {/* PROFESOR DEL CURSO */}
                <div className="flex items-center justify-between">
                    <div className="h-6 w-6 rounded-full overflow-hidden lg:h-10 lg:w-10">
                        <img src="/images/teacher/juanprofe.webp" className="w-full h-full bg-cover" alt="Teacher Image" />
                    </div>
                    
                    <p className="font-bold text-xs text-center text-davys-gray lg:text-sm">Richard Eduardo</p>

                    <div className="bg-lapiz-lazuli rounded-md font-semibold px-2.5 py-1.5 flex items-center justify-center text-center w-1/3 text-[clamp(0.5rem,1.2vw,0.85rem)]">
                      <p className="truncate w-full">Tecnología</p>
                    </div>
                </div>

                {/* NOMBRE DEL CURSO */}
                <div className="text-eerie-black font-medium text-sm lg:text">
                    <p>Introducción Completa al Diseño Web Moderno y Responsivo</p>
                </div>

                {/* DURACION DEL CURSO */}
                <div className="flex items-center font-medium text-xs text-davys-gray lg:text-sm">
                    <Timer className="w-4 h-4 text-lapiz-lazuli mr-1 lg:w-5 lg:h-5" />
                    <p>08 hr 15 min</p>
                </div>
            </div>
        </article>
    );
}