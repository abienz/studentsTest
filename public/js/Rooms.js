var Rooms = {
	room_select: $('.property-rooms select'),
	room_links: $('.property-rooms aside a'),
	rooms: $('.property-rooms .room'),
	friends: '',

	init: function(){
		var self = this;

		this.room_select.on('change', function(){
			self.changeRoom(this[this.selectedIndex].value);
		});

		this.room_links.on('click', function(e){
			e.preventDefault();
			self.changeRoom($(this).attr('href').substr(1));
		});

		this.getFriends('deluxe');
	},

	changeRoom: function(room){
		this.rooms.removeClass('selected');
		$('#'+room).addClass('selected');
		this.room_links.removeClass('selected');

		for (var i = this.room_links.length - 1; i >= 0; i--) {
			var current_link = $(this.room_links[i]);

			if (current_link.attr('href').substr(1) === room) {
				current_link.addClass('selected');
			};
		};

		this.getFriends(room);
	},

	getFriends: function(room){
		var self = this;

		$.getJSON('../data/friends.json')
		.done(function(json){
			$.each(json, function(key, value){
				if(key==room) {
					self.friends = value.friends;
					self.updateSocial();
				}
			})
		})
		.fail(function(){
			console.log('error finding json');
		});
	},

	updateSocial: function(){
		var friends = this.friends,
				friends_count = friends.length,
				social_text = $('.property-rooms .social');

		friends.sort();

		switch(friends_count) {
			case 0:
				social_text.addClass('hide');
				break;
			case 1:
				social_text.html(friends[0] + ' has stayed here');
				social_text.removeClass('hide');
				break;
			case 2:
				social_text.html(friends[0] + ' and ' + friends[1] + ' have stayed here');
				social_text.removeClass('hide');
				break;
			case 3:
				social_text.html(friends[0] + ', ' + friends[1] + ', and 1 other friend have stayed here');
				social_text.removeClass('hide');
				break;
			case 4:
				social_text.html(friends[0] + ', ' + friends[1] + ', and 2 other friends have stayed here');
				social_text.removeClass('hide');
				break;
		}
	}
}

$(function(){
	Rooms.init();
});