// DOM MANIPULATION //

// IMPORTS //
// import { fetchBookings, fetchCustomers, fetchRooms } from "./apiCalls";
import { sampleBookingsData } from "./sampleData/sampleBookings";
import { sampleCustomers } from "./sampleData/sampleCustomers";
import { sampleRooms } from "./sampleData/sampleRooms";
import {getBookingsByCustomer, getTotalCost} from "./functions/customerBookings"

// QUERY SELECTORS //
const usernameInput = document.querySelector('.user__username');
const passwordInput = document.querySelector('.user__password');
const dateSelection = document.querySelector('.booking__date');
const logInButton = document.querySelector('.user__logIn-Button');
const userBookingsContainer = document.querySelector('.user__currentBookings-container');
const totalBookingsCost = document.querySelector('.total-cost-value');

// MODIFIERS //
const userBookings = getBookingsByCustomer(1, sampleBookingsData);

const customerBookings = (bookings, rooms) => {
  console.log('bookings', bookings);
  bookings.forEach((booking) => {
    const room = rooms.find((room) => room.number === booking.roomNumber);
    const {roomType, bedSize, numBeds, costPerNight} = room;
    userBookingsContainer.innerHTML+= `<div class="user__booking">
    <p>${booking.date}</p>
    <p>${roomType}</p>
    <p>${bedSize}</p>
    <p>${numBeds}</p>
    <p>${costPerNight}</p>
  </div>`;
  })
};
const {rooms} = sampleRooms;
customerBookings(userBookings, rooms);


totalBookingsCost.innerText= `$${getTotalCost(userBookings, rooms)}`;
          

const show = (names) => {
  names.forEach((name) => name.classList.remove('class--hidden'));
};

const hide = (names) => {
  names.forEach((name) => name.classList.add('class--hidden'));
};

export {
  customerBookings
}