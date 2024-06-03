import React from "react";
import CapaceteFuncionalidade from "../Assets/capacete_funcionalidade.png";
import LERFuncionalidade from "../Assets/ler_funcionalidade.png";
import NotificacaoFuncionalidade from "../Assets/notificacao_funcionalidade.png";

const Work = () => {
  const workInfoData = [
    {
      image: CapaceteFuncionalidade,
      title: "EPIs",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum.",
    },
    {
      image: LERFuncionalidade,
      title: "LER",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et ",
    },
    {
      image: NotificacaoFuncionalidade,
      title: "Notificar",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Funcionalidades</p>
        <h1 className="primary-heading">O que oferecemos</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
