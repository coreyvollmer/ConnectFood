import { NextFunction, Request, Response } from "express";
import { AuthenticationModel } from './authentication_model';

debugger;

/**
 * Login Controller for handling of all Donor requests.
 */
export class AuthenticationController {

    private authenticatonModel : AuthenticationModel;

    public constructor() {
        debugger;
        this.authenticatonModel = new AuthenticationModel();
    }

    /**
     * Handles login request for a given user.
     */
    public login(request, response : Response) {
        debugger;
        this.authenticatonModel.authenticateAppUser();

        // TODO: Use return value from authenticateUser() to set session info on the request and populate the response JSON body.
        request.session["appUserKey"] = 1;
        console.log(request.session);
        response.setHeader('Content-Type', 'application/json');
        return response.send(JSON.stringify({ appUserKey: 1, username : 'marknemm' }));
    }

    public logout(request, result) {

    }

};