import Link from "next/link";
import ButtonImpl from "./types";

const Button = ({ className, link, children }: ButtonImpl) => {
  return (
    <>
      <Link
        className={
          "bg-blue-200 rounded-md py-2 px-3 text-blue-800 text-sm uppercase transition-all duration-200 active:scale-95 inline-block " +
          className
        }
        href={link}
      >
        {children}
      </Link>
    </>
  );
};
export default Button;
