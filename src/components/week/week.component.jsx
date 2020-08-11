import React from "react";
import "./week.styles.scss";

class Week extends React.Component {
  render() {
    return <div className="card">{this.props.value}</div>;
  }
}

export default Week;
