import ImageWithSkeleton from "./ImageWithSkeleton";

export default function LikedByThesePeople_1({famousUser, usersCount, lastThreeUsers, containerClass=""}) {
    return (
        <div className={"flex flex-wrap gap-y-3 items-center gap-x-3 " + containerClass }>

            {/* last three users + famousUser profile picture */}
            <div className="-space-x-3 flex flex-nowrap">

                <ImageWithSkeleton
                    containerClass="rounded-full border border-[--color-gray]"
                    imgBorderRadius="50%"
                    loadingBorderRadius="50%"
                    height={70}
                    width={70}
                    imgH={28}
                    imgW={28}
                    img="/images/story/story-img-1.jpg"
                />

                <ImageWithSkeleton
                    containerClass="rounded-full border border-[--color-gray]"
                    imgBorderRadius="50%"
                    loadingBorderRadius="50%"
                    height={80}
                    width={80}
                    imgH={28}
                    imgW={28}
                    img="/images/story/story-img-2.jpg"
                />

                <ImageWithSkeleton
                    containerClass="rounded-full border border-[--color-gray]"
                    imgBorderRadius="50%"
                    loadingBorderRadius="50%"
                    height={80}
                    width={80}
                    imgH={28}
                    imgW={28}
                    img="/images/story/story-img-3.jpg"
                />

            </div>

            <p className="text-sm font-medium text-[--color-gray] flex gap-x-1 flex-wrap items-center">
                liked by
                <span className="text-[--color-dark] font-semibold">username is here</span>
                and
                <span className="text-[--color-dark] font-semibold">2,769 others</span>
            </p>
            
        </div>
    )
}