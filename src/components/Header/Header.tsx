"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        function handleClickOutside(event: MouseEvent){
            if(menuRef.current && !menuRef.current.contains(event.target as Node)){
                setIsOpen(false)
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
            {/** Boton de notificacion */}
            <div className="flex justify-between items-center px-10 w-50 max-w-xs mx-auto">
                <div className="border rounded-full p-2">
                    <Image src="/images/icons/bell.svg" alt='menu' height={30} width={30}/>
                </div>
                <div className="relative md:hidden">
                    {/**Boton desplegable de movil*/}
                    <button onClick={()=>{setIsOpen(!isOpen)}}>
                        <Image src="/images/icons/menu.svg" alt='menu' height={30} width={30}/>
                    </button>
                </div>
            </div>
            {/**Menu PC */}
            <div className="hidden md:flex space-x-4">
                <button className="border px-3 py-1 rounded hover:bg-gray-200">Opción 1</button>
                <button className="border px-3 py-1 rounded hover:bg-gray-200">Opción 2</button>
                <button className="border px-3 py-1 rounded hover:bg-gray-200">Opción 3</button>
            </div>
            {/**No sirve la animacion */}
            {isOpen && (
                <div className={`fixed right-0 top-0 h-full w-full bg-[url('/images/background-menu.png')] bg-cover bg-center bg-no-repeat z-50 flex flex-col items-center justify-center md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'} transform transition-transform`}>
                    <div ref={menuRef} className="w-full h-full p-5 flex flex-col gap-4 items-center">
                        <button className="self-end text-2xl font-bold mb-4 text-white" onClick={()=>setIsOpen(false)}>
                            X
                        </button>
                        <Image src="/images/logotype/bluelogo.webp" alt="LogoSidBlue" height={150} width={150} className='py-10'/>
                        <button onClick={() => setIsOpen(false)} className="text-xl py-2 border border-[#135e8c] px-4 text-center rounded-3xl text-[#135e8c] font-bold">
                            Iniciar Sesión
                        </button>
                        <button onClick={() => setIsOpen(false)} className="text-xl py-2 w-full text-center font-bold text-white">
                            Inicio
                        </button>
                        <button onClick={() => setIsOpen(false)} className="text-xl py-2 w-full text-center font-bold text-white">
                            Quienes somos
                        </button>
                        <button onClick={() => setIsOpen(false)} className="text-xl py-2 w-full text-center font-bold text-white">
                            Cursos
                        </button>
                        <button onClick={() => setIsOpen(false)} className="text-xl py-2 w-full text-center font-bold text-white">
                            Equipos
                        </button>
                        <button onClick={() => setIsOpen(false)} className="text-xl py-2 w-full text-center font-bold text-white">
                            Aliados
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}