"use client"

import { useEffect, useRef, useState } from "react"

export default function InfiniteScroll({getMoreData, setData, hasMore, placeHolder}) {
    const [isFetching, setIsFetching] = useState(false)
    const loaderRef = useRef(null)
    const [showPlaceHolder, setShowPlaceHolder] = useState(true)
    const [visible, setisVisible] = useState(false)
    const [observer, setObserver] = useState(null)

    const getMore = async () => {
        if(!hasMore) return
        setIsFetching(true)
        const newFeeds = await getMoreData()
        setShowPlaceHolder(false)
        setTimeout(() => {
            setShowPlaceHolder(true)
        }, 200);
        setIsFetching(false)
        setData(newFeeds)
    }

    useEffect(
        () => {
            const observer = new IntersectionObserver(
                (entries => {
                    entries.forEach(entry => {
                        setisVisible(entry.isIntersecting)
                    })
                })
            )
            setObserver(observer)
            observer.observe(loaderRef.current)
            return () => {
                observer.disconnect()
            }
        },
        []
    )

    useEffect(
        () => {
            if(visible && !isFetching && hasMore) {
                getMore()
            }
            else if (!hasMore) {
                observer.disconnect(loaderRef.current)
            }
        },
        [visible]
    )

    return (
        <>
            {
                hasMore&&(
                    <div ref={loaderRef} className={!showPlaceHolder?"hidden":""}>
                        {placeHolder}
                    </div>
                )
            }
        </>
    )
}