// FETCH calls

const fetchCustomers = fetch(`http://localhost:3001/api/v1/customers`);
const fetchRooms = fetch(`http://localhost:3001/api/v1/rooms`);
const fetchBookings = fetch(`http://localhost:3001/api/v1/bookings`);
// const postBooking = (data) => {
//   fetch('http://localhost:3001/api/v1/bookings', {
//     method: 'POST',
//     body: JSON.stringify(data),
//     headers: {
//       'Content-type': 'application/json'
//   }
// })
//   .then(response => {
//     if(response.ok) {
//       return response.json()
//     } else {
//       alert(`${response.status} server request failed, please try again later`)
//       console.error('Request failed with status:', response.status)
//     }
//   })
//   .then(json => console.log(json))
//   .catch(err => console.log(err))
// };

export { 
  fetchCustomers, 
  fetchRooms, 
  fetchBookings, 
  // postBooking 
};