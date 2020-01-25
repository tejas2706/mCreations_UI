const KidsDummyData = [
    {
        id:1,
        name: "Tshirt",
        price: 200,
        quantity: 10,
        brand: "adidas",
        img_src: "../../assets/images/kids/image1.jpeg"
    },
    {
        id:2,
        name: "Shirt",
        price: 300,
        quantity: 23,
        brand: "Allen Soly",
        img_src: "../../assets/images/kids/image2.jpeg"
    },
    {
        id:3,
        name: "Jeans",
        price: 250,
        quantity: 10,
        brand: "Levis",
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
}