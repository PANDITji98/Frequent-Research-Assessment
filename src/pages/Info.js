import React from "react";
import { useLocation } from "react-router-dom";

const Info = () => {
  let location = useLocation();
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 h-[100vh]">
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm min-w-[57rem]">
          <div
            className="space-y-6 backdrop-blur-[14px] bg-[rgba(255,255,255,0.2)] p-[21px] rounded-[10px] flex items-center justify-center flex-col"
            action="#"
            method="POST"
          >
            <div>
              <div className="flex text-sm font-medium leading-6 text-gray-900 text-2xl">
                Hi there,{" "}
                <p className="text-[#ec3e8c] ml-[5px] mr-[5px]">
                  {location.state.firstName} {location.state.lastName}
                </p>
              </div>
            </div>
            <div>
              <div className="flex text-sm font-medium leading-6 text-gray-900 text-2xl">
                You registered with email{" "}
                <p className="text-[#ec3e8c] ml-[5px] mr-[5px]">{location.state.email}</p>
              </div>
            </div>
            <div>
              <div className="flex text-sm font-medium leading-6 text-gray-900 text-2xl">
                You are from
                <p className="text-[#ec3e8c] ml-[5px] mr-[5px]">
                  {location.state.country} ,{location.state.state} ,
                  {location.state.city}
                </p>
              </div>
            </div>
            <div>
              <div className="flex text-sm font-medium leading-6 text-gray-900 text-2xl">
                As you were born{" "}
                <p className="text-[#ec3e8c] ml-[5px] mr-[5px]">{location.state.dateOfBirth}</p>,
                you are <p className="text-[#ec3e8c] ml-[5px] mr-[5px]">{location.state.age}</p>{" "}
                years old
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
