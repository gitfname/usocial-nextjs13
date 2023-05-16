

function Button({text, onClick}) {
  return (
    <button
        onClick={onClick}
        className="p-[var(--btn-padding)] font-normal rounded-[var(--border-radius)] cursor-pointer transition-all duration-300
        text-base hover:bg-opacity-90 bg-[var(--color-primary)] shadow-sm shadow-black/20 text-[--color-light] tracking-wide
        active:scale-[0.97]"
    >
        {text}
    </button>
  )
}

export default Button