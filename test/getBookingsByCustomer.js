import { getBookingsByCustomer } from "../src/functions/customerBookings";
import { sampleBookingsData } from "../src/sampleData/sampleBookings";
import { sampleRooms } from "../src/sampleData/sampleRooms";
import chai from 'chai';
const expect = chai.expect;

const customerOneBookings = [sampleBookingsData[3], sampleBookingsData[4], sampleBookingsData[13]];

describe('getBookingsByCustomer', function() {
  it('should return an array of bookings', function() {
    expect(getBookingsByCustomer(1, sampleBookingsData)).to.deep.equal(customerOneBookings);
  });
});

describe('getTotalCost', function() {
  it('should calculate the cost of all customer bookings', function() {
    const customerBookings = getBookingsByCustomer(1, sampleBookingsData);
    expect(getTotalCost(customerBookings, sampleRooms)).to.equal(cost);
  });
});