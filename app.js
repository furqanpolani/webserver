console.log('starting password manager ');
var storage= require('node-persist');
storage.initSync();

var accounts= storage.getItemSync('accounts');

function createAccount(acc) {
    if(typeof accounts=='undefined'){
        accounts=[];
    }
    else
    {
        accounts.push(acc);
        storage.setItemSync('accounts',accounts);
    }

}

function getAccount(accountName) {
   var match;
    var accounts=storage.getItemSync('accounts');
    accounts.forEach(function (account) {
        if (account.accounttype==accountName){
            match= account;
        }
    });
return match;
}
/*
var andrew={
    accounttype : 'facebook',
    username : 'furqan202',
    password :  'babu'
};

var b= createAccount(andrew);*/

var ma= getAccount('facebook');
console.log(ma);



















