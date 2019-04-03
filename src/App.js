import React, { Component } from 'react';
import Header from '../src/products/header'
import Search from '../src/products/search'
import Cart from '../src/products/cart'
import ProductList from '../src/products/productList'
import ProductDetails from '../src/products/productDetails'
import Buttons from '../src/products/butttons'
import { timingSafeEqual } from 'crypto';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
       searchQuery:'',
       count:0

    }
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
}
handleChange(data){
  console.log(data);
  let currentState = this.state;
  currentState.searchQuery = data;
  this.setState(currentState);
}
handleSearchClick(data){
  console.log(data);
  let currentState = this.state;
  currentState.counter++;
  this.setState(currentState);
}
increment(data){
  console.log(data);
  let currentState = this.state;
  
  currentState.count++;
  this.setState(currentState);
  console.log(this.state.count)
}
decrement(){
  let currentState = this.state;
  if(currentState.count == 0){
    this.setState(currentState);
  }else{
    currentState.count--;
    this.setState(currentState);
  }
}
  render() {
    
    return (
      <div className="container">
      <Header cartCount={this.state.count}/><br/><br/><br/><br/>
      
      <Search searchText = {this.handleChange} search = {this.handleSearchClick}/><br/><br/><br/><br/>
      <ProductList search = {this.state.searchQuery} add={this.increment} remove = {this.decrement}/>
      <Cart cartCount={this.state.count}/>
      
      
  
      </div>
    );
  }
}

export default App;
