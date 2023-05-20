import Button from "./Button"
import ImageWithSkeleton from "./ImageWithSkeleton"


function CreatePost_1({username, img}) {
  return (
    <div className="w-full relative rounded-full overflow-hidden">
        
        {/* profile */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4">
          <ImageWithSkeleton
            imgBorderRadius="50%"
            loadingBorderRadius="50%"
            width={200}
            height={200}
            imgH="2.2rem"
            imgW="2.2rem"
            img={"/images/post/post-img-2.jpg"}
          />
        </div>

        <input
            type="text"
            className="p-3.5 focus:outline-none border-none pl-16 pr-24 bg-[var(--color-white)]
            text-sm font-normal placeholder-[var(--color-gray)] w-full"
            placeholder={"What's on your mind "+username}
        />

        {/* create post button */}
        <div className="absolute top-1/2 -translate-y-1/2 right-4">
            <Button
                text="Post"
                className="!text-[0.9rem] leading-5"
            />
        </div>

    </div>
  )
}

export default CreatePost_1