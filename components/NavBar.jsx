"use client"

import Link from "next/link"
import { AiOutlineSearch } from "react-icons/ai"
import Button from "./Button"

function NavBar() {
  return (
    <nav className="bg-white py-2 flex items-center shadow-sm shadow-black/10">
        {/* container */}
        <div className="flex items-center justify-between w-[90%] mx-auto">
            {/* logo */}
            <Link
                href="/"
                className="text-2xl font-semibold text-gray-800"
            >
                USocial
            </Link>

            {/* search input */}
            <div className="relative max-w-lg w-full">
                <input
                    type="search"
                    placeholder="Search for creators, inspiration, projects"
                    className="text-slate-900 text-sm tracking-wide font-normal placeholder-gray-400 rounded-full px-3
                    pl-11 bg-gray-100 py-2 focus:outline-none w-full"
                />
                <AiOutlineSearch className="w-5 h-5 fill-gray-600 absolute top-1/2 left-3 -translate-y-1/2" />
            </div>

            <div className="flex items-center gap-x-7">

                {/* create post button */}
                <Button
                    text="create"
                />

                {/* profile picture */}
                <div className="w-9 h-9 aspect-square rounded-full bg-red-400"></div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar