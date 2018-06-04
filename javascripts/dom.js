const printEx = (exes) => {
  let domStrang = '';
  for (let i = 0; i < exes.length; i++) {
    domStrang += `<div class='col-lg-2 panel ex-card'>`;
    domStrang +=  `<div class='panel-heading'>`;
    domStrang +=    `<h2 class='panel-title'><strong>EX: </strong>${exes[i].exName}</h2>`;
    domStrang +=  `</div>`;
    domStrang +=  `<div class='panel-body'>`;
    domStrang +=    `<img class='ex-img' src='${exes[i].img}'>`;
    domStrang +=    `<h4><strong>Age: </strong>${exes[i].age}</h4>`;
    domStrang +=    `<h4><strong>Flaws: </strong>${exes[i].flaws}</h4>`;
    domStrang +=  `</div>`;
    domStrang += `</div>`;
    domStrang += `</div>`;
  };
  $('#ex-holder').html(domStrang);
};

const printLocations = (locations) => {
  let domStrang = '';
  locations.forEach((location) => {
    domStrang += `<div class='col-sm-4 location'>`;
    domStrang +=  `<div class='panel panel default'>`;
    domStrang +=    `<div class='panel-heading location-heading'>`;
    domStrang +=      `<h2 class='panel-title'><strong>Location: </strong>${location.locationName}</h2>`;
    domStrang +=    `</div>`;
    domStrang +=    `<div class='panel-body location-card'>`;
    domStrang +=      `<h4><strong>Address: </strong>${location.address}</h4>`;
    domStrang +=      `<h4><strong>Time That Ex Normally Goes: </strong><span class="time ${location.time.toLowerCase().replace(' ', '-')}">${location.time}</span></h4>`;
    domStrang +=    `</div>`;
    domStrang +=  `</div>`;
    domStrang += `</div>`;
  });
  $('#locations').html(domStrang);
};

module.exports = {
  printEx,
  printLocations,
};
