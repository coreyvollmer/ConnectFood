var connectionPool = require('../database_help/connection_pool');
var passHashUtil = require('./password_hash_util');

/**
 * Model for authentication business logic. Contains functionality for authenticating or logging a user in, logging out, and signing up.
 */
export class AuthenticationModel {

    constructor() {

    }

    public authenticateAppUser() {
        passHashUtil.saltHashPassword('password', function(err, result) {
            console.log(result);
        });
        connectionPool.query('authenticateAppUser').then(res => {

        })
        .catch(err => {

        });
    }

};