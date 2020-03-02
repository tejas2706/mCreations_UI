import AuthenticationService from '../implementation/Demo/AuthenticationService';
import ProductServiceInst from '../implementation/Demo/ProductService';
import OrderServiceInst from '../implementation/Demo/OrderService';

exports.getAuthenticationServiceInst = function(){
    return new AuthenticationService;
}

exports.getProductServiceInst = function(){
    return new ProductServiceInst("Kids");
}

exports.getOrderServiceInst = function(){
    return new OrderServiceInst("Kids");
}