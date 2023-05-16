
function ProfileCard() {
  return (
    <div className="w-full flex items-center p-3 rounded-xl gap-x-3 bg-[var(--color-white)] py-5">
        <div className="w-9 h-9 rounded-full bg-red-300 flex-shrink-0"></div>
        <div>
            <p className="text-sm text-[var(--color-dark)] font-medium">username is here</p>
            <p className="text-xs text-[var(--color-gray)] font-normal">@userid</p>
        </div>
    </div>
  )
}

export default ProfileCard