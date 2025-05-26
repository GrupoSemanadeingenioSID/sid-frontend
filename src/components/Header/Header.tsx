"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isNotiOpen, setIsNotiOpen] = useState(false);

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
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () =>{
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])
    
    return (
        <header className="border border-black flex justify-between items-center px-4 py-2 w-full">
            {/* Logos */}    
            <div className="px-5 flex items-center space-x-1">
                <Image src="/images/logotype/Escudo_UD.svg.png" alt="EscudoUD" width={65} height={65} className="w-20 sm:w-30 md:w-30 lg:w-30 h-auto object-contain"/>
                <span className='text-black text-5xl font-extralight'>|</span>
                <Image src="/images/logotype/logosid.webp" alt="LogoSid" width={65} height={65} className="w-20 sm:w-30 md:w-30 lg:w-30 h-auto object-contain"/>
            </div>
            {/**Menu PC */}
            <nav className="hidden xl:flex space-x-6 py-2 xl:px-20 rounded-4xl border m-3">
                <button className="text-lg lg:text-2xl px-3 font-bold text-gray-500">Inicio</button>
                <button className="text-lg lg:text-2xl px-3 font-bold text-gray-500">Quienes somos</button>
                <button className="text-lg lg:text-2xl px-3 font-bold text-gray-500">Cursos</button>
                <button className="text-lg lg:text-2xl px-3 font-bold text-gray-500">Equipos</button>
                <button className="text-lg lg:text-2xl px-3 font-bold text-gray-500">Aliados</button>
            </nav>

            <div className="flex justify-between items-center px-10 w-50">
                {/** Boton de notificacion */} 
                <div className="flex border rounded-full p-2 m-1">
                    <button onClick={()=>{setIsNotiOpen(!isNotiOpen)}}>
                        <Image src="/images/icons/bell.svg" alt='menu' height={20} width={20}/>
                    </button>
                </div>
                {/**Boton desplegable de movil*/}
                <div className="relative xl:hidden m-1">
                    <button onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
                        <Image src="/images/icons/menu.svg" alt='menu' height={30} width={30}/>
                    </button>
                </div>
            </div>
            {/** Desplegable Noti Celular */}
            <div className={`fixed left-0 top-0 h-full w-full bg-[url('/images/background-menu.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center xl:hidden ${isNotiOpen ? 'translate-x-0 pointer-events-auto' : '-translate-x-full pointer-events-none'} transform transition-transform duration-250 ease-in-out`}>
                <div ref={notiRef} className="w-full h-full p-5 flex flex-col gap-4 items-center">
                    {/** Boton de cerrado */}
                        <button className="self-end text-2xl font-bold mb-4 text-white" onClick={()=>setIsNotiOpen(false)}>
                            X
                        </button>
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