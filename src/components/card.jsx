import React from "react";
import PropTypes from "prop-types"; // ES6

const Card = ({title}) => {
  return (
    <div className={"card"}>
      <div className="title">
        {title}
      </div>
      <div>
        <div className = 'lineDraw' style={{width:"68.3%"}}></div>
        <div className = 'lineDraw' style={{width:"87.3%"}}></div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired  
};

export default Card;
