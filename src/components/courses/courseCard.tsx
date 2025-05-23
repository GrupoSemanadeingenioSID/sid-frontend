import { Timer } from 'lucide-react';

export default function CourseCard() { 
    return (
        <article className="flex flex-col h-72 w-full hover:scale-105 transition-all gap-2.5 bg-french-gray rounded-3xl p-2.5">
            {/* IMAGEN DEL CURSO */}
            <div className="h-1/2 w-auto rounded-3xl overflow-hidden">
                <img src="/images/course/diseño.webp" className="w-full h-full bg-cover" alt="Course Image" />
            </div>

            {/* CONTENIDO DEL CURSO */}
            <div className='h-1/2 flex flex-col justify-between p-2.5'>
                {/* PROFESOR DEL CURSO */}
                <div className="flex items-center justify-between">
                    <div className="h-6 w-6 rounded-full overflow-hidden">
                        <img src="/images/teacher/juanprofe.webp" className="w-full h-full bg-cover" alt="Teacher Image" />
                    </div>
                    
                    <p className="font-bold text-xs text-davys-gray">Richard Eduardo</p>

                    <div className="bg-lapiz-lazuli rounded-md font-semibold px-2.5 py-1.5 flex items-center justify-center text-center text-xs">
                        <p>Tecnología</p>
                    </div>
                </div>

                {/* NOMBRE DEL CURSO */}
                <div className="text-eerie-black font-medium text-sm">
                    <p>Introducción Completa al Diseño Web Moderno y Responsivo</p>
                </div>

                {/* DURACION DEL CURSO */}
                <div className="flex items-center font-medium text-xs text-davys-gray">
                    <Timer className="w-4 h-4 text-lapiz-lazuli mr-1" />
                    <p>08 hr 15 min</p>
                </div>
            </div>
        </article>
    );
}