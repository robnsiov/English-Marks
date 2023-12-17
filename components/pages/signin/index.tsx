import Image from "next/image";

const Signin = () => {
  return (
    <>
      <div className="absolute inset-0 bg-blue-700 flex justify-between items-center flex-col px-5 py-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[400px] bg-white">
          <svg
            className="absolute top-full left-0 -right-1"
            viewBox="0 0 1536 200"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <path
              fill="#fff"
              d="M 0 0 C 389.5 0 389.5 110 779 110 L 779 110 L 779 0 L 0 0 Z"
              strokeWidth="0"
            ></path>{" "}
            <path
              fill="#fff"
              d="M 778 110 C 1152 110 1152 200 1526 200 L 1526 200 L 1526 0 L 778 0 Z"
              strokeWidth="0"
            ></path>{" "}
          </svg>
        </div>
        <div className="w-full flex justify-center items-center flex-col relative z-10">
          <Image
            width={400}
            height={400}
            src={"/images/login.svg"}
            alt="bubble"
          />
        </div>
        <div className="w-full flex justify-start items-start flex-col relative z-10">
          <input
            placeholder="example@gmail.com"
            className="w-full bg-white p-2.5 h-[40px] rounded-xl outline-none focus:outline-2 focus:outline-white
          outline-offset-4
          placeholder:text-blue-300 text-sm mb-3"
          />
          <input
            placeholder="********"
            className="w-full bg-white p-2.5 h-[40px] rounded-xl outline-none focus:outline-2 focus:outline-white
          outline-offset-4
          placeholder:text-blue-300 text-sm"
          />
          <button
            className="w-full
            p-2.5 rounded-xl mt-7
            outline outline-2 outline-offset-4 outline-white
            text-sm 
            font-semibold
           text-blue-700 bg-white
           transition-all duration-200 active:scale-95 hover:bg-zinc-200"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};
export default Signin;
