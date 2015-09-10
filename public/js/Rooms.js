var Rooms = {
	room_select: $('.property-rooms select'),
	room_links: $('.property-rooms aside a'),
	rooms: $('.property-rooms .room'),

	init: function(){
		console.log('Hello')
		var self = this;

		this.room_select.on('change', function(){
			self.changeRoom(this[this.selectedIndex].value);
		});

		this.room_links.on('click', function(e){
			e.preventDefault();
			self.changeRoom($(this).attr('href').substr(1));
		})
	},

	changeRoom: function(room){
		console.log(room);
		this.rooms.removeClass('selected');
		$('#'+room).addClass('selected');
	}
}

Rooms.init();