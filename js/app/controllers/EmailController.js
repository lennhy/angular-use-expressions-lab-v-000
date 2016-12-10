function EmailController($filter) {
    this.emails = [];

    this.addEmail = function () {
        this.emails.push({
            name: 'Bill Gates',
            subject: 'Want to buy a Surface?'
        })
    };

    this.emailCount = function () {
      return this.emails.length;
    };
}

angular
    .module('app')
    .controller('EmailController', EmailController);
