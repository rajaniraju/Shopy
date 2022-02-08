
import React from 'react';
import './App.css';
import Header from './Containers/Header';
import ProductList from './Containers/ProductListing';
import ProductDetails from './Containers/ProductDetails';

import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Routes} from "react-router";

function App() {
  
 
  return (<React.Fragment>
    <div className="App">
      <Router>
     <Header/>
     <Routes>
     <Route path="/" element ={<ProductList/>}/>
     <Route path="/product/:productId" element ={<ProductDetails/>}/>
     <Route>404 Not Found ! </Route>
     </Routes>
      </Router>
    </div>
    </React.Fragment>
  );
}

export default App;
