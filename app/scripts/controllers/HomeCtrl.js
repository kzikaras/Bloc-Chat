(function() {
    function HomeCtrl(Room, $uibModal, Message) {
        this.test = "test";
        this.rooms = Room.all;
        this.messages = "";
        
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
            this.messages = Message.getByRoomId("-KrYnxUbsFVZ22f_l9F0");
        }
        
    };
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();
