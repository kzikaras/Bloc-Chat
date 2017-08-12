(function() {
    function HomeCtrl(Room, $uibModal) {
        this.test = "test";
        this.rooms = Room.all;
        
        this.open = function($uibModal) {
            $uibModal.open({
                animation: true,
                templateUrl: 'modal.html',
                size: 'sm',
                controller: 'ModalCtrl.js'
            });
            
        }
        
    };
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
