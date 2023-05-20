import IconsGroup from "./IconsGroup"
import ImageWithSkeleton from "./ImageWithSkeleton"
import LikedByThesePeople_1 from "./LikedByThesePeople_1"
import ProfileCard_2 from "./ProfileCard_2"

function SinglePostCard({id, date, img, imgH=288, imgW="100%", userDetails}) {
  return (
    <div className="w-full bg-[var(--color-white)] rounded-xl p-4">
        <ProfileCard_2
            username="username is here"
            date={date}
            userDetails={userDetails}
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

        <LikedByThesePeople_1
          containerClass="mt-6"
        />

        <p className="mt-6 text-sm font-medium text-[--color-semidark] max-w-prose line-clamp-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque molestias error neque dolores accusamus iure, quasi totam eos nam ipsa molestiae iusto sit inventore facere. Repudiandae, dignissimos rem quidem veniam porro illo rerum maxime sed sint, aut mollitia. Neque veniam tempore accusantium sit. Ducimus dolorem aspernatur sed voluptates quisquam.
        </p>
    </div>
  )
}

export default SinglePostCard