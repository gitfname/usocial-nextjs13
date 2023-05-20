import Link from "next/link"

export default function SideNavBarItem({text, href, icon, pathname=""}) {
    return (
        <Link
            href={href}
            className={`cursor-pointer transition-colors duration-200 flex items-center hover:bg-[--color-light] p-3 py-4
            relative group ${pathname===href&&"active-sidebar-navlink"}`}
        >
            <div className="absolute opacity-0 group-hover:opacity-100 top-0 left-0 w-1 h-full group-[.active-sidebar-navlink]:opacity-100 bg-[--color-primary]"></div>
            <div
                className="w-11 grid place-items-center fill-[--color-gray]
                group-hover:fill-[--color-primary]
                group-[.active-sidebar-navlink]:fill-[--color-primary]"
            >
                {icon}
            </div>
            <p
                className="text-sm font-medium text-[--color-black] group-[.active-sidebar-navlink]:text-[--color-primary]
                group-hover:text-[--color-primary]"
            >
                {text}
            </p>
        </Link>
    )
}