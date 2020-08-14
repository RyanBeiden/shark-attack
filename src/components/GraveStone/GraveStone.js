import React from 'react';

import studentShape from '../../helpers/props/studentShape';
import './GraveStone.scss';

class GraveStone extends React.Component {
  static propType = {
    students: studentShape.studentShape,
  };

  render() {
    const { student } = this.props;

    return (
      <p>{student.firstName} {student.lastName}</p>
    );
  }
}

export default GraveStone;
