(function() {
    function ModalCtrl($uibModal) {
        this.open = function() {
            $uibModal.open({
                animation: true  
            })
        }

    }


    angular
        .module('blocChat')
        .controller('ModalCtrl',['$uibModal', ModalCtrl])
})();