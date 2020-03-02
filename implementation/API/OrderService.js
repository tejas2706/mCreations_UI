const OrdersDummyData = [
    {
        id:1,
        order_date: "31/10/2019",
        status: "Order Confirmed"
    },
    {
        id:2,
        order_date: "3/11/2019",
        status: "Pending"
    }
]


export default class ProductService {

    constructor(type){
        this.type = type
    }

    fetchOrderDetails(){
        //Fetch product details based on type
        // Database would contain products with a field as type that can be an enum [Kids, Men, Women]
        return Promise.resolve(OrdersDummyData);
    }
}