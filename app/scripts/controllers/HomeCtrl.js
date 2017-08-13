(function() {
    function HomeCtrl(Room, $uibModal) {
        this.test = "test";
        this.rooms = Room.all;
        
        this.open = function() {
            $uibModal.open({
                animation: true,
                backdrop: true,
                templateUrl: '/templates/modal.html',
                size: 'md',
                controller: 'ModalCtrl as modal'

            });
            
        }
        
    };
    
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
})();
