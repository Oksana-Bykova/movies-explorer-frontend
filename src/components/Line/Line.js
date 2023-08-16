import React from "react";
import line from "../../images/text__COLOR_stroke-landing.svg";
import "./Line.css";

function Line() {
  return(
    <div className="line">
    <img className="line__image" src={line} alt="Линия подчеркивания" />
    </div>
  ) 
}

export { Line };
