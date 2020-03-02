const KidsDummyData = [
    {
        id:1,
        productName: "Tshirt",
        price: 200,
        availableQuantity: 10,
        brandName: "adidas",
        img_src: "../../assets/images/kids/image1.jpeg"
    },
    {
        id:2,
        productName: "Shirt",
        price: 300,
        availableQuantity: 23,
        brandName: "Allen Soly",
        img_src: "../../assets/images/kids/image2.jpeg"
    },
    {
        id:3,
        productName: "Jeans",
        price: 250,
        availableQuantity: 10,
        brandName: "Levis",
        img_src: "../../assets/images/kids/image3.jpeg"
    }
]

export default class ProductService {

    constructor(type){
        this.type = type
    }

    fetchProductDetails(){
        //Fetch product details based on type
        // Database would contain products with a field as type that can be an enum [Kids, Men, Women]
        return Promise.resolve(KidsDummyData);
    }

    placeOrder(){
        //API request to place order 

        return Promise.resolve({ "success": true })
    }
}