import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import EPIsimagem from "../Assets/epis.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Monitore seu ambiente de trabalho!
          </h1>
          <p className="primary-text">
            Garanta que seus funcionários estejam sendo cuidadosos e usando seus EPIs.
          </p>
          <button className="secondary-button">
            Acesse <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={EPIsimagem} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
