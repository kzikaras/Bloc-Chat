(function() {
    function ModalCtrl(Room, $uibModalInstance) {
        
        //holds the text in the text box
        this.text = 'some text';

        //sends off the new room to firebase
        this.sendOff = function(){
            Room.add(this.text);
            this.dismiss();
        }

        //dismisses the current modal window
        this.dismiss = function() {
            $uibModalInstance.close();
        }


    }


    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl])
})();