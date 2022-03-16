import { useState , useEffect} from 'react'
import { useDispatch , useSelector } from "react-redux";
import { setProducts } from '../redux/actions/productActions'
/* icon */
import search from '../svg_files/search.svg'
/* style */
import '../style/search.css'
/* config */
import Config from '../webpack.config'

const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const [showResults, setShowResults] = useState(false)
    const dispatch = useDispatch()

    const handleSearch = (e) =>{
        if(e.target.value.length > 1){
            setSearchValue(e.target.value)
            setShowResults(true)
            getProducts()
        }
        else{
            setShowResults(false)
        }
    }
    const reqOptions = {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
        }
      };
    const getProducts = () => {
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
        
    }, [searchValue])

    return ( 
        <div className='search-container'>
            <input 
                type="text" 
                placeholder='محصول های خود را جستجو کنید'
                onChange={handleSearch}
            />
            <img src={search} alt="search" />
            {showResults && <SearchResults/>}
        </div>
     );
}

const SearchResults = () => {
    const products = useSelector(state => state.allReducers.products)
    return ( 
        <div className='blur-background'>
            <div className='search-results-container'>
                {products.map(({name , seller} , index) =>(
                    index < 3 ?
                        <div className='preview-results' key={index}>
                            <p className='preview-product-name'>{name}</p>
                            <p className='preview-product-seller'>{seller}</p>
                        </div>
                   :null
                ))}
            </div>
        </div>
     );
}
export { Search , SearchResults};