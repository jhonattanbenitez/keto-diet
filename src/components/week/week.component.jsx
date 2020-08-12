import React from "react";
import "./week.styles.scss";

const  Week = (props) => {
   console.log(props.day.day)
    return (
      <div className="card-container">
        <h1>{props.day.day}</h1>
      </div>
    );
  
}

export default Week;
