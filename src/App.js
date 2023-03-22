
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, HashRouter, Route } from "react-router-dom"
import Works from './Components/Works';
import Services from './Components/Services';
import { useState } from 'react';


function App() {

  
  return (
    <HashRouter>
    <div className="App">
      <Header></Header>
      <Route exact path="/home"><Home ></Home></Route>
      <Route exact path="/works"><Works></Works></Route>
      <Route exact path="/services"><Services></Services></Route>
      
      <Footer></Footer>
       </div>
       </HashRouter>
    
  );
}

export default App;
