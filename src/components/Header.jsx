import React from "react";

const Header = () => {
  return (
    <div className="h-1/6 flex flex-row gap-10 p-5 items-center ">
      <div className="h-[75px] w-[75px]">
        <img src="./smily.png" alt="logo" />
      </div>
      <div className="text-xl font-bold">Just For Fun</div>
    </div>
  );
};

export default Header;
