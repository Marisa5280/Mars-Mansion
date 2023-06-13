// DOM MANIPULATION //

// IMPORTS //
import { fetchBookings, fetchCustomers, fetchRooms } from "../apiCalls";
import { sampleBookingsData } from "../sampleData/sampleBookings";
import { sampleCustomers } from "../sampleData/sampleCustomers";
import { sampleRooms } from "../sampleData/sampleRooms";
import {getBookingsByCustomer} from "../functions/customerBookings"

// QUERY SELECTORS //
console.log('domUpdates');
const allBookedRooms = document.querySelector('.booked__rooms');
const usernameInput = document.querySelector('.user__username');
const passwordInput = document.querySelector('.user__password');
const dateSelection = document.querySelector('.booking__date');
const logInButton = document.querySelector('.user__logIn-Button');
const userBookingsContainer = document.querySelector('.user__currentBookings-container');
// const 
// console.log('userbookingsContainer', userBookingsContainer);
// MODIFIERS //
const customerBookings = (id, bookings) => {
  const userBookings = getBookingsByCustomer(id, bookings);
  console.log("userBookings", userBookings);
};

console.log(customerBookings(2, sampleBookingsData));

const show = (names) => {
  names.forEach((name) => name.classList.remove('class--hidden'));
};

const hide = (names) => {
  names.forEach((name) => name.classList.add('class--hidden'));
};

export {
  customerBookings
}