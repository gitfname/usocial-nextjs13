
import ImageWithSkeleton from "./ImageWithSkeleton"


function StoriesCard({id, width, height, img, text}) {

    return (
        <div
            style={{
                width: width,
                height: height
            }}
            className="w-full h-full relative overflow-hidden rounded-xl"
        >

            <ImageWithSkeleton
                width={width}
                height={height}
                img={img}
            />

            <div className={`bsolute top-0 left-0 w-full h-full p-3 bg-gradient-to-t from-black/60 via-transparent to-black/10 flex flex-col`}>
                <div className="w-7 h-7 rounded-full bg-blue-500"></div>

                <p className="text-sm text-gray-50 font-light mt-auto line-clamp-3">{text}</p>
            </div>
        </div>
    )
}

export default StoriesCard