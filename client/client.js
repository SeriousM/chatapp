/**
* Helpers
*/
jQuery(document).ready(function() {
  jQuery("time.timeago").timeago();
});

/**
* Templates
*/
Template.messages.messages = function () {
  return Messages.find({}, { sort: { time: -1 }});
};

Template.welcome.username = function () {
  if (Meteor.user())
    return Meteor.user().profile.name;
  else
    return 'Anonymous';
};

Template.input.events = {
  'keydown input#message' : function (event) {
    var name, message;

    if (event.which == 13) { // 13 is the enter key event
      if (Meteor.user())
        name = Meteor.user().profile.name;
      else
        name = 'Anonymous';
      message = document.getElementById('message');

      if (message.value !== '') {
        Messages.insert({
          name: name,
          message: message.value,
          time: Date.now()
        });

        document.getElementById('message').value = '';
        message.value = '';
      }
    }
  }
};