import React from 'react';
import './App.css' 
import WeekContainer from './components/WeekContainer/week-container.component';
import days from './days.json'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      week: []
      
    }; 
    
    
  }
  componentDidMount() {
    this.setState({ week: days })
  }
  render() {
    return (
      <div>
      <WeekContainer week={this.state.week} />
      </div>
    )
  }
}

export default App;
