import lnIcon from "@/assets/Icon/Vector1.png";
import generalIcon from "@/assets/Icon/Vector2.png";
import fontIcon from "@/assets/Icon/54-menu-2.png";
import Image from "next/image";

const RightNav = () => {
  return (
    <div className="w-[330px] mt-[80px] mb-2">
      <div className="h-[calc(100vh-90px)] overflow-y-auto bg-white rounded-xl px-4 py-2">
        <div className="bg-white py-8">
          <h1 className="text-xl font-medium text-center bg-white text-black">
            Settings
          </h1>
        </div>
        <div className="bg-white space-y-3">
          <div className="collapse collapse-arrow join-item border rounded-xl hover:text-[#1FA45B] ">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium bg-slate-100">
              <h1 className=" font-semibold text-sm bg-slate-100 flex items-center gap-3 z-10">
                <span className="bg-slate-200 p-2 rounded-full">
                  <Image src={lnIcon} alt="icon" className="bg-transparent" />
                </span>
                Language Settings
              </h1>
            </div>
            <div className="collapse-content bg-white">
              <div className="flex justify-evenly bg-white mt-4">
                <button className="btn bg-[#1FA45B] border-none text-white w-24">
                  English
                </button>
                <button className="btn bg-[#1FA45B] border-none text-white w-24">
                  বাংলা
                </button>
              </div>
            </div>
          </div>

          <div className="collapse collapse-arrow join-item border rounded-xl hover:text-[#1FA45B]">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium bg-slate-100">
              <h1 className="font-semibold text-sm bg-slate-100 flex items-center gap-3 z-10">
                <span className="bg-slate-200 p-2 rounded-full">
                  <Image
                    src={generalIcon}
                    alt="icon"
                    className="bg-transparent"
                  />
                </span>
                General Settings
              </h1>
            </div>
            <div className="collapse-content bg-white">
              <div className="bg-white mt-4 space-y-2">
                <div className="bg-transparent flex items-center justify-between w-full">
                  <p className="text-sm bg-transparent">Show Arabic</p>
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox checkbox-warning"
                  />
                </div>
                <div className="bg-transparent flex items-center justify-between w-full">
                  <p className="text-sm bg-transparent">Show Translation</p>
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox checkbox-warning"
                  />
                </div>
                <div className="bg-transparent flex items-center justify-between w-full">
                  <p className="text-sm bg-transparent">Show Transliteration</p>
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox checkbox-warning"
                  />
                </div>
                <div className="bg-transparent flex items-center justify-between w-full">
                  <p className="text-sm bg-transparent">Show Reference</p>
                  <input
                    type="checkbox"
                    checked="checked"
                    className="checkbox checkbox-warning"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border rounded-xl hover:text-[#1FA45B]">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium bg-slate-100">
              <h1 className="font-semibold text-sm bg-slate-100 flex items-center gap-3 z-10">
                <span className="bg-slate-200 p-2 rounded-full">
                  <Image src={fontIcon} alt="icon" className="bg-transparent" />
                </span>
                Font Settings
              </h1>
            </div>
            <div className="collapse-content bg-white">
              <div className="flex justify-evenly bg-white mt-4">
               
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border rounded-xl hover:text-[#1FA45B]">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium bg-slate-100">
              <h1 className="font-semibold text-sm bg-slate-100 flex items-center gap-3 z-10">
                <span className="bg-slate-200 p-2 rounded-full">
                  <Image src={fontIcon} alt="icon" className="bg-transparent" />
                </span>
                Appearance
              </h1>
            </div>
            <div className="collapse-content bg-white">
              <div className="flex justify-between items-center bg-white mt-4">
                <p className="bg-transparent">Night Mode</p>
                <input type="checkbox" className="toggle toggle-warning"  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
