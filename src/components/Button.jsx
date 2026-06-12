function Button({ children, className = "", variant = "primary" }) {
  const baseStyle =
    "inline-flex items-center justify-center py-2 px-4 text-[14px] rounded-full font-medium cursor-pointer transition-all duration-300";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-500",
    secondary: "bg-gray-700 text-black hover:bg-gray-600 ",
    danger: "bg-red-600 text-white hover:bg-red-500",
    gray: "bg-gray-600 text-white hover:bg-gray-500",
    blueoutline:
      "border border-blue-600  text-blue-600 text-md font-semibold bg-transparent hover:bg-blue-100 ",
    outline:
      "border-1 border-white hover:border-gray-300 text-black hover:bg-white hover:text-black",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
