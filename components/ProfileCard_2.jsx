"use client"

import dynamic from "next/dynamic"
import ImageWithSkeleton from "./ImageWithSkeleton"
const BsThreeDots = dynamic(() => import("react-icons/bs").then(module => module.BsThreeDots), {ssr:false })

function ProfileCard_2({id, date, userDetails}) {
  return (
    <div className="w-full flex items-center justify-between">

        <div className="flex items-center gap-x-2">
            {/* <div className="w-8 h-8 rounded-full bg-red-400 flex-shrink-0"></div> */}
            <ImageWithSkeleton
              imgBorderRadius="50%"
              loadingBorderRadius="50%"
              width={100}
              height={100}
              imgH={33}
              imgW={33}
              img={userDetails?.img}
            />
            <div>
                <p className="text-sm font-semibold text-[var(--color-black)]">{userDetails?.username}</p>
                <p className="text-xs font-medium text-[var(--color-dark)]">{date}</p>
            </div>
        </div>

        <BsThreeDots className="w-4 h-4 fill-[var(--color-dark)]" />

    </div>
  )
}

export default ProfileCard_2