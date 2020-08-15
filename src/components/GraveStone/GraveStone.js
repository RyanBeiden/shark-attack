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
      <div className="GraveStone__studentStones">
        <h2>Here Lies</h2>
        <div className="GraveStone__separator"></div>
        <h4>{student.firstName} {student.lastName}</h4>
        <i className="fas fa-skull-crossbones"></i>
      </div>
    );
  }
}

export default GraveStone;
