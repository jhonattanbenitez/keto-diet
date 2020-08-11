import React from 'react';
import './App.css' 
import WeekContainer from './components/WeekContainer/week-container.component';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      weekdays: []
    }  
    
    
  }
  render() {
    return (
      <div>
        <h1>Hola</h1>
        <WeekContainer />
      </div>
    )
  }
}

export default App;
