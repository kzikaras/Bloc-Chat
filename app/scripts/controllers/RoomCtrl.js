(function() {
    function RoomCtrl($scope, Room) {
        this.test = "test";
        this.rooms = Room.all;
        console.log(this.test);
        console.log(this.rooms)
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', 'Room', RoomCtrl]);
})();
