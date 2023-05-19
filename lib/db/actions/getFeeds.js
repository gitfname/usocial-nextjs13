import feeds from "../resources/feeds";

export default async function getFeeds(props = {
    pagination: {
        start: 0,
        limit: 4
    }
}) {

    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                feeds: feeds.slice(props.pagination.start, (props.pagination.start + props.pagination.limit)),
                pagination: {
                    start: props.pagination.start,
                    limit: props.pagination.limit
                },
                meta: {
                    total: feeds.length
                }
            })
        }, 900);
    })

}