import Image from "next/image"

export default function Notificationcard_1({userDetails, action="liked", date="44m ago"}) {
    return (
        <div
            className="w-full flex items-center justify-between gap-x-2.5 transition-colors duration-200
            p-[--notificationcard1--padding] rounded-[--notificationcard1--border-radius]
            bg-[--notificationcard1--bg] hover:bg-[--notificationcard1--hover-bg]
            border-b border-[--notificationcard1--border-b-color] py-[--notificationcard1--padding-y]"
        >

            <div className="flex items-center gap-x-2.5">

                <Image
                    width={100}
                    height={100}
                    src={userDetails?.imgSrc}
                    className="
                    flex-shrink-0 w-[--notificationcard1__img--width] h-[--notificationcard1__img--height]
                    rounded-[--notificationcard1__img--border-radius] cursor-pointer
                    shadow-md shadow-[--notificationcard1__img--shadow-color]"
                />

                <p
                    style={{
                        fontSize: "var(--notificationcard1--font-size)"
                    }}
                    className="text-[--notificationcard1--color] font-[--notificationcard1--font-weight] flex items-center gap-x-1"
                >

                    <span
                        style={{
                            fontSize: "var(--notificationcard1__username--font-size)"
                        }}
                        className="cursor-pointer text-[--notificationcard1__username--color] font-[--notificationcard1__username--font-weight]"
                    >
                        {userDetails?.username}
                    </span>

                    <span>{action} you</span>
                    
                </p>

            </div>

            <p
                style={{
                    fontSize: "var(--notificationcard1__date--font-size)"
                }}
                className="text-[--notificationcard1__date--color] font-[--notificationcard1__date--font-weight]"
            >
                    {date}
            </p>


        </div>
    )
}