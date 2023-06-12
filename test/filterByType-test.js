import chai from 'chai';
const expect = chai.expect;
import { filterByType } from '../src/functions/filterByType';
import { sampleRooms } from '../src/sampleData/sampleRooms';

describe('filterByType', () => {
  let rooms = sampleRooms.rooms;
  const filteredRooms = [rooms[1], rooms[9], rooms[23]];
  it('filterByType should be a function', function() {
    expect(filterByType).to.be.a('function');
  });
  it('filterByType', function(){
    expect(filterByType(rooms, 'suite')).to.deep.equal(filteredRooms);
  })
})