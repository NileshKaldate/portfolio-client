import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Button = ({ label, className, loading }) => {
  const padding = "px-8 py-2   sm:px-14 py-3";
  const fontSize = "text-sm sm:text-lg";
  return (
    <button
      className={`bg-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl  rounded-md font-bold text-white z-10 ${padding} ${fontSize} md:transition md:ease-in-out delay-50  md:hover:-translate-y-1 md:hover:scale-110 duration-100 ${className} text-center`}
      disabled={loading}
    >
      {loading ? (
        <ThreeDots
          height="24"
          width="65"
          radius="2"
          color="white"
          ariaLabel="three-dots-loading"
          wrapperStyle={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
