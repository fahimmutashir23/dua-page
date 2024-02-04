import logo from "@/assets/Logo/logo.png";
import home from "@/assets/Icon/Home (1).png";
import allDua from "@/assets/Icon/All Duas.png";
import book from "@/assets/Icon/Book.png";
import bookmark from "@/assets/Icon/Bookmark.png";
import duaqa from "@/assets/Icon/Dua Q&A.png";
import support from "@/assets/Icon/I want to support.png";
import memorize from "@/assets/Icon/Memorize.png";
import ruqya from "@/assets/Icon/Ruqyah.png";
import Image from "next/image";
import Link from "next/link";

const LeftNav = () => {
  return (
    <div className=" w-[100px] mt-[80px] mb-2">
        <div className="h-[calc(100vh-90px)] overflow-y-auto bg-white rounded-lg flex flex-col items-center justify-between gap-20">
          <div>
            <Image src={logo} alt="" className="bg-white" />
          </div>

          <div>
            <ul className="space-y-7 bg-white">
              <li className="w-full bg-white">
                <Link href="/">
                  <Image src={home} alt="icon" className="bg-white h-10 w-10 mx-auto" />
                </Link>
              </li>
              <li className="w-full bg-white">
                <Link href="/allDuas">
                  <Image src={allDua} alt="icon" className="bg-white h-10 w-10 mx-auto" />
                </Link>
              </li>
              <li className="w-full bg-white">
                <Link href="/memorize">
                  <Image
                    src={memorize}
                    alt="icon"
                    className="bg-white h-10 w-10 mx-auto"
                  />
                </Link>
              </li>
              <li className="w-full bg-white">
                <Link href="/bookmark">
                  <Image
                    src={bookmark}
                    alt="icon"
                    className="bg-white h-10 w-10 mx-auto"
                  />
                </Link>
              </li>
              <li className="w-full bg-white">
                <Link href="/ruqya">
                  <Image src={ruqya} alt="icon" className="bg-white h-10 w-10 mx-auto" />
                </Link>
              </li>
              <li className="w-full bg-white">
                <Link href="/qna">
                  <Image src={duaqa} alt="icon" className="bg-white h-10 w-10 mx-auto" />
                </Link>
              </li>
              <li className="w-full bg-white">
                <Link href="/book">
                  <Image src={book} alt="icon" className="bg-white h-10 w-10 mx-auto" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="bg-white">
            <Image src={support} alt="icon" className="bg-white" />
          </div>
        </div>
    </div>
  );
};

export default LeftNav;
