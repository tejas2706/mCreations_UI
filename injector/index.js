import AuthenticationService from '../implementation/Demo/AuthenticationService';


exports.getLoginServiceInst = function(){
    return new AuthenticationService;
}