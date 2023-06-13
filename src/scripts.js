// IMPORTS //

import './css/styles.css';
import './images/turing-logo.png'

import {
  fetchCustomers,
  fetchBookings,
  fetchRooms
} from './apiCalls'
import { customerBookings } from './domUpdates';

// DATA MODELS //

let customersData = [];
let bookingsData = [];
let roomsData = [];
let currentCustomer = {};

window.addEventListener('load', () => {
  Promise.all([fetchCustomers, fetchBookings, fetchRooms])
  .then(responses => {
    responses.forEach(response => {
      if (response.ok) {
        response.json()
          .then(data => {
            if (response.url.includes('/customers')) {
              customersData = data.customers;
            } else if (response.url.includes('/bookings')) {
              bookingsData = data.bookings;
            } else if (response.url.includes('/rooms')) {
              roomsData = data.rooms;
              currentCustomer = customersData[0];
            }
          })
          .catch(error => {
            console.error('Error parsing response:', error);
          });
      } else {
        alert(`${response.status} server request failed, try again later`)
        console.error('Request failed with status:', response.status);
      }
    });
  });
});

export {
  customersData,
  bookingsData,
  roomsData,
  currentCustomer
}