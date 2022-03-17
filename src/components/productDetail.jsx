import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/actions/productActions";
/* component */
import {Header , BottomMenu} from '../components/navigation'
/* style */
import '../style/productDetails.css'

const ProductDetails = () => {
    const products = useSelector(state => state.allReducers.products)
    const product = useSelector(state => state.product)
    const {
        attribute,
        description, 
        image, 
        material, 
        name, 
        price, 
        seller 
    } = product[Object.keys(product)[0]]
    const { productId } = useParams();
    const dispatch = useDispatch()
    // console.log(product[Object.keys(product)[0]])
    const getProductDetails = (id) =>{
        const product = products.filter(product => product.id === id)
        dispatch(selectedProduct(product))
    }
    useEffect(() => {
        getProductDetails(productId)
    }, [])

    return (
        <>
            <Header title="جزییات محصول" hasSearch={false}/>
            <div className="details-container">
                <img src={image} alt="" />
                <section className="product-name-seller-section">
                    <p className="product-title">{name}</p>
                    <p className="product-sub-title">{seller}</p>
                </section>
                <section className="product-price-section">
                    <p className="product-info-title">قیمت کل</p>
                    <p className="product-price">{price}</p>
                </section>
                <section className="product-info-section">
                    <p className="product-title">ویژگی محصول</p>
                </section>
                <button className="add-btn">افزودن به سبد خرید</button>
            </div>
            <BottomMenu/>
        </> 
     );
}
 
export default ProductDetails;