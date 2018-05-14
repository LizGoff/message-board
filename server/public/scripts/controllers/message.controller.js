app.controller('MessageController', ['$http', function ($http) {
    console.log('MessageController has been loaded');

    var self = this;
    self.message = "I am the Message page!"

    self.message_board = {
        list: []
    };

    // add new entry

    self.enterNewEntry = function () {

        $http({
            method: 'GET',
            url: '/message',
        })
            .then((response) => {
                console.log(response);
                self.message_board.list = response.data;
            })
            .catch((error) => {
                console.log('error making message_board get request', error);
            })
    };

    // post entry 

    self.postNewEntryToDom = function (entryToAddToDom) {
        $http({
            method: 'POST',
            url: '/message',
            data: entryToAddToDom
        })
            .then((response) => {
                self.message_board.name = '';
                self.message_board.message = '';
                console.log(response);
                self.enterNewEntry();
            })
            .catch((error) => {
                console.log('error making request for post', error);
            });

    }

    // remove new entry

    self.removeEntry = function (message_board) {
        $http({
            method: 'DELETE',
            url: `/message/${message_board.id}`,
            data: message_board
        }).then((response) => {
            self.enterNewEntry();
            console.log(response);
        })
            .catch((error) => {
                console.log('error making delete request', error);
                alert('Something went wrong! Check the server.');
            });
    }


    // Load data
    self.enterNewEntry();
}]); //end MessageController
