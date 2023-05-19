"use client"

import dynamic from "next/dynamic"
const BsThreeDots = dynamic(() => import("react-icons/bs").then(module => module.BsThreeDots), {ssr:false })

function ProfileCard_2({id, date, username, img}) {
  return (
    <div className="w-full flex items-center justify-between">

        <div className="flex items-center gap-x-2">
            <div className="w-8 h-8 rounded-full bg-red-400 flex-shrink-0"></div>
            <div>
                <p className="text-sm font-semibold text-[var(--color-black)]">{username}</p>
                <p className="text-xs font-medium text-[var(--color-dark)]">{date}</p>
            </div>
        </div>

        <BsThreeDots className="w-4 h-4 fill-[var(--color-dark)]" />

    </div>
  )
}

export default ProfileCard_2