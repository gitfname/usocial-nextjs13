"use client"

import { useEffect } from "react"

export default function ThemeProvider() {

    useEffect(
        () => {
            if(typeof window !== "undefined" && typeof localStorage !== "undefined") {
                const currentTheme = localStorage.getItem(process.env.NEXT_PUBLIC_THEME_KEY)
                if(!currentTheme) {
                    localStorage.setItem(process.env.NEXT_PUBLIC_THEME_KEY, "light")
                    return
                }
                switch (currentTheme) {
                    case "dark":
                        import("../theme/dark")
                        .then(module => module.setTheme())
                    break;
                }
            }
        },
        []
    )

    return <></>
}