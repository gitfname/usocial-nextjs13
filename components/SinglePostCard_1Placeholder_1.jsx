
import { forwardRef } from "react"

function SinglePostCard_1Placeholder_1() {
  return (
        <div className={`w-full rounded-xl bg-[--color-white] p-4`}>
            {/* profile card placeholder */}
            <div className="w-full flex items-center justify-between gap-x-3">
                <div className="flex items-center gap-x-3">
                    <div className="w-8 h-8 rounded-full bg-[--color-gray] animate-pulse"></div>
                    <div className="space-y-1">
                        <div className="w-36 rounded-xl h-2 bg-[--color-gray] animate-pulse"></div>
                        <div className="w-24 rounded-xl h-1.5 bg-[--color-gray] animate-pulse"></div>
                    </div>
                </div>

                <div className="w-6 h-1 bg-[--color-gray] rounded-xl"></div>
            </div>

            {/* image placeholder */}
            <div className="w-full mt-4 h-[288px] bg-[--color-gray] animate-pulse rounded-xl">
            </div>

            <div className="w-full mt-4">

                <div className="flex items-center justify-between">
                    <div className="w-56 h-2 rounded-xl bg-[--color-gray]"></div>
                    <div className="w-6 h-2 rounded-xl bg-[--color-gray]"></div>
                </div>

                <div className="w-72 mt-6 h-2 rounded-xl bg-[--color-gray]"></div>
                <div className="w-72 mt-2 h-2 rounded-xl bg-[--color-gray]"></div>
                <div className="w-64 mt-2 h-2 rounded-xl bg-[--color-gray]"></div>

            </div>
        </div>
  )
}

export default SinglePostCard_1Placeholder_1