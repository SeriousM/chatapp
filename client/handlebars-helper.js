Handlebars.registerHelper('to_date', function(ticks) {
  return new Date(ticks).toISOString();
});