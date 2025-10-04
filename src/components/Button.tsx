interface ButtonProps {
  children: string;
  outline?: boolean;
}

const Button = ({ children, outline }: ButtonProps) => {
  return (
    <button
      className={`${
        outline
          ? "text-accent-blue border  border-accent-blue"
          : "text-dark-900 bg-accent-blue"
      }  text-md font-black px-7 py-2 cursor-pointer hover:opacity-90 min-w-fit active:scale-95 transition duration-300 ease-in-out`}
    >
      {children}
    </button>
  );
};

export default Button;
