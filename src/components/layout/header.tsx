import { useState } from "react";
import { X } from "lucide-react";
import { Menu } from "lucide-react"

export default function  Header(){

    const [sideBar, setSideBar] = useState(false);

    return (
        <header className=" bg-background text-secondary p-4">
            <nav className="fixed top-0 left-0 w-full z-50 bg-background shadow-md">
                <div className="container mx-auto flex lg:justify-around justify-between px-8 lg:px-0 items-center py-5 border-chart-4 border-b">
                    <a href="#hero">
                        <img
                            src="/MilanLOGO_light.png"
                            className="block dark:hidden"
                            alt="Milan Raut"
                            height={30}
                            width={30}
                        />
                        <img
                            src="/MilanLOGO_dark_1.png"
                            className="hidden dark:block"
                            alt="Milan Raut"
                            height={30}
                            width={30}
                        />
                    </a>
                    <ul className="hidden md:flex lg:space-x-8">
                        <li><a href="#hero" className="pb-6 hover:border-green-500 hover:border-b-2 hover:text-green-500 focus:text-green-500 focus:border-green-500 focus:border-b-2">Home</a></li>
                        <li><a href="#about" className="pb-6 hover:border-green-500 hover:border-b-2 hover:text-green-500 focus:text-green-500 focus:border-green-500 focus:border-b-2">About</a></li>
                        <li><a href="#Portfolio" className="pb-6 hover:border-green-500 hover:border-b-2 hover:text-green-500 focus:text-green-500 focus:border-green-500 focus:border-b-2">Portfolio</a></li>
                        <li><a href="#projects" className="pb-6 hover:border-green-500 hover:border-b-2 hover:text-green-500 focus:text-green-500 focus:border-green-500 focus:border-b-2">Projects</a></li>
                        <li><a href="#contact" className="pb-6 hover:border-green-500 hover:border-b-2 hover:text-green-500 focus:text-green-500 focus:border-green-500 focus:border-b-2">Contact</a></li>
                    </ul>

                    <button onClick={() => setSideBar(true)} className="block md:hidden text-gray-300 hover:text-white transition">
                        <span className="text-2xl"><Menu size={24} color="#66BB6A" strokeWidth={2} /></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar Overlay */}
            {sideBar && (
                <div
                    className="fixed inset-0 z-40 bg-black/40 md:hidden"
                    onClick={() => setSideBar(false)}
                />
            )}

            <div className={`fixed inset-y-0 right-0 h-full w-60 bg-gray-700 p-6 transition-transform duration-300 md:hidden z-50 flex flex-col gap-4
                    ${sideBar ? "translate-x-0" : "translate-x-full"}
            `}
                >                   
                <div className="border-b-2 border-gray-800 mr-8 flex justify-end">
                    <button onClick={() => setSideBar(false)} className="text-gray-300 hover:text-white text-2xl mb-4"><X size={24} color="red" strokeWidth={2} /></button>
                </div>
                <div className="flex flex-col space-y-4 items-end mr-8">
                    <a href="#hero" onClick={()=> setSideBar(false)} className="closer hover:border-green-500 hover:border-b-2 hover:text-green-500 focus:text-green-500 focus:border-green-500 focus:border-b-2 text-lg">Home</a>
                    <a href="#about" onClick={()=> setSideBar(false)} className="closer hover:border-green-500 hover:border-b-2 hover:text-green-500 focus:text-green-500 focus:border-green-500 focus:border-b-2 text-lg">About</a>
                    <a href="#Portfolio" onClick={()=> setSideBar(false)} className="closer hover:border-green-500 hover:border-b-2 hover:text-green-500 focus:text-green-500 focus:border-green-500 focus:border-b-2 text-lg">Portfolio</a>
                    <a href="#projects" onClick={()=> setSideBar(false)} className="closer hover:border-green-500 hover:border-b-2 hover:text-green-500 focus:text-green-500 focus:border-green-500 focus:border-b-2 text-lg">Projects</a>
                    <a href="#contact" onClick={()=> setSideBar(false)} className="closer hover:border-green-500 hover:border-b-2 hover:text-green-500 focus:text-green-500 focus:border-green-500 focus:border-b-2 text-lg">Contact</a>
                </div>
            </div>
        </header>
    )
}