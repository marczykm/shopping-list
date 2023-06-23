import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

export interface AuthResponseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}

@Injectable({providedIn: 'root'})
export class AuthService {

    constructor(private http: HttpClient) {

    }

    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDy82Tn8uF0xEmD_JTzjXruOKgLVMXSfH4',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        ).pipe(catchError(errorRes => {
            let errorMessage = 'Unknown error occured';

            if (!errorRes.error || !errorRes.error.error){
                return throwError(errorMessage);
            }
            switch(errorRes.error.error.message){
                case 'EMAIL_EXISTS':
                    errorMessage = 'The email address is already in use by another account.';
                case 'OPERATION_NOT_ALLOWED':
                    errorMessage = 'Password sign-in is disabled for this project.';
                case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                    errorMessage = 'We have blocked all requests from this device due to unusual activity. Try again later.';
                case 'EMAIL_NOT_FOUND':
                    errorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted.';
                case 'INVALID_PASSWORD':
                    errorMessage = 'The password is invalid or the user does not have a password.';
                case 'USER_DISABLED':
                    errorMessage = 'The user account has been disabled by an administrator.';
            }
            return throwError(errorMessage);
        }));
    }

    login(email: string, password: string){
        return this.http.post<AuthResponseData>(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDy82Tn8uF0xEmD_JTzjXruOKgLVMXSfH4',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
    }

}