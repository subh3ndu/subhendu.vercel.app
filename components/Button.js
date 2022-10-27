const Button = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`p-2 font-mono rounded-md hover:ring-2 hover:ring-light_main dark:hover:ring-dark_main hover:bg-light_bg dark:hover:bg-dark_bg hover:text-light_main dark:hover:text-dark_main ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
