(function() {
    function ModalCtrl($uibModal, Room) {
        this.open = function() {
            $uibModal.open({
                animation: true  
            })
        }

        this.text = 'some text';
        this.sendOff = function(text){
            Room.add(text);
        }

        

        

    }


    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', ModalCtrl])
})();