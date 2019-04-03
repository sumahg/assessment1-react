import React, {Component} from 'react';

class Cart extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = "row">
                <p>{this.props.cartCount}</p>
            </div>
        );
    }
}

export default Cart;