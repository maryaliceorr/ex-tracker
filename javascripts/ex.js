const loadEx = (success, error) => {
  $.get('../db/ex.json')
    .done(success)
    .fail(error);
};

module.exports = loadEx;
