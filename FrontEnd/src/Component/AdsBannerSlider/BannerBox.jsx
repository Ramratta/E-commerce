import React from "react";
import { Link } from "react-router-dom";

const BannerBox = (Props) => {
  return (
    <div className=" overflow-hidden rounded-lg group">
      <Link to={Props.link}>
        <img
          src={Props.Image}
          alt="Banner"
          className="group-hover:scale-105 group-hover:rotate-2 "
        />
      </Link>
    </div>
  );
};

export default BannerBox;
