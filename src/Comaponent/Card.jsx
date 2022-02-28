import React from "react";
import "./card.css";

export const Card = ({style, t1,t2,t3,t4,t5,t6,t7,t8,t9,title}) => {
  return (
    <div style={style} className="card-container mr-5 ml-5 border-1 bs-solid b-color">
      <div style={style} className="w-100 tac card-head">
        Happy <br/> Birthday
      </div>
      <div style={style} className="w-100 pl-5 pr-5 tac card-text">
        {/* everyday with you is special, */}
        {t1}
        <br/>
      {/* but tudat is extra special bcoz */}
      {t2}
        <br/>
        {/* it's your day, my sweetheart.  */}
        {t3}
        <br/>
        {/* with all my love and kisses, */}
        {t4}
        <br/>
        {t5}
        <br/>
        {t6}
        <br/>
        {t7}
        <br/>
        {t8}
        <br/>
        {t9}
        {/* just for you! */}
      </div>
    </div>
  );
};

export const ImageCard = () => {
  return (<div>
    <img src="" alt="" className="w-100"/>
  </div>);
};
