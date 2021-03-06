import { useEffect , useState } from "react";
import { useParams , useNavigate } from "react-router-dom";
/* config */
import Config from '../webpack.config'
/* component */
import {Header , BottomMenu} from '../components/navigation'
/* style */
import '../style/productList.css'

const ProductList = () => {
    const [products, setProducts] = useState()
    const navigate = useNavigate();
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
            setProducts(receivedData)
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
            {products !== undefined ?
                products.map(({id , name , price , image}) =>(
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
                    ))
            :null
            }
        </section>
        <BottomMenu />
        </>
     );
}
 
export default ProductList;