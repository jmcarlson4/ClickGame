import React from 'react';
import Jumbotron from './components/Jumbotron';
import Search from './pages/Search';
//import SearchResults from './components/SearchResults';
//import Counter from './components/Counter';
import CounterBody from './components/CounterBody';


function App()  {
  
    return (
        <div>
    <Jumbotron/>
    <CounterBody/>
    <Search/>
    
    
    </div>);
    
    
};

export default App;
