const students = [
  {
    id: 1,
    firstName: 'Jeremiah',
    lastName: 'Vasquez',
    isDead: false,
  },
  {
    id: 2,
    firstName: 'Austin',
    lastName: 'Phy',
    isDead: false,
  },
  {
    id: 3,
    firstName: 'Brooke',
    lastName: 'Nemchak',
    isDead: false,
  },
  {
    id: 4,
    firstName: 'Geno',
    lastName: 'McNew',
    isDead: false,
  },
  {
    id: 5,
    firstName: 'Gwynne',
    lastName: 'Meeks',
    isDead: false,
  },
  {
    id: 6,
    firstName: 'Jeanine',
    lastName: 'Beckle',
    isDead: false,
  },
  {
    id: 7,
    firstName: 'Jim',
    lastName: 'Browning',
    isDead: false,
  },
  {
    id: 8,
    firstName: 'Jonathan',
    lastName: 'Shearon',
    isDead: false,
  },
  {
    id: 9,
    firstName: 'Joshua',
    lastName: 'Medlen',
    isDead: false,
  },
  {
    id: 10,
    firstName: 'Kamiran',
    lastName: 'Ibrahim',
    isDead: false,
  },
  {
    id: 11,
    firstName: 'Mark',
    lastName: 'Young',
    isDead: false,
  },
  {
    id: 12,
    firstName: 'Matt',
    lastName: 'Logan',
    isDead: false,
  },
  {
    id: 13,
    firstName: 'Michael',
    lastName: 'Dotson',
    isDead: false,
  },
  {
    id: 14,
    firstName: 'Nate',
    lastName: 'Owens',
    isDead: false,
  },
  {
    id: 15,
    firstName: 'Nick',
    lastName: 'Walters',
    isDead: false,
  },
  {
    id: 16,
    firstName: 'Nikhil',
    lastName: 'Gaikwad',
    isDead: false,
  },
  {
    id: 17,
    firstName: 'Ola',
    lastName: 'Oladinni',
    isDead: false,
  },
  {
    id: 18,
    firstName: 'Pete',
    lastName: 'Stewart',
    isDead: false,
  },
  {
    id: 19,
    firstName: 'Phonesalo',
    lastName: 'Sihanorak',
    isDead: false,
  },
  {
    id: 20,
    firstName: 'Ryan',
    lastName: 'Beiden',
    isDead: false,
  },
  {
    id: 21,
    firstName: 'William',
    lastName: 'Campbell',
    isDead: false,
  },
];

const livingStudents = () => {
  const livingStudentsArr = [];

  students.forEach((response) => {
    if (response.isDead === false) {
      livingStudents.push(response);
    }
  });
  return livingStudentsArr;
};

const dearlyBeloved = () => {
  const dearlyBelovedArr = [];

  students.forEach((response) => {
    if (response.isDead === true) {
      livingStudents.push(response);
    }
  });
  return dearlyBelovedArr;
};

const followTheLight = (studentId) => {
  students.forEach((response) => {
    if (response.id === studentId) {
      response.isDead = true;
    }
  });
};

export default {
  livingStudents,
  dearlyBeloved,
  followTheLight,
};
