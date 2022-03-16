import { useState , useEffect} from 'react'
import { useDispatch } from "react-redux";
import { setProducts } from '../redux/actions/productActions'
/* icon */
import search from '../svg_files/search.svg'
/* style */
import '../style/search.css'
/* config */
import Config from '../webpack.config'

const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useDispatch()

    const handleSearch = (e) =>{
        if(e.target.value.length > 1)
            setSearchValue(e.target.value)
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
        getProducts()
    }, [searchValue])

    return ( 
        <div className='search-container'>
            <input 
                type="text" 
                placeholder='محصول های خود را جستجو کنید'
                onChange={handleSearch}
            />
            <img src={search} alt="search" />
        </div>
     );
}

const SearchResults = () => {
    return ( 
        <div className='blur-background'>
            <div className='search-results-container'>

            </div>
        </div>
        
     );
}
export { Search , SearchResults};