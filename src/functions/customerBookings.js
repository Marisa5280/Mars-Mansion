const getBookingsByCustomer = (id, bookings) => bookings.filter((booking) => booking.userID === id);

// const getTotalCost = 

export {getBookingsByCustomer};