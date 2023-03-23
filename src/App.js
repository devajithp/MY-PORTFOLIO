
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter, Route } from "react-router-dom"
import Works from './Components/Works';
import Services from './Components/Services';



function App() {

  
  return (
    <BrowserRouter>
    <div className="App">
      <Header></Header>
      <Route exact path="/MY-PORTFOLIO"><Home ></Home></Route>
      <Route exact path="/works"><Works></Works></Route>
      <Route exact path="/services"><Services></Services></Route>
      
      <Footer></Footer>
       </div>
       </BrowserRouter>
    
  );
}

export default App;
