// to uppercase

jQuery.expr[':'].icontains = function (a, i, m) {
  return jQuery(a).text().toUpperCase()
    .indexOf(m[3].toUpperCase()) >= 0;
};

// Button Events

const filterMorning = () => {
  $('.time').not('.morning').closest('.location').hide();
  $('.time').filter('.morning').closest('.location').show();
};

const filterAfternoon = () => {
  $('.time').not('.afternoon').closest('.location').hide();
  $('.time').filter('.afternoon').closest('.location').show();
};

const filterEvening = () => {
  $('.time').not('.evening').closest('.location').hide();
  $('.time').filter('.evening').closest('.location').show();
};

const filterAfterDark = () => {
  $('.time').not('.after-dark').closest('.location').hide();
  $('.time').filter('.after-dark').closest('.location').show();
};

const filterReset = () => {
  $('.location').show();
};

const buttonClicks = () => {
  $('#morning-button').click(filterMorning);
  $('#afternoon-button').click(filterAfternoon);
  $('#evening-button').click(filterEvening);
  $('#after-dark-button').click(filterAfterDark);
  $('#reset-button').click(filterReset);
};

// Search bar Events

const searchInput = () => {
  $('#search-input').val();
};

const matchCards = (locations) => {
  $('#searchbutton').click();
  $(`'.location':not(:icontains(searchInput))`).hide();
};

module.exports =  {
  buttonClicks,
  matchCards,
};
