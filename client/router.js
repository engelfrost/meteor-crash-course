Router.map(function() {
  this.route('home', {
    path: '/',
    template: 'rooms',
    data: function() {
      return {rooms: Rooms.find()};
    }
  });

  this.route('rooms', {
    //path: '/rooms',
    data: function () {
      return {rooms: Rooms.find()};
    }
  });

  this.route('roomShow', {
    path: '/rooms/:_id',
    data: function() {
      return {messages: Messages.find({room: this.params._id}, {sort: {timestamp: 1}})};
    }
  });
});