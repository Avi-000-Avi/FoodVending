import { Routes,Route } from 'react-router-dom';
import Products from './components/products';
import ProductDetails from './components/Product/productDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Products/>} />
        
      </Routes>
      
    </div>
  );
}

export default App;
