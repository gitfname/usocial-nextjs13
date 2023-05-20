"use client"

import Button from "./Button"

export default function ThemeSwithcer_1({theme, previewColor}) {
    return (
        <div className="p-3 rounded-xl w-full bg-[--themeSwitcher--bg] flex flex-col items-center gap-y-4">

            <div className="w-full h-28 rounded-xl" style={{backgroundColor: previewColor}}></div>

            <Button 
                text="Set"
                onClick={() => {
                    import(`../theme/${theme}`)
                    .then(module => {
                        module.setTheme()
                        localStorage.setItem(process.env.NEXT_PUBLIC_THEME_KEY, theme)
                    })
                }}
            />

        </div>
    )
}