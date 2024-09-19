import React from "react";
import Main from "./Main";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Feather, KeyRound } from 'lucide-react';
import { FaWalking } from "react-icons/fa";

import intro1 from "../assets/images/intro1.png";
// import intro2 from "../assets/images/intro2.png";
import intro3 from "../assets/images/intro3.png";
import intro4 from "../assets/images/intro4.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Intro = () => {
  const authData = useSelector((state) => state.auth.authData);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      {authData ? (
        <Main></Main>
      ) : (
        <div className="flex justify-center h-[100vh] bg-violet-100">
          <div className="relative h-full">
            <div className="h-full overflow-y-hidden  max-w-[390px]">
              <Slider {...settings} className="h-full">
                <div>
                  <img
                    src={intro1}
                    alt="소개페이지 1"
                    className="h-[870px] object-cover"
                  />
                </div>
                {/* <div>
                  <img
                    src={intro2}
                    alt="소개페이지 2"
                    className="h-[870px] object-cover"
                  />
                </div> */}
                <div>
                  <img
                    src={intro3}
                    alt="소개페이지 3"
                    className="h-[870px] object-cover"
                  />
                </div>
                <div>
                  <img
                    src={intro4}
                    alt="소개페이지 4"
                    className="h-[870px] object-cover"
                  />
                </div>
               
                <div className="p-4 h-[100vh]">
                  <div className="flex h-[100vh] flex-col justify-around items-center gap-2">
                    <div className="flex flex-col items-center gap-2">
                      <Feather className="h-[120px] w-[120px] text-[#7c5ecf]" />
                      <div className="flex flex-col items-center gap-[2px]">
                        <span className="text-3xl font-bold">러닝을 <span className="text-[#7c5ecf]">공유</span>하다</span>
                        <span>- Running Hi -</span>
                      </div>
                    </div>
                    <div className="w-4/5 flex flex-col gap-y-4 font-bold">
                      <Link to="/login">
                        <span className="flex gap-2 justify-center w-full py-4 bg-violet-600 rounded-xl">
                          <KeyRound className="text-white" />
                          <span className="text-white">로그인</span>
                        </span>
                      </Link>
                      <Link to="/register">
                        <span className="flex gap-2 justify-center w-full py-4 bg-violet-400 rounded-xl">
                          <KeyRound className="text-white" />
                          <span className="text-white">크루 등록하기</span>
                        </span>
                      </Link>
                      <div className="flex justify-center">
                        <span className="text-sm">문제가 있나요?<a className="text-gray-400"> 고객센터</a></span>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Intro;
