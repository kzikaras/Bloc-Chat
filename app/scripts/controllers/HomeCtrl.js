(function() {
    function HomeCtrl(Room, $uibModal, Message, $cookies) {
        this.test = "test";
        this.rooms = Room.all;
        this.user = $cookies.get('blocChatCurrentUser');
        this.message = "";
        
        
        this.open = function() {
            $uibModal.open({
                animation: true,
                backdrop: true,
                templateUrl: '/templates/modal.html',
                size: 'md',
                controller: 'ModalCtrl as modal'

            });
            
        }

        
        this.activeRoom = "";

        this.setActiveRoom = function(room) {
            this.activeRoom = room;
            this.messages = Message.getByRoomId(room.$id);
            console.log(this.messages);
        };

        this.reset = function() {
            this.message = "";
        };

        this.submitMessage = function(newMessage) {
            console.log(this.activeRoom.$id);
            Message.send(newMessage, this.activeRoom.$id);
            this.reset();
        };
        
        
    };
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message','$cookies', HomeCtrl]);
})();
