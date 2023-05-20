"use client"

import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button onClick={() => setIsOpen(true)}>
                <AiOutlineMenu className="w-[18px] h-[18px] fill-black" />
            </button>
            <div onClick={() => setIsOpen(false)} className={`fixed z-[999999] w-full h-full pointer-events-none ${isOpen&&"!pointer-events-auto"}`}>
                <div  className={`fixed top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 bg-black/60 ${isOpen&&"!opacity-100"}`}>
                </div>
                <div onClick={e => e.stopPropagation()} className={`z-10 space-y-2 fixed top-0 pt-6 flex flex-col items-end left-0 w-48 h-full bg-[--color-lighter] transition-transform duration-300 -translate-x-full ${isOpen&&"!translate-x-0"}`}>

                </div>
            </div>
        </>
    )
}