import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from "react-redux";
/* config */
import Config from '../webpack.config'
/* component */
import {Header , BottomMenu} from '../components/navigation'
import { setProducts , setPreviwProducts } from '../redux/actions/productActions'
/* style */
import '../style/productList.css'
const ProductList = () => {
    const products = useSelector(state => state.allReducers.products)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { searchValue } = useParams();

    const showProductDetails = (productId) =>{
        navigate(`/products/${productId}`)
    }

    const reqOptions = {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
        }
    };
    const getAllProducts = () => {
        fetch(
            Config.ConfigData.serverURL +
             `/product?search=${searchValue}`,
              reqOptions
            )
        .then((response) => response.json())
        .then((receivedData) => {
            dispatch(setProducts(receivedData))
        });
    }
    useEffect(() => {
        getAllProducts()
    }, [searchValue])
    return ( 
        <>
        <Header 
                title="جستجو"
                hasSearch={true}
            />
        <section className="productList-container">
            <h5> تمام محصولات:</h5>
            {products.map(({id , name , price , image}) =>(
                <div 
                    className='preview-results' 
                    key={id} 
                    onClick={()=>showProductDetails(id)}>
                    <div>
                        <img src={image} alt="" />
                        <p className="product-name">{name}</p>
                    </div>
                    <p className="product-price">{price} $ </p>
                </div>
                ))}
        </section>
        <BottomMenu />
        </>
     );
}
 
export default ProductList;