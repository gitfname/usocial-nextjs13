
import dynamic from "next/dynamic";
const ThemeSwithcer_1 = dynamic(() => import("@/components/ThemeSwithcer_1"), {ssr: false})

export default function page() {
    return (
        <div className="grid grid-cols-3 gap-x-6 w-full">

            <ThemeSwithcer_1
                theme="light"
                previewColor="white"
            />

            <ThemeSwithcer_1
                theme="dark"
                previewColor="black"
            />

        </div>
    )
}