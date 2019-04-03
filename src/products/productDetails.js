import React, {Component} from 'react';
import '../App.css'
import Buttons from './butttons';

class ProductDetails extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = "card">
                <div className="card-body">
            <img className="card-img1 size" src = {this.props.details.imageurl}/><br/>
            <h5 className="card-text">Name: {this.props.details.name}</h5>
            <p className="card-text">Description: {this.props.details.description}</p>
            <p className="card-text">Price: {this.props.price}</p>
            <Buttons add={this.props.add} remButton={this.props.remove1}/>
            
        
            </div> <br/><br/>
            </div>
           
        );
    }
}

export default ProductDetails;