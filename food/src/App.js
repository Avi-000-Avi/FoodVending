import { Routes,Route,Link ,Switch} from 'react-router-dom';
import Products from './components/products';
import ProductDetails from './components/Product/productDetail';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">
          <h1>Checkout Our Menu</h1>
        </Link>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
