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

  graveyardBackground = () => {
    document.body.style.background = 'whitesmoke';
  }

  sharkTankBackground = () => {
    document.body.style.background = '#00b4ff';
  }

  render() {
    const { livingStudents, dearlyBeloved } = this.state;

    return (
      <Router>
        <div className="App">
          <div className="App__nav">
            <Link to="/graveyard"><button className="btn btn-secondary App__graveyard" onClick={this.graveyardBackground}>GRAVEYARD</button></Link>
            <Link to="/"><button className="btn btn-primary App__liveStudents" onClick={this.sharkTankBackground}>LIVING STUDENTS</button></Link>
          </div>
          <Switch>
            <Route path="/graveyard">
              <Graveyard dearlyBeloved={dearlyBeloved} />
              <svg className="App__graveyardBackground" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#525252" fillOpacity="1"
                d="M0,0L240,32L480,96L720,32L960,256L1200,224L1440,288L1440,320L1200,320L960,320L720,320L480,320L240,
                320L0,320Z"></path>
              </svg>
            </Route>
            <Route path="/">
              <svg className="App__waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1430 319"><path fill="whitesmoke" fillOpacity="1"
                d="M0,160L26.7,154.7C53.3,149,107,139,160,128C213.3,117,267,107,320,106.7C373.3,107,427,117,480,144C533.3,
                171,587,213,640,234.7C693.3,256,747,256,800,229.3C853.3,203,907,149,960,112C1013.3,75,1067,53,1120,64C1173.3,75,
                1227,117,1280,138.7C1333.3,160,1387,160,1413,160L1440,160L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,
                0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,
                0C106.7,0,53,0,27,0L0,0Z"></path>
              </svg>
              <div className="App__backgroundWrap">
                <div className="App__bubble bubble--size--large"></div>
                <div className="App__bubble bubble--size--medium"></div>
                <div className="App__bubble bubble--size--small"></div>
              </div>
              <SharkTank livingStudents={livingStudents} followTheLight={this.followTheLight}/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
