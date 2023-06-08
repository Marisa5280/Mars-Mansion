// DOM MANIPULATION //

// IMPORTS //

// import {  } from './ '

// QUERY SELECTORS //

const allBookedRooms = document.querySelector('.booked__rooms');

// MODIFIERS //
const show = (names) => {
  names.forEach((name) => name.classList.remove('class--hidden'));
};

const hide = (names) => {
  names.forEach((name) => name.classList.add('class--hidden'));
};