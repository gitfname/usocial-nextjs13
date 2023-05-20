"use client"

import Link from "next/link"
import { AiOutlineSearch } from "react-icons/ai"
import Button from "./Button"
import MobileMenu from "./MobileMenu"

function NavBar() {
  return (
    <nav className="bg-[--color-white] py-2 flex items-center shadow-sm shadow-black/10">
        {/* container */}
        <div className="flex items-center justify-between w-[90%] mx-auto relative">

            <div className="lg:hidden">
                <MobileMenu />
            </div>

            {/* logo */}
            <Link
                href="/"
                className="text-2xl font-semibold text-gray-800
                max-lg:absolute top-1/2 left-1/2 max-lg:-translate-y-1/2 max-lg:-translate-x-1/2"
            >
                USocial
            </Link>

            {/* search input */}
            <div className="relative max-w-lg w-full max-lg:hidden">
                <input
                    type="search"
                    placeholder="Search for creators, inspiration, projects"
                    className="text-slate-900 text-sm tracking-wide font-normal placeholder-gray-400 px-3
                    pl-11 py-2 focus:outline-none w-full
                    bg-[--topnavbar__text-input--bg] text-[--topnavbar__text-input--color]
                    placeholder-[--topnavbar__text-input__placeholder--text-color]
                    rounded-[--topnavbar__text-input__border-radius]"
                />
                <AiOutlineSearch className="w-5 h-5 fill-gray-600 absolute top-1/2 left-3 -translate-y-1/2" />
            </div>

            <div className="flex items-center gap-x-7">

                {/* create post button */}
                <Button
                    text="create"
                    className="max-md:hidden"
                />

                {/* profile picture */}
                <div className="w-9 h-9 aspect-square rounded-full bg-red-400"></div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar