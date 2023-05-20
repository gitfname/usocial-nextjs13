
"use client"

import dynamic from "next/dynamic"
const BsBookmark = dynamic(() => import("react-icons/bs").then(module => module.BsBookmark), {ssr:false})
const BsHeart = dynamic(() => import("react-icons/bs").then(module => module.BsHeart), {ssr:false})
const BsShare = dynamic(() => import("react-icons/bs").then(module => module.BsShare), {ssr:false})
const GoComment = dynamic(() => import("react-icons/go").then(module => module.GoComment), {ssr:false})

function IconsGroup({containerClass}) {
  return (
    <div className={"w-full flex items-center justify-between gap-x-2 " + containerClass}>

        <div className="flex items-center gap-x-4">
            <BsHeart className="cursor-pointer w-5 h-5 md:w-4 md:h-4 fill-[var(--color-dark)]" />
            <GoComment className="cursor-pointer w-5 h-5 md:w-4 md:h-4 fill-[var(--color-dark)]" />
            <BsShare className="cursor-pointer w-5 h-5 md:w-4 md:h-4 fill-[var(--color-dark)]" />
        </div>

        <BsBookmark className="cursor-pointer w-5 h-5 md:w-4 md:h-4 fill-[var(--color-dark)]" />
    </div>
  )
}

export default IconsGroup