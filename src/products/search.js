import React, {Component} from 'react';

class Search extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className = "row">
                <input type = "text" placeholder = "search..." onChange = {(e) => {this.props.searchText(e.target.value)}} className = "col-md-4 form-cntrol"/>
            <button onClick = {() => {this.props.search('I am clicked')}} className = "btn btn-primary">search</button>

            </div>
        );
    }
}

export default Search;