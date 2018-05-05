const printEx = (ex) => {
  let domStrang = '';
  for (let i = 0; i < ex.length; i++) {
    domStrang += `<div class='panel panel-default ex-card'>`;
    domStrang +=  `<div class='panel-heading'>`;
    domStrang +=    `<h2 class='panel-title'><strong>EX: </strong>${ex[i].name}</h2>`;
    domStrang +=  `</div>`;
    domStrang +=  `<div class='panel-body'>`;
    domStrang +=    `<img src='${ex[i].img}' alt='Burger'>`;
    domStrang +=    `<h4><strong>Age: </strong>${ex[i].age}</h4>`;
    domStrang +=    `<h4><strong>Flaws: </strong>${ex[i].flaws}</h4>`;
    domStrang +=  `</div>`;
    domStrang += `</div>`;
  };
  return domStrang;
};

const printLocations = (locations) => {
  let domStrang = '';
  locations.forEach((location) => {
    domStrang += `<div class='col-sm-4'>`;
    domStrang +=  `<div class='panel panel default'>`;
    domStrang +=    `<div class='panel-heading location-heading'>`;
    domStrang +=      `<h2 class='panel-title'><strong>Location: </strong>${location.name}</h2>`;
    domStrang +=    `</div>`;
    domStrang +=    `<div class='panel-body location-card'>`;
    domStrang +=      `<h4><strong>Address: </strong>${location.address}</h4>`;
    domStrang +=      `<h4><strong>Time That Ex Normally Goes: </strong>${location.time}</h4>`;
    domStrang +=    `</div>`;
    domStrang +=  `</div>`;
    domStrang += `</div>`;
  });
  return domStrang;
};

module.exports = {
  printEx,
  printLocations,
};
