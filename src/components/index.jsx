import React from "react";
import Card from "./card";
import "./style.scss";

const BoxesContainer = () => {
  return (
    <div className="container-grid">
      {
        Array.from({length: 10}, (_, i) => i + 1).map(el => {
          return <Card key={`box_${el}`} title={`CARD ${el}`} />;
        })
      }      
    </div>
  );
};

export default BoxesContainer;