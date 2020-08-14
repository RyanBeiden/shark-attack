import React from 'react';

import studentShape from '../../helpers/props/studentShape';

import './LiveStudent.scss';

class LiveStudent extends React.Component {
  static propType = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
      <div className="LiveStudent__studentCards">
        <p>{student.firstName} {student.lastName}</p>
      </div>
    );
  }
}

export default LiveStudent;
