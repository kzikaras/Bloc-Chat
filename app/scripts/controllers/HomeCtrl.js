(function() {
    function HomeCtrl(Room) {
        this.test = "test";
        this.rooms = Room.all;
        console.log('RoomCtrl');
        console.log(this.rooms);
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
