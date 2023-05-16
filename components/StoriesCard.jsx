import Image from "next/image"


function StoriesCard({id, width, height, img, text}) {
  return (
    <div
        style={{
            width: width,
            height: height
        }}
        className="w-full h-full relative overflow-hidden rounded-xl"
    >
        <Image
            width={(width+50)}
            height={(height+50)}
            alt=""
            src={img}
            style={{
                width: width,
                height: height
            }}
            className="object-center object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full p-3 bg-gradient-to-t from-black/60 via-transparent to-black/10 flex flex-col">
            <div className="w-7 h-7 rounded-full bg-blue-500"></div>

            <p className="text-sm text-gray-50 font-light mt-auto line-clamp-3">{text}</p>
        </div>
    </div>
  )
}

export default StoriesCard