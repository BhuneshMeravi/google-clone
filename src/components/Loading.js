import React from "react";
import { Puff } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="flex justify-center items-center ">
      <Puff
        visible={true}
        height="80"
        width="80"
        color="#00BFFF"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loading;
