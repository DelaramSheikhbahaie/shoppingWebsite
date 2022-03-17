import { setProducts , setPreviwProducts } from './redux/actions/productActions'
import { useDispatch , useSelector } from "react-redux";
/* config */
import Config from './webpack.config'

const reqOptions = {
    method: "Get",
    headers: {
      "Content-Type": "application/json",
    }
  };
  export const getAllProducts = (searchValue) => {
    fetch(
        Config.ConfigData.serverURL +
         `/product?search=${searchValue}`,
          reqOptions
        )
    .then((response) => response.json())
    .then((receivedData) => {
        useDispatch(setProducts(receivedData))
    });
}