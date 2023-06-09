import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div className="flex justify-center items-center w-full h-[100vh]">
      <div class="custom-loader"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Spinner;
