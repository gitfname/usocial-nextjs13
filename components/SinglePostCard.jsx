import IconsGroup from "./IconsGroup"
import ImageWithSkeleton from "./ImageWithSkeleton"
import ProfileCard_2 from "./ProfileCard_2"

function SinglePostCard({id, date, img, imgH=288, imgW="100%"}) {
  return (
    <div className="w-full bg-[var(--color-white)] rounded-xl p-4">
        <ProfileCard_2
            username="username is here"
            date={date}
        />

        <ImageWithSkeleton
            containerClass="mt-4"
            imgBorderRadius={15}
            loadingBorderRadius={15}
            width={760}
            height={337}
            imgH={imgH}
            imgW={imgW}
            img={img}
        />

        <IconsGroup
            containerClass="mt-4 px-5"
        />
    </div>
  )
}

export default SinglePostCard