"use client"

import getFeeds from "@/lib/db/actions/getFeeds"
import { useState } from "react"
import SinglePostCard from "./SinglePostCard"
import SinglePostCard_1Placeholder_1 from "./SinglePostCard_1Placeholder_1"
import InfiniteScroll from "./InfiniteScroll"

function FeedsSection_1() {
    const [fLength, setFLength] = useState(0)
    const [feeds, setFeeds] = useState({feeds:[]})
    const [hasMore, setHasMore] = useState(true)

    return (
        <div className="gap-4 grid sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {
                feeds?.feeds.length
                ?
                feeds.feeds.map(feed => (
                    <SinglePostCard
                        key={feed.id}
                        {...feed}
                    />
                ))
                :
                null
            }

            
            <InfiniteScroll
                hasMore={hasMore}
                getMoreData={() => new Promise(resolve => {
                    setTimeout(() => {
                        resolve(
                            getFeeds({
                                pagination: {
                                    start: fLength,
                                    limit: 4
                                }
                            })
                        )
                    }, 500);
                })}
                setData={(newFeeds) => {
                    setFeeds(
                        prev => ({...newFeeds, feeds: [...prev.feeds, ...newFeeds.feeds]})
                    )
                    setFLength(fLength+newFeeds.feeds.length)
                    if(fLength >= parseInt(feeds?.meta?.total)) {
                        setHasMore(false)
                    }
                }}
                placeHolder={
                    <SinglePostCard_1Placeholder_1 />
                }
            />
        </div>
    )
}

export default FeedsSection_1
