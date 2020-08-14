import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import studentsData from '../helpers/data/studentsData';
import Graveyard from '../components/Graveyard/Graveyard';
import SharkTank from '../components/SharkTank/SharkTank';

import './App.scss';

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
      <Router>
        <div className="App">
          <Link to="/graveyard"><button className="btn btn-danger App__graveyard" onClick={this.displayGraveyardEvent}>GRAVEYARD</button></Link>
          <div className="App__backgroundWrap">
            <div className="App__bubble bubble--size--large"></div>
            <div className="App__bubble bubble--size--medium"></div>
            <div className="App__bubble bubble--size--small"></div>
            <img className="App__sharkImage" src="https://i.ibb.co/m60crm5/shark-fin.png" alt="shark-fin" border="0"/>
          </div>
          <SharkTank livingStudents={livingStudents} followTheLight={this.followTheLight}/>
          <Switch>
            <Route path="/graveyard">
              <Graveyard dearlyBeloved={dearlyBeloved} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
