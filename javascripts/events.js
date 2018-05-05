// Button Events

const filterMorning = () => {
  $('.time').not('.morning').closest('.location').addClass('hide');
  $('.time').filter('.morning').closest('.location').removeClass('hide');
};

const filterAfternoon = () => {
  $('.time').not('.afternoon').closest('.location').addClass('hide');
  $('.time').filter('.afternoon').closest('.location').removeClass('hide');
};

const filterEvening = () => {
  $('.time').not('.evening').closest('.location').addClass('hide');
  $('.time').filter('.evening').closest('.location').removeClass('hide');
};

const filterAfterDark = () => {
  $('.time').not('.after-dark').closest('.location').addClass('hide');
  $('.time').filter('.after-dark').closest('.location').removeClass('hide');
};

// const reset = () => {
//   $('.location').removeClass('hide');
// };

const buttonClicks = () => {
  $('#morning-button').click(filterMorning);
  $('#afternoon-button').click(filterAfternoon);
  $('#evening-button').click(filterEvening);
  $('#after-dark-button').click(filterAfterDark);
};

module.exports =  buttonClicks;

// Search bar Events

// const searchInput = () => {
//   $('#search')
// }
