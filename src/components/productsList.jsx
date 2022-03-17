import {useSelector } from "react-redux";
import { Link } from "react-router-dom";
/* component */
import {Header , BottomMenu} from '../components/navigation'
/* style */
import '../style/productList.css'
const ProductList = () => {
    const products = useSelector(state => state.allReducers.products)
    return ( 
        <>
        <Header title="جستجو"/>
        <section className="productList-container">
            <h5> تمام محصولات:</h5>
            {products.map(({id , name , price , image} , index) =>(
                <div className='preview-results' key={index}>
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