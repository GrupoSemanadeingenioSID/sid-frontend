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
        <header className="border border-black flex">
            {/* Logos */}    
            <div className="mx-auto px-5 flex items-center">
                <Image src="/images/logotype/Escudo_UD.svg.png" alt="EscudoUD" width={65} height={65}/>
                <span className='text-black text-5xl font-extralight'>|</span>
                <Image src="/images/logotype/logosid.webp" alt="LogoSid" width={65} height={65}/>
            </div>
            {/**Menu PC */}
            <div className="hidden md:flex space-x-4">
                <button className="border px-3 py-1 rounded hover:bg-gray-200">Opción 1</button>
                <button className="border px-3 py-1 rounded hover:bg-gray-200">Opción 2</button>
                <button className="border px-3 py-1 rounded hover:bg-gray-200">Opción 3</button>
            </div>
            <div className="flex justify-between items-center px-10 w-50 max-w-xs mx-auto">
                {/** Boton de notificacion */} 
                <div className="flex border rounded-full p-2">
                    <button onClick={()=>{setIsNotiOpen(!isNotiOpen)}}>
                        <Image src="/images/icons/bell.svg" alt='menu' height={20} width={20}/>
                    </button>
                </div>
                {/**Boton desplegable de movil*/}
                <div className="relative md:hidden">
                    <button onClick={()=>{setIsMenuOpen(!isMenuOpen)}}>
                        <Image src="/images/icons/menu.svg" alt='menu' height={30} width={30}/>
                    </button>
                </div>
            </div>

            {/** Desplegable Noti Celular */}
            <div className={`fixed left-0 top-0 h-full w-full bg-[url('/images/background-menu.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center md:hidden ${isNotiOpen ? 'translate-x-0 pointer-events-auto' : '-translate-x-full pointer-events-none'} transform transition-transform duration-250 ease-in-out`}>
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
                <div className={`fixed right-0 top-0 h-full w-full bg-[url('/images/background-menu.png')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center md:hidden ${isMenuOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'} transform transition-transform duration-250 ease-in-out`}>
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