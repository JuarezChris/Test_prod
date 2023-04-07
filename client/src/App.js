import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Product_form from './components/Product_form';
import DisplayAll from './components/DisplayAll';
import Nav from './components/Nav';
import { BrowserRouter,Routes,Route,Link} from "react-router-dom";
import OneProduct from './components/OneProduct';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/view/products" element={<DisplayAll />} />
        <Route path="/oneProduct/:_id" element={<OneProduct />} />
        <Route path="/create/product" element={<Product_form />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

