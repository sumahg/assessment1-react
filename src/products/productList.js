import React, {Component} from 'react';
import ProductDetails from './productDetails'
import Header from './header'

class ProductList extends Component{
    constructor(props){
        super(props)
        this.state = {
           count:0,
            products:[
                {
                id:1,
                name: "LED Headlights",
                imageurl:"https://i5.walmartimages.com/asr/164e191b-699f-47a8-94bf-ff5ba84196b8_1.ae5d714d508b8df2c8d041fc43280e0c.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
                description:"Adventure awaits your children with this ride-on truck! Let them cruise along with in-car steering while they jam out to their favorite tunes.",
                price:10000
                },
                {
                id:2,
                name: "Best Choice Products 6V Kids Ride-On Car",
                imageurl:"https://i5.walmartimages.com/asr/b2d1cedd-d595-492d-af13-f86c2e74717d_1.d57221fd05fb835f8d350d4ee95576a8.jpeg?odnHeight=100&odnWidth=100&odnBg=ffffff",
                description:"Disney/Pixar Cars fans get big action with this 20&quot; Lightning McQueen vehicle! The favorite leading character features iconic colors.",
                price:20000
                },
                {
                id:3,
                name: "Disney/Pixar Cars",
                imageurl:"https://i5.walmartimages.com/asr/85384b98-5da2-48a8-9147-a3f59cb4a94d_1.7b8b27224a37320e92ea70dca2ee15ce.jpeg?odnHeight=100&odnWidth=100&odnBg=ffffff",
                description:"Help expand your little one's toy collection with the Hot Wheels 9-Pack Cars set..",
                price:3000
                }
                ]
        }
       
    }
  
    render(){
        let listOfProductsDisplayed = '';
        if(this.props.search == ''){
            listOfProductsDisplayed = this.state.products.map((product,index) => {
                return <ProductDetails key = {index} details = {product}
                add = {this.props.add} remove1 = {this.props.remove}/>
            }) 
        }else{
            let filteredProducts = this.state.products.filter((product,index) =>{
                return product.name.toLowerCase().includes(this.props.search.toLowerCase());
            })
            listOfProductsDisplayed = filteredProducts.map((product,index) => {
                return <ProductDetails key = {index} details = {product} add = {this.props.add} remove1 = {this.props.remove}/>
            })
        }
        
        return(
            <div>
                
           {listOfProductsDisplayed}

            </div>
        );
    }
}

export default ProductList;