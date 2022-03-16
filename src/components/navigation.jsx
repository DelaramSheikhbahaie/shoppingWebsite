import { useState , useEffect} from 'react'
import { useDispatch } from "react-redux";
import { setProducts } from '../redux/actions/productActions'
/* icons */
import arrow from '../svg_files/arrow.svg'
import search from '../svg_files/search.svg'
import bag from '../svg_files/bag.svg'
import home from '../svg_files/home.svg'
import heart from '../svg_files/heart.svg'
/* style */
import '../style/navigation.css'
/* config */
import Config from '../webpack.config'

const Header = ({title}) => {
    return ( 
        <>
            <div className='header'>
                <img src={arrow} alt="" />
                <p>{title}</p>
            </div>
            <Search/>
        </>
     );
}
const Search = () => {
    const [searchValue, setSearchValue] = useState('')

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
 const BottomMenu = () => {
     return ( 
         <div className='bottom-menu'>
             <img src={heart} alt="like" />
             <img src={home} alt="home" />
             <img src={bag} alt="buy" />
         </div>
      );
 }
export {Header , Search , SearchResults , BottomMenu};