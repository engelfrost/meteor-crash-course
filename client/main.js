Template.roomShow.helpers({
  messages: function() {
    return Messages.find({room: Router.current().params.room});
  },
  username: function () {
    var user = Meteor.users.findOne({_id: this.user});
    if (user && user.username) {
      return user.username;
    }
  },
  gravatar: function () {
    var user = Meteor.users.findOne({_id: this.user});
    if (user && user.emails) {
      return Gravatar.imageUrl(user.emails[0].address);
    }
  }
});

Template.roomShow.events({
  'submit form': function(event, template) {
    var message = template.find('textarea').value; 
    Messages.insert({
      user: Meteor.user()._id, 
      message: message, 
      timestamp: (+new Date), 
      room: Router.current().params.room
    });
    event.preventDefault();
  }
})