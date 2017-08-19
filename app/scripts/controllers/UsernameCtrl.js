(function() {
    function UsernameCtrl(Room, $cookies, $uibModalInstance) {
        

        this.text = '';
        
        // function to dismiss the modal window
        this.dismiss = function() {
            $uibModalInstance.close();
        }

       
        //submits the username to cookies. Will not allow the app to open until user enters a username
        this.submitUsername = function() {
            currentUser = this.text;
            $cookies.put('blocChatCurrentUser', currentUser);
            if (currentUser || currentUser !== '') {
                this.dismiss();
            }
            else if (!currentUser || currentUser === '') {
                alert('Please Enter a username');
            }
            
            console.log(currentUser);
        }

        

        

    }


    angular
        .module('blocChat')
        .controller('UsernameCtrl', ['Room', '$cookies', '$uibModalInstance', UsernameCtrl]);
})();