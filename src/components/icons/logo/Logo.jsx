import React from "react";
import cn from "utils/cn";

const Logo = ({ className }) => {
  return (
    <img
      className={cn("w-[203px] h-[100px]", className)}
      src="logo.png"
      alt="logo"
    />
  );
};

export default Logo;
