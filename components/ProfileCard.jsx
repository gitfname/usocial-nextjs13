
function ProfileCard() {
  return (
    <div className="w-full flex items-center p-3 rounded-[--profilecard--border-radius] gap-x-3 bg-[--profilecard--bg] py-5">
        <div
          className="flex-shrink-0 w-[--profilecard__img--width] h-[--profilecard__img--height]
          rounded-[--profilecard__img--border-radius] bg-red-400"
        >
        </div>
        <div>
            <p
              style={{
                fontSize: "var(--profilecard__username--font-size)"
              }}
              className="
              text-[--profilecard__username--color] font-[--profilecard__username--font-weight]
              tracking-[--profilecard__username--text-track]"
            >
              username is here
            </p>

            <p
              style={{
                fontSize: "var(--profilecard__email--font-size)"
              }}
              className="
              text-[--profilecard__email--color] font-[--profilecard__email--font-weight]
              tracking-[--profilecard__email--text-track]"
            >
              useremail@gmail.com
            </p>
        </div>
    </div>
  )
}

export default ProfileCard