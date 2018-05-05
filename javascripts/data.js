const dom = require('./dom');
const loadEx = require('./ex');
const loadLocations = require('./locations');
const events = require('./events');

const whenExLoads = (data) => {
  const domEx = dom.printEx(data.ex);
  $('#ex').html(domEx);
  events();
};

const whenLocationLoads = (data) => {
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
