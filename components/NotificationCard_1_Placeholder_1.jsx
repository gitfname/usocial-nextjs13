

function NotificationCard_1_Placeholder_1() {
    return (
        <div
            className="w-full flex items-center justify-between gap-x-2.5 transition-colors duration-200
            p-[--notificationcard1--padding] rounded-[--notificationcard1--border-radius]
            bg-[--notificationcard1--bg] hover:bg-[--notificationcard1--hover-bg]
            border-b border-[--notificationcard1--border-b-color] py-[--notificationcard1--padding-y]"
        >

            <div className="flex items-center gap-x-2.5">

                <div className="w-10 h-10 rounded-full bg-[--notificationcard1_placeholder--bg] animate-pulse">
                </div>

                <div>
                    <div className="w-72 h-2 rounded-xl bg-[--notificationcard1_placeholder--bg] animate-pulse">
                    </div>
                    <div className="w-40 h-1.5 rounded-xl bg-[--notificationcard1_placeholder--bg] animate-pulse mt-1">
                    </div>
                </div>

            </div>

            <div className="w-12 h-1.5 bg-[--notificationcard1_placeholder--bg] animate-pulse rounded-xl">
            </div>


        </div>
    )
}

export default NotificationCard_1_Placeholder_1