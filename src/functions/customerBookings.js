const getBookingsByCustomer = (id, bookings) => bookings.bookings.filter((booking) => booking.userID === id);

console.log('customerBookings');

const getTotalCost = (bookings, rooms) => 
  bookings.reduce((acc, booking) => {
    const room = rooms.find((room) => room.number === booking.roomNumber);
    return acc += room.costPerNight;
  }, 0);


export {
  getBookingsByCustomer,
  getTotalCost
};