import { band } from './index';

let iHateMondays:band = {
  name: 'I Hate Mondays',
  desc: 'The coolest band that ever lived',
  members: [
    'Radu',
    'Gion',
    'Andrei',
    'Vladimir',
    'Mirela',
  ]
};

let herFunkySubjects:band = {
  name: 'Her Funky Subjects',
  desc: 'interesting percutionist',
  members: [
    'Radu',
    'Teo',
    'Sergiu',
    'Sorina',
  ]
};

let pinholes:band = {
  name: 'Pinholes',
  desc: 'alternative-indie something in romanian',
  members: [
    'Vladimir',
    'Sergiu',
    'Vlad',
    'Paul',
  ]
};


export const localBands:band[] = [
  iHateMondays,
  herFunkySubjects,
  pinholes
];
