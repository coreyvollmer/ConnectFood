// Written by Corey Vollmer on 7/5/2017
// This is far from functional. It is my first attempt at writing in node.js

//This class handles account signups for all users.

var appUser = require('AppUser.sql')
var insertIntoAppUser = require('InsertIntoAppUser.sql')

export class SignUp {
    constructor() {
    }

    // side is donor or reciever.
    public TryToSignUp(side,email,username,password,city) {
       //check if email is valid/exists
        if(this.validateEmail(email)){
            
        }


       //check if username exists

       //check if password is strong enough (requirements?)
       //for password call authenticate app user (password)

       //if all okay, insert into appuser database
    }

    //currently just checks if email contains an @
    private validateEmail(email){
        var length = email.length;
        for(var i = 0; i < length; i++) {
        if(email[i] == '@')
            return true;
        }
        return false;
    }

    private validatePassword(password){
        var length = password.length;
        var HasUpper = false;       
        if(length > 6){
            for(var i = 0; i < length; i++) {
                if(password[i] = password[i].toUpperCase())
                HasUpper = true;
                return true;
            } // todo: check if password has special char (make a list of all special chars)
        }
        return false;
    }
};

