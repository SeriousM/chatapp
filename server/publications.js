Meteor.publish("main-room", function () {
  return Messages.find({}, { sort: { time: -1 }, limit: 30});
});