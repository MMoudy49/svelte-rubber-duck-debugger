import { writable } from 'svelte/store';

const defaultResponses = [
  {
    id: 1,
    desc: 'Have you tried saving the file?',
  },
  {
    id: 2,
    desc: 'Is the file formatted?',
  },
  {
    id: 3,
    desc: 'Have you tried turning it off and on again?',
  },
  {
    id: 4,
    desc: 'Are you missing a semicolon?',
  },
  {
    id: 5,
    desc: 'Did you import the component?',
  },
  {
    id: 6,
    desc: 'Have you taken a short break to get water or go outside?',
  },
];

export const responses = writable(defaultResponses);

export const currentResponse = writable(0);
