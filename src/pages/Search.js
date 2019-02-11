import React, { Component } from "react";
import API from "../util/api";
import SearchResults from "../components/SearchResults";

class Search extends Component {
    state = {
        results: []
    }
        
componentDidMount() {
    API.getRandomDog()
        .then((res) => { 
           this.setState({ results: res.data.message });
       // console.log("HELP!!", res.data.message);
        })
        
        .catch((err) => {console.log(err);});
};

render() {
    return (
        <SearchResults results={this.state.results} />
    );
}
}
export default Search;



