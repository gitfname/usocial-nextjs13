

function Button({text, onClick, className=""}) {
  return (
    <button
        onClick={onClick}
        className={`p-[var(--btn-padding)] font-normal rounded-[var(--border-radius)] cursor-pointer transition-all duration-300
        text-base hover:bg-opacity-90 bg-[var(--color-primary)] shadow-sm shadow-red-500/20 text-[--color-light]
        active:scale-[0.97] ` + className}
    >
        {text}
    </button>
  )
}

export default Button