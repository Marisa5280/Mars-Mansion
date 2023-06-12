const filterByDate = (rooms, bookings, date) => 
  rooms.reduce((acc, room) => {
    const booking = bookings.find((booking)=> booking.roomNumber === room.number);
    const roomHasAnyBookings = !!booking;
    if (!roomHasAnyBookings){
      acc.push(room);
      return acc;
    } 
    if (date !== booking.date){
      acc.push(room);
      return acc;
    }
    return acc;
  }, []);
  
export {
  filterByDate
};

// bookings.forEach((booking) => {
//   if(booking.room === room.roomNumber && booking.date !== date){
//      = room
//   }
// })
// return availableRoom
// });