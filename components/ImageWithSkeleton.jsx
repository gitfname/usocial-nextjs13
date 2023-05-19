
"use client"

import { useState } from "react"
import Image from "next/image"

function ImageWithSkeleton({img, width, height, imgW, imgH, containerClass, loadingBorderRadius=0, imgBorderRadius=0}) {
    const [isLoading, setIsLoading] = useState(true)
    return (
        <div className={"relative " + containerClass}>
            <Image
                onLoadingComplete={(e) => setIsLoading(false)}
                width={(width+50)}
                height={(height+50)}
                alt=""
                src={img}
                style={{
                    width: imgW ? imgW : width,
                    height: imgH ? imgH : height,
                    borderRadius: imgBorderRadius
                }}
                className={`object-center object-cover ${isLoading&&"!opacity-0"}`}
            />

            {
                isLoading&&(
                    <div
                        style={{
                            borderRadius: loadingBorderRadius
                        }}
                        className="absolute top-0 left-0 w-full h-full z-10 bg-gray-500 animate-pulse"></div>
                )
            }
        </div>
    )
}

export default ImageWithSkeleton