import React from 'react';
import PropTypes from 'prop-types';

import studentShape from '../../helpers/props/studentShape';
import GraveStone from '../GraveStone/GraveStone';

import './Graveyard.scss';

class Graveyard extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { dearlyBeloved } = this.props;

    const studentCards = dearlyBeloved.map((student) => (
      <GraveStone key={student.id} student={student} />
    ));

    return (
      <div className="Graveyard__studentStones">
        { studentCards }
      </div>
    );
  }
}

export default Graveyard;
