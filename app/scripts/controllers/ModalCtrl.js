(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        

        this.text = 'some text';
        this.sendOff = function(){
            Room.add(this.text);
            this.dismiss();
        }

        this.dismiss = function() {
            $uibModalInstance.close();
        }

        this.text = 'some text';
        this.sendOff = function(){
            Room.add(this.text);
            this.dismiss();
        }

        

        

    }


    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl])
})();