import CreatePost_1 from "@/components/CreatePost_1";
import StoriesCard from "@/components/StoriesCard";

import dynamic from "next/dynamic";
const FeedsSection_1 = dynamic(() => import("@/components/FeedSection_1"), {ssr: false})



export default function Home() {
  return (
    <div>
      
      {/* sostories */}
      <div className="w-full overflow-x-auto">
        <div className="w-max flex items-center gap-5">

          <StoriesCard
            width={120}
            height={190}
            text="Few impression"
            img="/images/story/story-img-10.png"
          />

          <StoriesCard
            width={120}
            height={190}
            text="hello world"
            img="/images/story/story-img-1.jpg"
          />

          <StoriesCard
            width={120}
            height={190}
            text="Living valley had silent eat merits"
            img="/images/story/story-img-2.jpg"
          />

          <StoriesCard
            width={120}
            height={190}
            text="So unreserved do interested increasing sentiments."
            img="/images/story/story-img-3.jpg"
          />

          <StoriesCard
            width={120}
            height={190}
            text="Domestic confined any but son"
            img="/images/story/story-img-4.jpeg"
          />

          <StoriesCard
            width={120}
            height={190}
            text="Ye am depending"
            img="/images/story/story-img-5.jpg"
          />

          <StoriesCard
            width={120}
            height={190}
            text="abilities immediate suffering"
            img="/images/story/story-img-6.jpg"
          />

          <StoriesCard
            width={120}
            height={190}
            text="believe ferrars"
            img="/images/story/story-img-7.jpg"
          />

          <StoriesCard
            width={120}
            height={190}
            text="Chapter too parties"
            img="/images/story/story-img-8.jpg"
          />
          
          <StoriesCard
            width={120}
            height={190}
            text="Cheerful but whatever"
            img="/images/story/story-img-9.jpg"
          />

        </div>
      </div>

      <div className="mt-6 w-full">
        <CreatePost_1
          username="Diana"
        />
      </div>

      <div className="mt-6 w-full space-y-4">

        {/* <FeedsSection /> */}
        <FeedsSection_1 />


      </div>
      
    </div>
  )
}
