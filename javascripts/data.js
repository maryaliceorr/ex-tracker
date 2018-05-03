// const dom = require('./dom');
const loadEx = require ('./ex');
// const loadFish = require('./locations');

const whenExLoads = (data) => {
  console.log('data', data);
};

const nope = (error) => {
  console.error('nope not today', error);
};

const goTime = () => {
  loadEx(whenExLoads, nope);
};

module.exports = goTime;
