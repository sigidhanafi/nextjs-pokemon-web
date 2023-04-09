import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  return (
    <div className="relative mx-auto">
      <div className="fixed top-0 left-0 right-0 flex justify-center items-center w-full h-16 bg-blue-500 z-50">
        <div className="flex w-full lg:w-1/3 mx-4 lg:mx-0 items-center space-x-2">
          <button
            onClick={() => {
              router.back();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <Link href={"/"}>
            <h1 className="text-white text-xl font-bold flex-grow-1">
              Poke Monster!
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
