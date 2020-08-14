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
        <div className="App__backgroundWrap">
          <div className="App__bubble bubble--size--large"></div>
          <div className="App__bubble bubble--size--medium"></div>
          <div className="App__bubble bubble--size--small"></div>
        </div>
        <img className="App__sharkImage" src="https://i.ibb.co/nBHbfx9/b-GXc-XEn-white-shark-clipart.png" alt="b-GXc-XEn-white-shark-clipart" border="0"/>
        <SharkTank livingStudents={livingStudents} followTheLight={this.followTheLight}/>
        <Graveyard dearlyBeloved={dearlyBeloved}/>
      </div>
    );
  }
}

export default App;
