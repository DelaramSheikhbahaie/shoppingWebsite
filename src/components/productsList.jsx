import {useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
/* component */
import {Header , BottomMenu} from '../components/navigation'
/* style */
import '../style/productList.css'
const ProductList = () => {
    const products = useSelector(state => state.allReducers.products)
    const navigate = useNavigate();

    const showProductDetails = (productId) =>{
        navigate(`/products/${productId}`)
    }
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