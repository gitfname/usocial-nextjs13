
"use client"

import { useState } from "react"
import Image from "next/image"

function ImageWithSkeleton({img, width, height}) {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <>
            <Image
                onLoadingComplete={(e) => setIsLoading(false)}
                width={(width+50)}
                height={(height+50)}
                alt=""
                src={img}
                style={{
                    width: width,
                    height: height
                }}
                className={`object-center object-cover ${isLoading&&"!opacity-0"}`}
            />

            {
                isLoading&&(
                    <div className="absolute top-0 left-0 w-full h-full z-10 bg-gray-500 animate-pulse"></div>
                )
            }
        </>
    )
}

export default ImageWithSkeleton