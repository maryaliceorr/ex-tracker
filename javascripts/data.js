const dom = require('./dom');
// const loadEx = require('./ex');
// const loadLocations = require('./locations');
// const events = require('./events');

// const whenExLoads = (data) => {
//   const domEx = dom.printEx(data.ex);
//   $('#ex').html(domEx);
//   events.buttonClicks();
//   events.matchCards();
// };

// const whenLocationLoads = (data) => {
//   $('#locations').html(dom.printLocations(data.locations));
// };

// const nope = (error) => {
//   console.error('nope not today', error);
// };

// const goTime = () => {
//   loadEx(whenExLoads, nope);
//   loadLocations(whenLocationLoads, nope);
// };

// module.exports = goTime;

// ----------NEW PROMISES METHOD-------------- //

// ----------Promise Constructor 1----------- //

const exJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/ex.json')
      .done((data) => {
        resolve(data.exes);
      })
      .fail((error) => {
        reject(`nope not today`, error);
      });
  });
};

// ----------Promise Constructor 2----------- //

const locationsJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/locations.json')
      .done((data) => {
        resolve(data.locations);
      })
      .fail((error) => {
        reject(`nope not today`, error);
      });
  });
};
// ---------DOM Promise----------------------- //
const printExesAndLocations = () => {
  return Promise.all([exJSON(), locationsJSON(),])
    .then((results) => {
      const data = [...results[0], ...results[1],];
      return Promise.resolve(data);
    }).catch ((error) => {
      console.error(error);
    });
};
// ------------Event Listener Promise----------- //
// const printExesAndLocations = () => {
//   let data = [];
//   return exJSON()
//     .then((result) => {
//       data = [...result,];
//       return locationsJSON()
//         .then((result2) => {
//           data = [...data, ...result2,];
//           return Promise.resolve(data);
//         }).catch((errorMessage) => {
//           console.error(errorMessage);
//         });
//     });
// };

const initializer = () => {
  printExesAndLocations().then((data) => {
    dom.printEx(data);
    dom.printLocations(data);
    // events.buttonClicks();
    // events.matchCards();
  });
};

module.exports = {
  initializer,
};
