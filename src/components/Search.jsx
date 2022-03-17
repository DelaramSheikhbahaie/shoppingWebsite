import { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
/* icon */
import search from '../svg_files/search.svg'
/* style */
import '../style/search.css'
import {getAllProducts} from '../apiCall'

const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const [showResults, setShowResults] = useState(false)

    const navigate = useNavigate();

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
        //   getAllProducts()
          navigate('/products')
        }
    }
    // useEffect(() => {
        
    // }, [searchValue])

    return ( 
        <div className='search-container'>
            <input 
                type="text" 
                placeholder='محصول های خود را جستجو کنید'
                onChange={handleSearch}
                onKeyPress={EnterHandler}
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