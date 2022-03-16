import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import HomePage from "./components/homePage";
import ProductList from './components/productsList';
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path ="/" element = {<HomePage/>} />
          <Route path ="/products" element = {<ProductList/>} />
          {/* <Route path = "/product/:productId" element={<ProductDetail/>} /> */}
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
