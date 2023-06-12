import chai from 'chai';
const expect = chai.expect;
import {filterByDate} from '../src/functions/filterByDate';
import {sampleBookingsData} from '../src/sampleData/sampleBookings';
import {sampleRooms} from '../src/sampleData/sampleRooms';

describe('filterByDate',() => {
  let bookings = sampleBookingsData.bookings;
  let rooms = sampleRooms.rooms;
  const date = '2022/01/11';
  const availableRooms = [rooms[0], rooms[1], rooms[2], rooms[3], rooms[4], rooms[5], rooms[6], rooms[7], rooms[9], rooms[10], rooms[11], rooms[12], rooms[13], rooms[14], rooms[15], rooms[16], rooms[17],  rooms[18],  rooms[19],  rooms[20],  rooms[21],  rooms[22],  rooms[23],  rooms[24]];
  it('filterByDate should be a function', function() {
    expect(filterByDate).to.be.a('function');
  });

  it('filterByDate should return a subset array of availible rooms', function() {
    expect(filterByDate(rooms, bookings, date)).to.deep.equal(availableRooms);
  });
});