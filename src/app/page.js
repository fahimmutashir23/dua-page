"use client";
import useAxios from "@/utils/useAxios";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import allahCal from "@/assets/Icon/allah.png";
// import ReactAudioPlayer from "react-audio-player";
import audioIcon from "@/assets/Icon/audioIcon.png";
import copy from "@/assets/Icon/Frame.png";
import report from "@/assets/Icon/report.png";
import share from "@/assets/Icon/share.png";
import memorize from "@/assets/Icon/Frame1.png";
import bookmark from "@/assets/Icon/Bookmark1.png";

const HomePage = () => {
  const [categories, setCategory] = useState([]);
  const [subCat, setSubCat] = useState([]);
  const [duas, setDuas] = useState([]);
  const [isPlaying, setPlaying] = useState(false);
  const [catId, setCatId] = useState(1);
  const [subCatLength, setSubCatLength] = useState(null);
  const [subCatLengthOfCat, setSubCatLengthOfCat] = useState(null);
  const [duaLength, setDuaCatLength] = useState(null);
  const [duaLengthOfCat, setDuaLengthOfCat] = useState({});
  const axios = useAxios();
  const audioRef = useRef(null);

  useEffect(() => {
    axios.get("/numOfDua").then((res) => {
      setDuaCatLength(res.data);
    });
    axios.get("/numOfSubCat").then((res) => {
      setSubCatLength(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("/category").then((res) => setCategory(res.data));

    axios.get(`/subCategory/${catId}`).then((res) => {
      setDuas(res.data.dua);
    });
  }, [catId]);

  useEffect(() => {
    const calculatedDuaLength = categories.reduce((acc, category) => {
      const length = duaLength.filter(
        (dua) => dua.cat_id === category.cat_id
      ).length;
      return { ...acc, [category.cat_id]: length };
    }, {});

    setDuaLengthOfCat(calculatedDuaLength);
  }, [categories, duaLength]);

  useEffect(() => {
    const calculatedSubCatLength = categories.reduce((acc, category) => {
      const length = subCatLength.filter(
        (subCat) => subCat.cat_id === category.cat_id
      ).length;
      return { ...acc, [category.cat_id]: length };
    }, {});

    setSubCatLengthOfCat(calculatedSubCatLength);
  }, [categories, subCatLength]);

  const handleSetCatId = (id) => {
    setCatId(id)
    setSubCat([])
    axios.get(`/subCategory/${id}`).then((res) => {
      setSubCat(res.data.subCategory);
    });
  }


  const handleGetSubCatId = (id) => {
    const element = document.getElementById(`subcat-${id}`);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePlay = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setPlaying(!isPlaying);
  };


  return (
    <div className="flex gap-6 mt-[80px]">
      <div className="w-1/3 rounded-lg overflow-hidden bg-white mb-2">
        <h1 className="bg-[#1FA45B] text-base font-semibold text-white text-center py-3">
          Categories
        </h1>
        <div className="p-3 bg-white">
          <form>
            <div class="relative">
              <svg
                class="w-5 h-5 text-gray-500 absolute left-4 top-2"
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
              <input
                type="search"
                className="block w-full p-2 ps-12 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Categories"
                required
              />
            </div>
          </form>
        </div>
        <div className="bg-white space-y-3 h-[calc(100vh-198px)] overflow-y-scroll">
          {categories.map((category) => (
            <div
              key={category.cat_id}
              onClick={() => handleSetCatId(category.cat_id)}
              className="join join-vertical w-full bg-white"
            >
              <div className="collapse collapse-arrow join-item hover:bg-slate-200">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium bg-white hover:bg-slate-200 text-[#373737]">
                  <div className="flex justify-between bg-transparent">
                    <h1 className="bg-white hover:bg-slate-200">
                      {category.cat_name_en}
                    </h1>
                    <h3 className="bg-transparent flex flex-col font-bold">
                      {duaLengthOfCat[category.cat_id]}
                    </h3>
                  </div>
                  <h3 className="bg-transparent text-sm text-[#7E7E7E] flex justify-between">
                  Subcategory: {subCatLengthOfCat[category.cat_id]}
                  <span className="text-[#7E7E7E] font-normal text-sm bg-transparent">Dua</span>
                  </h3>
                </div>
                <div className="collapse-content bg-white">
                  <ul className="space-y-[1px] border-l-2 border-green-600 border-dotted bg-white">
                    {subCat.map((cat) => (
                      <li
                        key={cat.cat_id}
                        onClick={() => handleGetSubCatId(cat.subcat_id)}
                        className="hover:cursor-pointer ml-2 bg-white -mt-5"
                      >
                        <h1 className="bg-white">
                          <span className="text-5xl -ml-[15px] bg-transparent text-[#1FA45B]">
                            .
                          </span>
                          <span className="font-bold text-sm ml-4 bg-white">
                            {cat.subcat_name_en}
                          </span>
                        </h1>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* dua card start here */}

      <div className="flex-1 h-[calc(100vh-82px)] overflow-y-auto">
        <div className="space-y-2">
          {duas.map((dua) => (
            <div
              className="bg-white rounded-xl px-5 py-2"
              id={`subcat-${dua.subcat_id}`}
            >
              <div className="flex items-center gap-2 bg-white mb-3">
                <Image src={allahCal} alt="icon" className="bg-white"></Image>
                <h1 className="bg-white text-[#1FA45B] font-semibold">
                  {dua.dua_name_en}
                </h1>
              </div>
              <p className="bg-white text-[#393939]">{dua.top_en}</p>

              <p className="bg-white text-[#393939] text-right my-8 text-xl font-semibold">
                {dua.dua_arabic}
              </p>
              <p className="bg-white text-[#393939]">
                {" "}
                {dua.transliteration_en && (
                  <span className="font-bold bg-white">Transliteration:</span>
                )}{" "}
                <span className="bg-white italic">
                  {dua.transliteration_en}
                </span>
              </p>
              <p className="bg-white text-[#393939] my-8">
                {" "}
                {dua.translation_en && (
                  <span className="font-bold bg-white">Translation:</span>
                )}{" "}
                {dua.translation_en}
              </p>
              <h1 className="bg-white text-[#393939] font-semibold">
                <h3 className="text-[#1FA45B] font-medium  bg-white">
                  Reference
                </h3>
                {dua.refference_en}
              </h1>
              {dua.audio && (
                <div className="bg-white flex">
                  {/* <ReactAudioPlayer 
                src={dua.audio}
                autoPlay ={false}
                controls
                style={{color: 'white'}}
                /> */}
                  <div className="bg-white flex-1">
                    <button onClick={handlePlay}>
                      <Image src={audioIcon} className="bg-white" />
                    </button>
                    <audio ref={audioRef} src={dua.audio}></audio>
                  </div>
                  <div className="bg-white flex justify-between w-1/3 items-center">
                    <button>
                      <Image src={copy} alt="icon" className="bg-white" />
                    </button>
                    <button>
                      <Image src={bookmark} alt="icon" className="bg-white" />
                    </button>
                    <button>
                      <Image src={memorize} alt="icon" className="bg-white" />
                    </button>
                    <button>
                      <Image src={share} alt="icon" className="bg-white" />
                    </button>
                    <button>
                      <Image src={report} alt="icon" className="bg-white" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
