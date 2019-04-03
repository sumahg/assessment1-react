import React, {Component} from 'react';
import '../App.css'

class Header extends Component{
    constructor(props){
        super(props)
      
    }
    render(){
        return(
            <div className = "row">
             <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
  <ul className="navbar-nav">
    <li className="nav-item textColor">
      <a className="nav-link" href="#">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">About us</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#">Contacts</a>
    </li>
    <li className="nav-item">
      <a className="nav-link last" href="#">Cart: <span className = "productCount">{this.props.cartCount}</span></a>
     
      
    </li>
  </ul>
</nav>
            </div>
        );
    }
}

export default Header;