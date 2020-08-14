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
      <div>
        <button className="btn btn-danger" onClick={this.attackEvent}>SHARK ATTACK</button>
        { studentCards }
      </div>
    );
  }
}

export default SharkTank;
