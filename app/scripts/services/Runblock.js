// this will run on app startup
(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        console.log(currentUser);
        //Check for a current username
        if (!currentUser || currentUser === '') {
            // do something to allow users to set their username
            $uibModal.open({
                animation: true,
                backdrop: 'static',
                templateUrl: '/templates/getUsernameModal.html',
                size: 'md',
                controller: 'UsernameCtrl as username'
            })
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();