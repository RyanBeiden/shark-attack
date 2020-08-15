import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/props/studentShape';
import LiveStudent from '../LiveStudent/LiveStudent';

import './SharkTank.scss';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
    followTheLight: PropTypes.func,
  }

  attackEvent = (e) => {
    e.preventDefault();
    const { livingStudents, followTheLight } = this.props;
    const randomId = Math.floor(Math.random() * livingStudents.length);

    followTheLight(livingStudents[randomId].id);
  };

  render() {
    const { livingStudents } = this.props;

    const studentCards = livingStudents.map((student) => (
      <LiveStudent key={student.id} student={student} />
    ));

    return (
      <div className="SharkTank">
        <div className="SharkTank__attack">
          <button className="btn btn-danger SharkTank__button" onClick={this.attackEvent}>SHARK ATTACK</button>
        </div>
        <div className="SharkTank__studentCards">
          { studentCards }
        </div>
      </div>
    );
  }
}

export default SharkTank;
