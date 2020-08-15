import React from "react";
import WeekContainer from "../../components/WeekContainer/week-container.component";
import days from '../../days.json'

class HomePage extends React.Component {
  constructor() {
    super();
      this.state = {
        week:[]
    };
    }
    componentDidMount() {
        this.setState({ week: days });
      }
  render() {
    return (
      <div>
            <h1>Keto Diet</h1>
            <WeekContainer week={this.state.week} />
       </div>
    );
  }
}

export default HomePage;
