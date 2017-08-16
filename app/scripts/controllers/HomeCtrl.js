(function() {
    function HomeCtrl(Room, $uibModal, Message) {
        this.test = "test";
        this.rooms = Room.all;
        this.messages = Message.all;
        
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
            
        }
        
    };
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', 'Message', HomeCtrl]);
})();
