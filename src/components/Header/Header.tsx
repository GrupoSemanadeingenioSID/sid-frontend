"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNotiOpen, setIsNotiOpen] = useState(false);
    const [isDesktopNotiOpen, setIsDesktopNotiOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);
    const notiRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        function handleClickOutside(event: MouseEvent){
            if(menuRef.current && !menuRef.current.contains(event.target as Node)){
                setIsMenuOpen(false);
            }
            if(notiRef.current && !notiRef.current.contains(event.target as Node)){
                setIsNotiOpen(false);
            }
            if(notiRef.current && !notiRef.current.contains(event.target as Node)){
                setIsDesktopNotiOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () =>{
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])
    
    return (
        <header className="fixed top-0 left-0 flex justify-between items-center px-4 py-2 w-full">
            {/* Logos */}    
            <div className="mx-auto px-5 flex items-center space-x-1">
                <Image src="/images/logotype/Escudo_UD.svg.png" alt="EscudoUD" width={65} height={65} className="w-20 sm:w-30 md:w-30 lg:w-30 h-auto object-contain"/>
                <span className='text-black text-5xl font-extralight'>|</span>
                <Image src="/images/logotype/logosid.webp" alt="LogoSid" width={65} height={65} className="w-20 sm:w-30 md:w-30 lg:w-30 h-auto object-contain"/>
            </div>
            {/**Menu PC */}
            <nav className="hidden xl:flex space-x-6 py-4 2xl:px-20 sm:px-8 rounded-4xl m-4 bg-white/30 backdrop-blur-md shadow-2xl">
                <button className="text-lg lg:text-2xl px-3 font-bold text-gray-900 cursor-pointer">Inicio</button>
                <button className="text-lg lg:text-2xl px-3 font-bold text-gray-900 cursor-pointer">Quienes somos</button>
                <button className="text-lg lg:text-2xl px-3 font-bold text-gray-900 cursor-pointer">Cursos</button>
                <button className="text-lg lg:text-2xl px-3 font-bold text-gray-900 cursor-pointer">Equipos</button>
                <button className="text-lg lg:text-2xl px-3 font-bold text-gray-900 cursor-pointer">Aliados</button>
            </nav>
            
            {/** Boton Notis de Escritorio */}
            <div className="relative hidden xl:block ml-10 ">
                <div className="w-15 h-15 flex items-center justify-center rounded-full cursor-pointer mx-auto bg-white/30 backdrop-blur-md shadow-2xl" onClick={() => setIsDesktopNotiOpen(!isDesktopNotiOpen)}>
                    <Image src="/images/icons/bell.svg" alt="notificación" width={40} height={40}/>
                </div>
            
            {/** Menu desplegable de PC 
             * 1. Toca revisar el diseño
             * Pasarle una lista aun componente que renderise las notificaciones
            */}
            
            {isDesktopNotiOpen && (
            <div className="absolute right-0 mt-2 w-64 border rounded z-50 bg-white/30 backdrop-blur-md shadow-2xl">
                <div className="p-4 font-bold border-b text-gray-900">Notificaciones</div>
                <ul className="p-2 space-y-2 text-sm">
                    <li className="hover:bg-gray-100 p-2 rounded text-gray-900">Tienes una nueva alerta</li>
                    <li className="hover:bg-gray-100 p-2 rounded text-gray-900">Tu curso ha sido actualizado</li>
                    <li className="hover:bg-gray-100 p-2 rounded text-gray-900">Consulta tus mensajes</li>
                </ul>
            </div>
            )}
            </div>

            <div className="flex justify-between items-center px-10 w-50 mx-auto">
                {/** Boton de notificacion */} 
                <div className="relative xl:hidden flex rounded-full p-2 m-1 w-15 h-15 justify-center bg-white/30 backdrop-blur-md shadow-2xl">
                    <button onClick={()=>{setIsNotiOpen(!isNotiOpen)}} className='cursor-pointer'>
                        <Image src="/images/icons/bell.svg" alt='menu' height={40} width={40}/>
                    </button>
                </div>

                {/**Boton menu desplegable de movil*/}
                <div className="relative xl:hidden m-1">
                    <button onClick={()=>{setIsMenuOpen(!isMenuOpen)}} className='cursor-pointer'>
                        <Image src="/images/icons/menu.svg" alt='menu' height={30} width={30}/>
                    </button>
                </div>
                {/** Boton de Inicio de Sesion */}
                <button className="hidden xl:flex border-4 text-black font-extrabold border-black rounded-4xl p-4 px-5 mx-auto text-2xl whitespace-nowrap cursor-pointer bg-white/20 backdrop-blur-md shadow-2xl">
                    Iniciar Sesion
                </button>
            </div>

            {/** Desplegable Noti Celular */}
            <div className={`fixed left-0 top-0 h-full w-full bg-[url('/images/background-menu.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center xl:hidden ${isNotiOpen ? 'translate-x-0 pointer-events-auto' : '-translate-x-full pointer-events-none'} transform transition-transform duration-250 ease-in-out`}>
                <div ref={notiRef} className="w-full h-full p-5 flex flex-col gap-4 items-center">
                    {/** Boton de cerrado */}
                        <button className="self-end text-2xl font-bold mb-4 text-white" onClick={()=>setIsNotiOpen(false)}>
                            X
                        </button>
                        {/** Para este apartado se puede
                         * 1. Hacer que se le pase una lista a un componente y lo renderice con un .map
                         */}
                        <Image src="/images/logotype/bluelogo.webp" alt="LogoSidBlue" height={150} width={150} className='py-10'/>
                        <h2>Notificacion 1</h2>
                        <h2>Notificacion 2</h2>
                        <h2>Notificacion 3</h2>
                </div>
            </div>

            {/** Desplegable Menu Celular */}
                <div className={`fixed right-0 top-0 h-full w-full bg-[url('/images/background-menu.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center xl:hidden ${isMenuOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'} transform transition-transform duration-250 ease-in-out`}>
                    <div ref={menuRef} className="w-full h-full p-5 flex flex-col gap-4 items-center">
                        {/** Boton de cerrado */}
                        <button className="self-end text-2xl font-bold mb-4 text-white" onClick={()=>setIsMenuOpen(false)}>
                            X
                        </button>
                        {/** Aca cada uno tiene que redirigir a otros lados de la pagina 
                         * Se puede hacer un componente boton unico para cada uno
                        */}
                        <Image src="/images/logotype/bluelogo.webp" alt="LogoSidBlue" height={150} width={150} className='py-10'/>
                        <button onClick={() => setIsMenuOpen(false)} className="text-xl py-2 border border-[#135e8c] px-4 text-center rounded-3xl text-[#135e8c] font-bold">
                            Iniciar Sesión
                        </button>
                        <button onClick={() => setIsMenuOpen(false)} className="text-xl py-2 w-full text-center font-bold text-white">
                            Inicio
                        </button>
                        <button onClick={() => setIsMenuOpen(false)} className="text-xl py-2 w-full text-center font-bold text-white">
                            Quienes somos
                        </button>
                        <button onClick={() => setIsMenuOpen(false)} className="text-xl py-2 w-full text-center font-bold text-white">
                            Cursos
                        </button>
                        <button onClick={() => setIsMenuOpen(false)} className="text-xl py-2 w-full text-center font-bold text-white">
                            Equipos
                        </button>
                        <button onClick={() => setIsMenuOpen(false)} className="text-xl py-2 w-full text-center font-bold text-white">
                            Aliados
                        </button>
                    </div>
                </div>
        </header>
    )
}