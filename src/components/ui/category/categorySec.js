"use client";
import useAxios from "@/utils/useAxios";
import React, { useEffect, useState } from "react";

const categorySec = () => {
  const [category, setCategory] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    axios.get("/category").then((res) => setCategory(res.data));
  }, []);

  console.log(category);

  return (
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
    </div>
  );
};

export default categorySec;
