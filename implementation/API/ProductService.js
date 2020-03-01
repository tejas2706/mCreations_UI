import Fetcher from '../../helpers/Fetcher';

export default class ProductService {

    constructor(type){
        this.type = type
    }

    fetchProductDetails = async ()=>{
        //Fetch product details based on type
        // Database would contain products with a field as type that can be an enum [Kids, Men, Women]
        try{
            return await Fetcher(`http://10.0.0.33:3000/api/products/getProductDetailsByCategory/${this.type}`)
        }catch(err){
            console.log(err);
        }
    }

    placeOrder(){
        //API request to place order 

        return Promise.resolve({ "success": true })
    }
}