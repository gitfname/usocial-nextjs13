import Button from "./Button"


function CreatePost_1({username, img}) {
  return (
    <div className="w-full relative rounded-full overflow-hidden">
        
        {/* profile */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 w-[30px] h-[30px] bg-red-300 rounded-full">

        </div>

        <input
            type="text"
            className="p-3.5 focus:outline-none border-none pl-14 pr-24 bg-[var(--color-white)]
            text-sm font-normal placeholder-[var(--color-gray)] w-full"
            placeholder={"What's on your mind "+username}
        />

        {/* create post button */}
        <div className="absolute top-1/2 -translate-y-1/2 right-4">
            <Button
                text="Post"
                className="!text-[12px] leading-5"
            />
        </div>

    </div>
  )
}

export default CreatePost_1