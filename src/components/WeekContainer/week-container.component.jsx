import React from "react";
import "./week-container.styles.scss";
import Week from "../week/week.component";

const WeekContainer = (props) => {
   
  return (
    <div className="card-list">
      {
        props.week.map(day => (
          <Week key={day.id} day={day}/>
        ))
      }
    </div>
  )
}

export default WeekContainer;
