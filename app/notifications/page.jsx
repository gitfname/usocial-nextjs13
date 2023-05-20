"use client"

import Notificationcard_1 from "@/components/NotificationCard_1";
import NotificationCard_1_Placeholder_1 from "@/components/NotificationCard_1_Placeholder_1";
import getNotifications from "@/lib/db/actions/getNotifications";
import { useEffect, useState } from "react";

export default function Page() {
    const [notifications, setNotifications] = useState([])

    useEffect(
        () => {
            setTimeout(() => {
                setNotifications(getNotifications())
            }, 700);
        },
        []
    )
    
    return (
        <div>

            {
                notifications.length
                ?
                notifications.map(notification => <Notificationcard_1 key={notification.id} {...notification} />)
                :
                <>
                    <NotificationCard_1_Placeholder_1 />
                    <NotificationCard_1_Placeholder_1 />
                    <NotificationCard_1_Placeholder_1 />
                </>
            }
            
        </div>
    )
}