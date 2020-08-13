import React from "react";
import "./week.styles.scss";

const  Week = (props) => {
   console.log(props.day)
    return (
      <div className="card-container">
        <h1>{props.day.day}</h1>
        <img className="img-size" alt="day" src={props.day.img_url}></img>
      </div>
    );
  
}

export default Week;
