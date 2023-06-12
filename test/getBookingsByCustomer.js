import { getBookingsByCustomer, getTotalCost } from "../src/functions/customerBookings";
import { sampleBookingsData } from "../src/sampleData/sampleBookings";
import { sampleRooms } from "../src/sampleData/sampleRooms";
import chai from 'chai';
const expect = chai.expect;
const customerOneBookings = [sampleBookingsData.bookings[3], sampleBookingsData.bookings[4], sampleBookingsData.bookings[13]];

describe('getBookingsByCustomer', function() {
  it('getBookingsByCustomer should be a function', function() {
    expect(getBookingsByCustomer).to.be.a('function');
  });
  
  it('getBookingsByCustomer should return an array of bookings', function() {
    expect(getBookingsByCustomer(1, sampleBookingsData)).to.deep.equal(customerOneBookings);
  });

  it('getTotalCost should be a function', function() {
    expect(getTotalCost).to.be.a('function');
  });

  it('getTotalCost should calculate the cost of all customer bookings', function() {
    const customerBookings = getBookingsByCustomer(1, sampleBookingsData);
    expect(getTotalCost(customerBookings, sampleRooms)).to.equal(698.11);
  });
});