import AuthenticationService from '../implementation/Demo/AuthenticationService';
import ProducServiceInst from '../implementation/Demo/ProductService';

exports.getAuthenticationServiceInst = function(){
    return new AuthenticationService;
}

exports.getProductServiceInst = function(){
    return new ProducServiceInst("Kids");
}