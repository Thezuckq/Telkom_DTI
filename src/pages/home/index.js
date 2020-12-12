import React from "react";
import "./style.css";
import { bg1, bg2, image2, imageExample } from "../../assets";

const Home = () => {
  return (
    <div className="pageHome-wrapper">
      <div className="cont">
        <h1 className="centered">Welcome To My Page</h1>
        <img className="pageHome-img1" alt="background1" src={bg1} />
        <img className="pageHome-img2" alt="background2" src={bg2} />
      </div>
    </div>
  );
};

export default Home;
