app.controller('MessageController', ['$http', function ($http) {
    console.log('MessageController has been loaded');

    var self = this;
    self.message = "I am the Message page!"

    self.messages = {
        list: []
    };

    // add new entry

    self.enterNewEntry = function () {

        $http({
            method: 'GET',
            url: '/messages',
        })
            .then((response) => {
                console.log(response);
                self.messages.list = response.data;
            })
            .catch((error) => {
                console.log('error making messages get request', error);
            })
    };

    // post entry 

    self.postNewEntryToDom = function (entryToAddToDom) {
        $http({
            method: 'POST',
            url: '/messages',
            data: entryToAddToDom
        })
            .then((response) => {
                self.messages.name = '';
                self.messages.message = '';
                console.log(response);
                self.enterNewEntry();
            })
            .catch((error) => {
                console.log('error making request for post', error);
            });

    }

    // remove new entry

    self.removeEntry = function (messages) {
        $http({
            method: 'DELETE',
            url: `/messages/${messages.id}`,
            data: messages
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
