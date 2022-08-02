import React from "react";
import { RiDoubleQuotesR } from "react-icons/ri";
import { TiArrowRightOutline, TiArrowLeftOutline } from "react-icons/ti";

const Review = ({ name, type, comment, url, next, prev }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 max-w-[500px] relative transition-all duration-500 ease-in-out">
      <div>
        <img
          src={url}
          alt={name}
          className="w-[150px] h-[150px] rounded-full object-cover drop-shadow-2xl"
        />
      </div>
      <h1 className="text-[#ff7f50] text-2xl font-extrabold tracking-wider uppercase">
        {name}
      </h1>
      <h1 className="font-semibold capitalize text-md text-secondary">
        {type}
      </h1>
      <p className="text-sm text-center text-gray-400 ">{comment}</p>
      <div className="text-5xl sm:text-9xl text-[#ff7f50]">
        <RiDoubleQuotesR />
      </div>
      <div className="absolute flex items-center justify-between w-full top-16 sm:top-40">
        <button
          className="flex w-[40px] h-[40px] rounded-full bg-[#ff7f50] text-lg justify-center items-center text-white"
          onClick={next}
        >
          <TiArrowLeftOutline />
        </button>
        <button
          className="flex w-[40px] h-[40px] rounded-full bg-[#ff7f50] text-lg justify-center items-center text-white"
          onClick={prev}
        >
          <TiArrowRightOutline />
        </button>
      </div>
    </div>
  );
};

export default Review;
