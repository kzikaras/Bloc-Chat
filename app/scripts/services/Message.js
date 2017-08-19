(function() {
    function Message($firebaseArray, $cookies) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.all = messages;

        Message.getByRoomId = function(roomId) {
            var msg = $firebaseArray(ref.orderByChild("roomId").equalTo(roomId));
            
            return msg;
        };

        Message.send = function(newMessage, roomId, user) {
            console.log(newMessage);
            ref.push({
                content: newMessage,
                roomId: roomId,
                sentAt: '7:30',
                username: $cookies.get('blocChatCurrentUser')
            });
            
            
        };

        

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray','$cookies', Message]);
})();