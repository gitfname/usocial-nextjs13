import getFeeds from "./getFeeds"

describe("getFeeds", () => {
    
    test("getFeeds should return an object containing these properties feeds, pagination, meta", async () => {
        const feeds = await getFeeds()
        return expect(feeds).toHaveProperty("feeds", "pagination", "meta")
    })

    test("getFeeds without passing any parameter should return an object with feeds propertu that has length of 4", async () => {
        const feeds = await getFeeds()
        return expect(feeds.feeds).toHaveLength(4)
    })

})
