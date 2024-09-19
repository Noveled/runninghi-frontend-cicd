import React from "react";

import { Link } from "react-router-dom";
import default_img from "../../assets/images/default_images.png";

const Item = ({ item }) => {
  // console.log('item', item);
  return (
    <div className="item w-full p-3 overflow-x-auto">
      <div className="rounded-lg p-3 border border-purple-400 w-full text-gray-700 shadow item-gradiant">
        <Link to={"/detail"} state={{ item: item }}>
          <div className="flex flex-col gap-y-1">
            <div className="h-[155px]">
              <img
                src={item.img_url || default_img}
                alt="course_img"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex truncate gap-2 items-baseline">
              <h5 className="truncate font-semibold">{item.course_name}</h5>
              <div className="text-xs text-[#888888] bottom-0">{item.city}</div>
            </div>
            <div className="flex gap-x-2 text-xs text-gray-700">
              <span className="text-xs font-semibold">{item.user_name}</span>
              <span className="text-[#cdcdcd]">/</span>
              <span className="text-red-500 font-semibold">{item.distance}km</span>
            </div>
            <p className="truncate text-gray-700">{item.content}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Item;
