

function Button({text, onClick, className=""}) {
  return (
    <button
        onClick={onClick}
        className={`p-[--btn-padding] font-normal rounded-[--border-radius] cursor-pointer transition-all duration-300
        text-base hover:bg-opacity-90 bg-[--color-primary] shadow-sm shadow-red-500/20 text-[--color-light]
        active:scale-[0.97] ` + className}
    >
        {text}
    </button>
  )
}

export default Button