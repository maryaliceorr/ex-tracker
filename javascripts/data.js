const dom = require('./dom');
const loadEx = require ('./ex');
const loadLocations = require('./locations');

const whenExLoads = (data) => {
  const domEx = dom.printEx(data.ex);
  console.log('data', data);
  console.log('domEx', domEx);
  $('#ex').html(domEx);
};

const whenLocationLoads = (data) => {
  console.log('data', data);
  $('#locations').html(dom.printLocations(data.locations));
};

const nope = (error) => {
  console.error('nope not today', error);
};

const goTime = () => {
  loadEx(whenExLoads, nope);
  loadLocations(whenLocationLoads, nope);
};

module.exports = goTime;
