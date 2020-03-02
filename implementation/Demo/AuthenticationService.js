export default class AuthenticationService {


    login(){
        return Promise.resolve({token: true});
    }
}