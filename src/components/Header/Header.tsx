"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Bell, Menu } from 'lucide-react';
export default function Header() {
    /**
     * MEJORAS A ESTE COMPONENTE:
     * 1. Atomizarlo mas
     * 2. Añadir funcionalidad al boton de iniciar sesion
     * 3. Añadir funcionalidad con componentes a las notificaciones
     * 4. Los colores de los logos y otras cosas del header no contrastan bien con el fondo
     */
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
        <header className="fixed top-0 left-1/2 -translate-x-1/2 flex justify-between items-center xl:py-[10px] px-[40px] xl:w-[1210px] w-full">
            {/* Logos */}    
            <div className="gap-[10px] flex items-center space-x-1 xl:w-[159px] xl:h-[48px] w-[121.19px]">
                <Image src="/images/logotype/Escudo_UD.svg.png" alt="EscudoUD" width={50} height={48} className="xl:w-[50px] w-[36.16px] h-auto object-contain"/>
                <span className='text-black text-5xl font-extralight'>|</span>
                <Image src="/images/logotype/logosid.webp" alt="LogoSid" width={89} height={48} className="xl:w-[89px] w-[65px] h-auto object-contain"/>
            </div>

            {/**Menu PC */}
            <nav className="hidden xl:flex w-[600px] h-[42px] items-center justify-center gap-[10px] p-[10px] rounded-[100px] bg-white/5 backdrop-blur-md shadow-sm shadow-black">
                <Link href="/" className="text-[16px] px-[10px] gap-[10px] font-bold text-[#1A222A] hover:text-gray-500">Inicio</Link>
                <Link href="/about" className="text-[16px] px-[10px] gap-[10px] font-bold text-[#1A222A] hover:text-gray-500">Quienes somos</Link>
                <Link href="/course" className="text-[16px] px-[10px] gap-[10px] font-bold text-[#1A222A] hover:text-gray-500">Cursos</Link>
                <Link href="/team" className="text-[16px] px-[10px] gap-[10px] font-bold text-[#1A222A] hover:text-gray-500">Equipos</Link>
                <Link href="/ally" className="text-[16px] px-[10px] gap-[10px] font-bold text-[#1A222A] hover:text-gray-500">Aliados</Link>
            </nav>
            
            {/** Boton Notis de Escritorio */}
            <div className="hidden xl:flex">
                <div className="w-[45px] h-[45px] flex items-center justify-center rounded-full cursor-pointer bg-white/5 backdrop-blur-md shadow-sm shadow-black" onClick={() => setIsDesktopNotiOpen(!isDesktopNotiOpen)}>
                    <Bell color='#000000'/>
                </div>
            
            {/** Menu desplegable de PC 
             * 1. Toca revisar el diseño
             * Pasarle una lista aun componente que renderise las notificaciones
            */}
            
            {isDesktopNotiOpen && (
            <div className="absolute right-0 mt-2 w-64 rounded z-50 bg-white/5 backdrop-blur-md shadow-sm shadow-black">
                <div className="p-4 font-bold border-b text-gray-900">Notificaciones</div>
                <ul className="p-2 space-y-2 text-sm">
                    <li className="hover:bg-gray-100 p-2 rounded text-gray-900">Tienes una nueva alerta</li>
                    <li className="hover:bg-gray-100 p-2 rounded text-gray-900">Tu curso ha sido actualizado</li>
                    <li className="hover:bg-gray-100 p-2 rounded text-gray-900">Consulta tus mensajes</li>
                </ul>
            </div>
            )}
            </div>
                <button className="hidden xl:flex border-2 text-[#1A222A] font-extrabold border-[#1A222A] rounded-[100px] p-[10px] text-[16px] whitespace-nowrap cursor-pointer bg-[#0D0D0D4D] backdrop-blur-md shadow-lg shadow-neutral-500 hover:text-gray-300">
                    Iniciar sesión
                </button>

            {/** Parte movil */}
            <div className="flex xl:hidden justify-between items-center px-10 w-50">
                {/** Boton de notificacion movil*/} 
                <div className="relative flex xl:hidden w-[40px] h-[40px] items-center justify-center rounded-full cursor-pointer bg-white/5 backdrop-blur-md shadow-sm shadow-black">
                    <button onClick={()=>{setIsNotiOpen(!isNotiOpen)}} className='cursor-pointer'>
                        <Bell color='#000000'/>
                    </button>
                </div>

                {/**Boton menu desplegable de movil*/}
                <div className="relative flex xl:hidden w-[34.43px] h-[30px]">
                    <button onClick={()=>{setIsMenuOpen(!isMenuOpen)}} className='cursor-pointer'>
                        <Menu color="#000000" />
                    </button>
                </div>
                {/** Boton de Inicio de Sesion */}
                {/** TOCA AÑADIR FUNCIONALIDAD A EL BOTON DE INICIAR SESION */}
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
                        {/** TOCA AÑADIR FUNCIONALIDAD A EL BOTON DE INICIAR SESION */}
                        <button onClick={() => setIsMenuOpen(false)} className="text-xl py-2 border border-[#135e8c] px-4 text-center rounded-3xl text-[#135e8c] font-bold">
                            Iniciar Sesión
                        </button>

                        <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-xl py-2 w-full text-center font-bold text-white">Inicio</Link>
                        <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-xl py-2 w-full text-center font-bold text-white">Quienes Somos</Link>
                        <Link href="/course" onClick={() => setIsMenuOpen(false)} className="text-xl py-2 w-full text-center font-bold text-white">Cursos</Link>
                        <Link href="/team" onClick={() => setIsMenuOpen(false)} className="text-xl py-2 w-full text-center font-bold text-white">Equipos</Link>
                        <Link href="/ally" onClick={() => setIsMenuOpen(false)} className="text-xl py-2 w-full text-center font-bold text-white">Aliados</Link>
                    </div>
                </div>
        </header>
    )
}