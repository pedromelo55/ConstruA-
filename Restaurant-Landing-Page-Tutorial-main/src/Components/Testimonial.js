import React from "react";
import ProfilePic from "../Assets/equipe.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Quem</p>
        <h1 className="primary-heading">Nossa equipe</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Líder da equipe
        </p>
        <h2>Guilherme Abraão</h2>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Analista de Inteligência Artificial
        </p>
        <h2>Douglas Bessa</h2>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Desenvolvedor Back-end
        </p>
        <h2>Guilherme Cruz</h2>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Desenvolvedor Back-end
        </p>
        <h2>Luís Rosa</h2>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Desenvolvedor Front-end
        </p>
        <h2>Pedro Melo</h2>
      </div>
    </div>
  );
};

export default Testimonial;
