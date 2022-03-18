import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { setProducts , setPreviwProducts } from '../redux/actions/productActions'
import { useDispatch , useSelector } from "react-redux";
/* config */
import Config from '../webpack.config'
/* icon */
import search from '../svg_files/search.svg'
/* style */
import '../style/search.css'

const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const [showResults, setShowResults] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSearch = (e) =>{
        if(e.target.value.length > 1){
            setSearchValue(e.target.value)
            setShowResults(true)
            getAllProducts(searchValue)
        }
        else{
            setShowResults(false)
        }
    }
    const EnterHandler = (e) => {
        if (e.key === "Enter") {
          setShowResults(false)
          navigate(`/productsList/${searchValue}`)
        }
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

    return ( 
        <div className='search-container'>
            <input 
                type="text" 
                placeholder='محصول های خود را جستجو کنید'
                onChange={handleSearch}
                onKeyPress={EnterHandler}
            />
            <img src={search} alt="search" />
            {showResults && <SearchResults 
                setShowResults= {setShowResults}
                searchValue= {searchValue}
            />}
        </div>
     );
}

const SearchResults = ({setShowResults , searchValue}) => {
    const products = useSelector(state => state.allReducers.products)
    const navigate = useNavigate();
    const showAllProducts = () => {
          setShowResults(false)
          navigate(`/productsList/${searchValue}`)
    }
    const showProductDetails = (productId) =>{
        navigate(`/products/${productId}`)
    }
    return ( 
        <div className='blur-background'>
            <div className='search-results-container'>
                {
                products.length !== 0 ?
                <>
                    {products.map(({id , name , seller} , index) =>(
                        index < 3 ?
                            <>
                                <div className='preview-results' 
                                    key={index} 
                                    onClick={()=>showProductDetails(id)}
                                >
                                    <p className='preview-product-name'>{name}</p>
                                    <p className='preview-product-seller'>{seller}</p>
                                </div>
                            </>
                    :null
                    ))}
                    <p className='show-all-products' onClick={showAllProducts}>مشاهده ی همه ی محصولات</p>
                </>
                :<p className='no-product-founded'>هیچ محصولی یافت نشد</p>
            }
            </div>
        </div>
     );
}
export { Search , SearchResults};