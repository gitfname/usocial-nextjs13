"use client"

import { usePathname } from "next/navigation"
// import { BiHomeAlt2 } from "react-icons/bi"
// import { MdOutlineExplore, MdOutlineColorLens } from "react-icons/md"
// import { VscBell } from "react-icons/vsc"
// import { BiMessageSquareDetail } from "react-icons/bi"
// import { BsBookmark, BsGear } from "react-icons/bs"
// import { IoAnalytics } from "react-icons/io5"
import dynamic from "next/dynamic"

const BiHomeAlt2 = dynamic(() => import("react-icons/bi").then(module => module.BiHomeAlt2), {ssr:false})
const MdOutlineExplore = dynamic(() => import("react-icons/md").then(module => module.MdOutlineExplore), {ssr:false})
const MdOutlineColorLens = dynamic(() => import("react-icons/md").then(module => module.MdOutlineExplore), {ssr:false})
const VscBell = dynamic(() => import("react-icons/vsc").then(module => module.VscBell), {ssr:false})
const BiMessageSquareDetail = dynamic(() => import("react-icons/bi").then(module => module.BiMessageSquareDetail), {ssr:false})
const BsBookmark = dynamic(() => import("react-icons/bs").then(module => module.BsBookmark), {ssr:false})
const BsGear = dynamic(() => import("react-icons/bs").then(module => module.BsGear), {ssr:false})
const IoAnalytics = dynamic(() => import("react-icons/io5").then(module => module.IoAnalytics), {ssr:false})



function SideNavBarItem({text, href, icon}) {
    return (
        <div className="cursor-pointer transition-colors duration-200 flex items-center hover:bg-[var(--color-light)] p-3 py-4 relative group">
            <div className="absolute opacity-0 group-hover:opacity-100 top-0 left-0 w-1 h-full bg-[var(--color-primary)]"></div>
            <div className="w-11 grid place-items-center fill-[var(--color-gray)] group-hover:fill-[var(--color-primary)]">
                {icon}
            </div>
            <p className="text-sm font-medium text-[var(--color-black)]">{text}</p>
        </div>
    )
}

function SideNavBar() {
  return (
    <div className="bg-[var(--color-white)] rounded-xl space-y-1 overflow-hidden">

        <SideNavBarItem
            text='Home'
            icon={<BiHomeAlt2 className="w-5 h-5 fill-inherit" />}
        />

        <SideNavBarItem
            text='Explore'
            icon={<MdOutlineExplore className="w-5 h-5 fill-inherit" />}
        />

        <SideNavBarItem
            text='Notifications'
            icon={<VscBell className="w-5 h-5 fill-inherit" />}
        />

        <SideNavBarItem
            text='Messages'
            icon={<BiMessageSquareDetail className="w-5 h-5 fill-inherit" />}
        />

        <SideNavBarItem
            text='Bookmarks'
            icon={<BsBookmark className="w-[17px] h-[17px] fill-inherit" />}
        />

        <SideNavBarItem
            text='Analytics'
            icon={<IoAnalytics className="w-[17px] h-[17px] fill-inherit" />}
        />

        <SideNavBarItem
            text='Theme'
            icon={<MdOutlineColorLens className="w-[17px] h-[17px] fill-inherit" />}
        />

        <SideNavBarItem
            text='Settings'
            icon={<BsGear className="w-[17px] h-[17px] fill-inherit" />}
        />

    </div>
  )
}

export default SideNavBar