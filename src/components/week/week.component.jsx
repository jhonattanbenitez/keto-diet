import React from "react";
//import {Route} from 'react-router-dom'
import "./week.styles.scss";

const  Week = (props) => {
   console.log(props.day)
    return (
      <div className="card-container">
        <h1>{props.day.day}</h1>
        
        <img className="img-size" alt="day" src={props.day.img_url}></img>
        <a href="http://localhost:3000/diet">Ver Recetas</a>
        
      </div>
    );
  
}

export default Week;
