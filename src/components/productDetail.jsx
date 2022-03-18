import { useEffect } from "react";
import { useSelector , useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/actions/productActions";
/* config */
import Config from '../webpack.config'
/* component */
import {Header , BottomMenu} from '../components/navigation'
/* style */
import '../style/productDetails.css'

const ProductDetails = () => {
    const product = useSelector(state => state.product)
    // const {
    //     attribute,
    //     description, 
    //     image, 
    //     material, 
    //     name, 
    //     price, 
    //     seller 
    // } = product
    const { productId } = useParams();
    const dispatch = useDispatch()
    // console.log(product[Object.keys(product)[0]])
    const reqOptions = {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
        }
    };
    const getProductDetails = (id) =>{
        let product;
        fetch(
            Config.ConfigData.serverURL +
             `/product`,
              reqOptions
            )
        .then((response) => response.json())
        .then((receivedData) => {
            product = receivedData.filter(product => product.id === id)
            dispatch(selectedProduct(product))
        });
    }
    useEffect(() => {
        getProductDetails(productId)
    }, [])

    return (
        <>
            <Header title="جزییات محصول" hasSearch={false}/>
            {product !== undefined ?
                <div className="details-container">
                    <img src={product[Object.keys(product)[0]].image} alt="" />
                    <section className="product-name-seller-section">
                        <p className="product-title">{product[Object.keys(product)[0]].name}</p>
                        <p className="product-sub-title">{product[Object.keys(product)[0]].seller}</p>
                    </section>
                    <section className="product-price-section">
                        <p className="product-info-title">قیمت کل</p>
                        <p className="product-price">{product[Object.keys(product)[0]].price}</p>
                    </section>
                    <section className="product-info-section">
                        <p className="product-title">ویژگی محصول</p>
                        <div>
                            <p className="product-info-title">جنس</p>
                            <p className="product-info">{product[Object.keys(product)[0]].material}</p>
                        </div>
                        <div>
                            <p className="product-info-title">طرح</p>
                            <p className="product-info">{product[Object.keys(product)[0]].attribute}</p>
                        </div>
                    </section>
                    <button className="add-btn">افزودن به سبد خرید</button>
                </div>
            :null
            }
            <BottomMenu/>
        </> 
     );
}
 
export default ProductDetails;