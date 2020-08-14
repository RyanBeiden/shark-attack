import React from 'react';
import './App.scss';

import studentsData from '../helpers/data/studentsData';
import Graveyard from '../components/Graveyard/Graveyard';
import SharkTank from '../components/SharkTank/SharkTank';

class App extends React.Component {
  state = {
    livingStudents: [],
    dearlyBeloved: [],
  }

  getAllStudents = () => {
    const livingStudents = studentsData.livingStudents();
    const dearlyBeloved = studentsData.dearlyBeloved();
    this.setState({ livingStudents, dearlyBeloved });
  }

  componentDidMount() {
    this.getAllStudents();
  }

  followTheLight = (studentId) => {
    studentsData.followTheLight(studentId);
    this.getAllStudents();
  }

  render() {
    const { livingStudents, dearlyBeloved } = this.state;

    return (
      <div className="App">
        <SharkTank livingStudents={livingStudents} followTheLight={this.followTheLight}/>
        <div className="separator"></div>
        <Graveyard dearlyBeloved={dearlyBeloved}/>
      </div>
    );
  }
}

export default App;
