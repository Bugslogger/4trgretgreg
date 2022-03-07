import React from "react";
import { Cake } from "../Comaponent/Cake";
import "../Comaponent/flying_letters/style.css";
import TextEffectOne from "../Comaponent/textEffect/TextEffectOne";
import "./pageone.css";

export const PageOne = () => {
  return (
    <div className="d-grid jic w-100">
      <div className="d-grid pic w-100 p-fixed">
        <TextEffectOne />
      </div>
      <Cake />
    </div>
  );
};
