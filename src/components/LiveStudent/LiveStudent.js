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
      <div id={student.id} className="LiveStudent__studentCards">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513.97 234.01"><path fill="#0b1090" className="cls-1"
          d="M939.81,391.21c-5.22-19.16-15.1-37-35-52-11.11-11.78-26.42-22.25-44-32a231.13,231.13,0,0,0-66-22l-30-3a176.48,176.48,
          0,0,0-46-15c-20.93-1.64-40.6-.66-58,5l-18,6c9,5.84,25.56,17.57,22,17-52,18-95,43-119,65-54-21-103-61-115-58s45,80,39,83c7,
          10-55,77-42,70,19,6,115-41,124-45,45,38,114,58,120,60s-20,18-25,21,41.21,6.81,65,10,71.76-20.27,72-23c0,0,68-9,73-21,4-7-9-8-23-23-12-8,
          31,11,42,12C907.81,446.21,942.76,415.44,939.81,391.21Z" transform="translate(-426.01 -266.49)"/>
          <text className="LiveStudent__studentNames" x="200" y="95" fill="whitesmoke">{student.firstName}</text>
          <text className="LiveStudent__studentNames" x="250" y="145" fill="whitesmoke">{student.lastName}</text>
        </svg>
      </div>
    );
  }
}

export default LiveStudent;
