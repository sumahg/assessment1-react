import React, {Component} from 'react';

class Buttons extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
           <div>
                <button className="btn btn-primary"
                onClick={()=> this.props.add('clicked')}>add to cart</button>
                <button className="btn btn-primary ml-3"
                onClick = {() => this.props.remButton()}>Remove</button>
           </div>
        );
    }
}

export default Buttons;