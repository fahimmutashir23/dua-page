"use client";
import useAxios from "@/utils/useAxios";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import allahCal from "@/assets/Icon/allah.png";
// import ReactAudioPlayer from "react-audio-player";
import audioIcon from "@/assets/Icon/audioIcon.png";
import copy from "@/assets/Icon/Frame.png"
import report from "@/assets/Icon/report.png"
import share from "@/assets/Icon/share.png"
import memorize from "@/assets/Icon/Frame1.png"
import bookmark from "@/assets/Icon/Bookmark1.png"

const HomePage = () => {
  const [categories, setCategory] = useState([]);
  const [subCat, setSubCat] = useState([]);
  const [duas, setDuas] = useState([]);
  const [isPlaying, setPlaying] = useState(false);
  const axios = useAxios();
  const audioRef = useRef(null);



  useEffect(() => {
    axios.get("/category").then((res) => setCategory(res.data));
  }, []);

  const handleGetId = (id) => {
    axios.get(`/subCategory/${id}`).then((res) => {
      setSubCat(res.data.subCategory)
      setDuas(res.data.dua)
    });
  };

  const handleGetSubCatId = (id) => {
    axios.get(`dua/${id}`).then((res) => setDuas(res.data));
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
    <div className="flex gap-6 mt-[80px] min-h-screen">
      <div className="w-1/3 rounded-lg bg-white overflow-hidden">
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
        <div className="bg-white space-y-3">
          {categories.map((category) => (
            <div
              onClick={() => handleGetId(category.cat_id)}
              className="join join-vertical w-full bg-white"
            >
              <div className="collapse collapse-arrow join-item">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title text-xl font-medium bg-white text-[#373737]">

                  <h1 className="bg-white">{category.cat_name_en}</h1>
                  <h3>{}</h3>
                </div>
                <div className="collapse-content">
                  <ul className="space-y-3">
                    {subCat.map((cat) => (
                      <li
                        onClick={() => handleGetSubCatId(cat.subcat_id)}
                        className="hover:cursor-pointer"
                      >
                        {cat.subcat_name_en}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <div className="space-y-2">
          {duas.map((dua) => (
            <div className="bg-white rounded-xl px-5 py-2">
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
                      <button><Image src={copy} alt="icon" className="bg-white" /></button>
                      <button><Image src={bookmark} alt="icon" className="bg-white" /></button>
                      <button><Image src={memorize} alt="icon" className="bg-white" /></button>
                      <button><Image src={share} alt="icon" className="bg-white" /></button>
                      <button><Image src={report} alt="icon" className="bg-white" /></button>
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
