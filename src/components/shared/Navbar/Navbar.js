import profileIcon from "@/assets/Icon/profile.png"
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="fixed z-40 w-[1600px] py-4">
      <div className="flex items-center">
        <div className="w-1/5">
            <h1 className="text-2xl font-semibold">Duas Page</h1>
        </div>
        <div className="flex-1 flex justify-end">
          <form>
            <div class="relative">
              <input
                type="search"
                className="block w-80 p-3 ps-4 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search "
                required
              />
              <button
                type="submit"
                className="absolute right-1 bottom-1 focus:ring-0 focus:outline-none focus:ring-blue-0 font-medium rounded-md text-lg px-4 py-2 bg-gray-200"
              >
                <svg
                  class="w-5 h-5 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/5 flex justify-end">
          <Image src={profileIcon} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
