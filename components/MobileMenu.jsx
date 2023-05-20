"use client"

import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"
import SideNavBarItem from "./SideNavItem"
import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"

const BiHomeAlt2 = dynamic(() => import("react-icons/bi").then(module => module.BiHomeAlt2), {ssr:false})
const MdOutlineExplore = dynamic(() => import("react-icons/md").then(module => module.MdOutlineExplore), {ssr:false})
const MdOutlineColorLens = dynamic(() => import("react-icons/md").then(module => module.MdOutlineExplore), {ssr:false})
const VscBell = dynamic(() => import("react-icons/vsc").then(module => module.VscBell), {ssr:false})
const BiMessageSquareDetail = dynamic(() => import("react-icons/bi").then(module => module.BiMessageSquareDetail), {ssr:false})
const BsBookmark = dynamic(() => import("react-icons/bs").then(module => module.BsBookmark), {ssr:false})
const BsGear = dynamic(() => import("react-icons/bs").then(module => module.BsGear), {ssr:false})
const IoAnalytics = dynamic(() => import("react-icons/io5").then(module => module.IoAnalytics), {ssr:false})

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    return (
        <>
            <button onClick={() => setIsOpen(true)}>
                <AiOutlineMenu className="w-[18px] h-[18px] fill-black" />
            </button>
            <div onClick={() => setIsOpen(false)} className={`fixed z-[999999] w-full h-full pointer-events-none ${isOpen&&"!pointer-events-auto"}`}>
                <div  className={`fixed top-0 left-0 w-full h-full opacity-0 transition-opacity duration-300 bg-black/60 ${isOpen&&"!opacity-100"}`}>
                </div>
                <div onClick={e => e.stopPropagation()} className={`z-10 fixed top-0 pt-4 flex flex-col items-start left-0 w-48 h-full bg-[--color-lighter] transition-transform duration-300 -translate-x-full ${isOpen&&"!translate-x-0"}`}>

                    <SideNavBarItem
                        href="/"
                        pathname={pathname}
                        text='Home'
                        icon={<BiHomeAlt2 className="w-6 h-6 md:w-5 md:h-5 fill-inherit" />}
                    />

                    <SideNavBarItem
                        href="/explore"
                        pathname={pathname}
                        text='Explore'
                        icon={<MdOutlineExplore className="w-6 h-6 md:w-5 md:h-5 fill-inherit" />}
                    />

                    <SideNavBarItem
                        href="/notifications"
                        pathname={pathname}
                        text='Notifications'
                        icon={<VscBell className="w-6 h-6 md:w-5 md:h-5 fill-inherit" />}
                    />

                    <SideNavBarItem
                        href="/messages"
                        pathname={pathname}
                        text='Messages'
                        icon={<BiMessageSquareDetail className="w-6 h-6 md:w-5 md:h-5 fill-inherit" />}
                    />

                    <SideNavBarItem
                        href="/bookmarks"
                        pathname={pathname}
                        text='Bookmarks'
                        icon={<BsBookmark className="w-5 h-5 md:w-[17px] md:h-[17px] fill-inherit" />}
                    />

                    <SideNavBarItem
                        href="/analytics"
                        pathname={pathname}
                        text='Analytics'
                        icon={<IoAnalytics className="w-6 h-6 md:w-[17px] md:h-[17px] fill-inherit" />}
                    />

                    <SideNavBarItem
                        href="/theme"
                        pathname={pathname}
                        text='Theme'
                        icon={<MdOutlineColorLens className="w-6 h-6 md:w-[17px] md:h-[17px] fill-inherit" />}
                    />

                    <SideNavBarItem
                        href="/settings"
                        pathname={pathname}
                        text='Settings'
                        icon={<BsGear className="w-5 h-5 md:w-[17px] md:h-[17px] fill-inherit" />}
                    />

                </div>
            </div>
        </>
    )
}