import AuthenticationService from '../implementation/Demo/AuthenticationService';
import ProducServiceInst from '../implementation/Demo/ProductService';
import OrderServiceInst from '../implementation/Demo/OrderService';

exports.getAuthenticationServiceInst = function(){
    return new AuthenticationService;
}

exports.getProductServiceInst = function(){
    return new ProducServiceInst("Kids");
}

exports.getOrderServiceInst = function(){
    return new OrderServiceInst("Kids");
}