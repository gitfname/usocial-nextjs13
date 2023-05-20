
export default function StillInDevelopmentPhasePage({pageTitle="This"}) {
    return (
        <div className="w-full h-full grid place-items-center">
            <p className="text-[--color-gray] font-bold text-4xl">{[pageTitle]} page is still in development phase</p>
        </div>
    )
}