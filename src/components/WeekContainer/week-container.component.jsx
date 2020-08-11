import React from "react";
import "./week-container.styles.scss";
import Week from "../week/week.component";

class WeekContainer extends React.Component {
  render() {
    const week = [
      "Lunes",
      "martes",
      "miercoles",
      "jueves",
      "viernes",
      "sabado",
      "domingo",
    ];
    const days = week.map(day => <Week key={day.toString()} value={day} />)
   
    return <div className="card-flex-wrapper">{days}</div>;
  }
}
export default WeekContainer;
