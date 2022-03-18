import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import HomePage from "./components/homePage";
import ProductDetails from './components/productDetail';
import ProductList from './components/productsList';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path ="/" element = {<HomePage/>} />
          <Route path ="/products/:searchValue" element = {<ProductList/>} />
          <Route path = "/products/:productId" element={<ProductDetails/>} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
