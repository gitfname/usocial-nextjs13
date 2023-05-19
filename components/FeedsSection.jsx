"use client"

import getFeeds from "@/lib/db/actions/getFeeds"
import { useEffect, useState } from "react"
import SinglePostCard from "./SinglePostCard"
import SinglePostCard_1Placeholder_1 from "./SinglePostCard_1Placeholder_1"
import InfiniteScroll from "react-infinite-scroll-component"

function FeedsSection() {
    const [fLength, setFLength] = useState(4)
    const [feeds, setFeeds] = useState({feeds:[]})
    const [hasMore, setHasMore] = useState(true)

    useEffect(
        () => {
            setTimeout(() => {
                getFeeds()
                .then(feeds => setFeeds(feeds))
            }, 500);
        },
        []
    )

    const getMore = () => {
        console.log(feeds.feeds.length);
        if(fLength >= parseInt(feeds.meta.total)) {
            console.log("end");
            setHasMore(false)
            return
        }
        console.log("--- get data ---");
        setTimeout(() => {
            getFeeds({
                pagination: {
                    start: fLength,
                    limit: 4
                }
            })
            .then(newFeeds => {
                console.log(newFeeds);
                setFeeds( prev => ({...newFeeds, feeds: [...prev.feeds, ...newFeeds.feeds]}))
                setFLength(fLength+newFeeds.feeds.length)  
            })
        }, 2000);
    }

    return (
        <InfiniteScroll
            className="border border-red-400"
            dataLength={feeds.feeds.length}
            next={getMore}
            hasMore={hasMore}
            height={400}
            loader={<SinglePostCard_1Placeholder_1 />}
            endMessage={<p>End</p>}
        >
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
                    <div className="space-y-8">
                        <SinglePostCard_1Placeholder_1 />
                        <SinglePostCard_1Placeholder_1 />
                        <SinglePostCard_1Placeholder_1 />
                    </div>
            }
        </InfiniteScroll>
    )
}

export default FeedsSection