import React, { useEffect, useState } from "react";
import Item from "./Item";
import ItemLoadingSkeleton from "./ItemLoadingSkeleton";

import { useDispatch, useSelector } from "react-redux";

import { fetchGetUserJoinCourseData } from "../../redux/slices/apiSlice";
import { fetchGetUsersData } from "../../redux/slices/usersSlice";

import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import defaultImgUrl from "../../assets/images/default_images.png";

const Like = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.userInfoState.userInfo.user_id);
  const myCourse = useSelector((state) => state.api.myCourse);

  useEffect(() => {
    if (!userId) {
      return;
    }

    dispatch(fetchGetUsersData());
    const fetchGetCourse = async () => {
      try {
        await dispatch(fetchGetUserJoinCourseData(userId)).unwrap();
        setLoading(true);
      } catch (error) {
        console.log("Failed to fetch items:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchGetCourse();
  }, [dispatch, userId]);

  return (
    <div className="w-full my-course bg-violet-50 p-4">
      <img
          className="w-full h-[240px] border border-gray-[#888888] rounded-md overflow-hidden object-fill"
          src={defaultImgUrl}
          alt="Sorry..."
          img="img"
        />
      <p className="pt-2">즐겨찾기 기능은 구현중에 있습니다.</p>
    </div>
  );
};

export default Like;
