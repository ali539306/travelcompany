import Image from "next/image";
import React from "react";
import { FaHeart } from "react-icons/fa6";

type props = {
  hotelsdata: {
    id: number;
    image: string;
    name: string;
    location: string;
    rating: number;
    reviews: string;
    price: string;
  };
};

const HotelCard = ({ hotelsdata }: props) => {
  return (
    <div>
      <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden ">
        {/* Add to Fav Button */}
        <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-black flex items-center justify-center flex-col">
          <FaHeart className="w-3 h-3" />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>
        {/* Image */}
        <Image
          src={hotelsdata.image}
          alt={hotelsdata.name}
          width={500}
          height={500}
          className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110 "
        />
      </div>
      {/* Content */}
      <div className="px-2 py-4">
        <h1 className="text-lg font-semibold text-blue-950 hover:text-black transition-all duration-300 truncate">
          {hotelsdata.name}
        </h1>
        <p className="text-sm text-gray-500 mt-1">{hotelsdata.location}</p>
        <div className="flex justify-between items-center mt-3 ">
          <div className="flex gap-1 items-center">
            <div className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md">
              {hotelsdata.rating}
            </div>
            <p className="text-sm text-gray-700">Exceptional</p>
          </div>
          <p className="text-sm font-semibold m-0 text-black">
            {hotelsdata.reviews} reviews
          </p>
        </div>
      </div>
      {/* Price */}
      <div className="px-4 pb-4">
        <p className="text-sm text-gray-600">
          Starting from
          <span className="font-bold text-blue-600">
            {" "}
            US${hotelsdata.price}
          </span>
        </p>
      </div>
    </div>
  );
};

export default HotelCard;
