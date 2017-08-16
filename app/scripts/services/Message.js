(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("Messages").orderByChild("roomId");
        var messages = $firebaseArray(ref);

        Message.all = messages;

        Message.getByRoomId = function(roomId) {
            

        }

        

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();