"use client"

import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"
import Link from "next/link"

const BiHomeAlt2 = dynamic(() => import("react-icons/bi").then(module => module.BiHomeAlt2), {ssr:false})
const MdOutlineExplore = dynamic(() => import("react-icons/md").then(module => module.MdOutlineExplore), {ssr:false})
const MdOutlineColorLens = dynamic(() => import("react-icons/md").then(module => module.MdOutlineExplore), {ssr:false})
const VscBell = dynamic(() => import("react-icons/vsc").then(module => module.VscBell), {ssr:false})
const BiMessageSquareDetail = dynamic(() => import("react-icons/bi").then(module => module.BiMessageSquareDetail), {ssr:false})
const BsBookmark = dynamic(() => import("react-icons/bs").then(module => module.BsBookmark), {ssr:false})
const BsGear = dynamic(() => import("react-icons/bs").then(module => module.BsGear), {ssr:false})
const IoAnalytics = dynamic(() => import("react-icons/io5").then(module => module.IoAnalytics), {ssr:false})



function SideNavBarItem({text, href, icon, pathname=""}) {
    return (
        <Link
            href={href}
            className={`cursor-pointer transition-colors duration-200 flex items-center hover:bg-[--color-light] p-3 py-4
            relative group ${pathname===href&&"active-sidebar-navlink"}`}
        >
            <div className="absolute opacity-0 group-hover:opacity-100 top-0 left-0 w-1 h-full group-[.active-sidebar-navlink]:opacity-100 bg-[--color-primary]"></div>
            <div
                className="w-11 grid place-items-center fill-[--color-gray]
                group-hover:fill-[--color-primary]
                group-[.active-sidebar-navlink]:fill-[--color-primary]"
            >
                {icon}
            </div>
            <p className="text-sm font-medium text-[--color-black] group-[.active-sidebar-navlink]:text-[--color-black]">{text}</p>
        </Link>
    )
}

function SideNavBar() {
    const pathname = usePathname()
     
    return (
        <div className="bg-[var(--color-white)] rounded-xl space-y-1 overflow-hidden">

            <SideNavBarItem
                href="/"
                pathname={pathname}
                text='Home'
                icon={<BiHomeAlt2 className="w-5 h-5 fill-inherit" />}
            />

            <SideNavBarItem
                href="/explore"
                pathname={pathname}
                text='Explore'
                icon={<MdOutlineExplore className="w-5 h-5 fill-inherit" />}
            />

            <SideNavBarItem
                href="/notifications"
                pathname={pathname}
                text='Notifications'
                icon={<VscBell className="w-5 h-5 fill-inherit" />}
            />

            <SideNavBarItem
                href="/messages"
                pathname={pathname}
                text='Messages'
                icon={<BiMessageSquareDetail className="w-5 h-5 fill-inherit" />}
            />

            <SideNavBarItem
                href="/bookmarks"
                pathname={pathname}
                text='Bookmarks'
                icon={<BsBookmark className="w-[17px] h-[17px] fill-inherit" />}
            />

            <SideNavBarItem
                href="/analytics"
                pathname={pathname}
                text='Analytics'
                icon={<IoAnalytics className="w-[17px] h-[17px] fill-inherit" />}
            />

            <SideNavBarItem
                href="/theme"
                pathname={pathname}
                text='Theme'
                icon={<MdOutlineColorLens className="w-[17px] h-[17px] fill-inherit" />}
            />

            <SideNavBarItem
                href="/settings"
                pathname={pathname}
                text='Settings'
                icon={<BsGear className="w-[17px] h-[17px] fill-inherit" />}
            />

        </div>
    )
}

export default SideNavBar