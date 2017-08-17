(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("Messages");
        var messages = $firebaseArray(ref);

        Message.all = messages;

        Message.getByRoomId = function(roomId) {
            return $firebaseArray.child(this.Messages).orderByChild(roomId);
            
        }

        

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();