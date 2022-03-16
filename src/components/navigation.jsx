/* icons */
import arrow from '../svg_files/arrow.svg'
import search from '../svg_files/search.svg'
/* style */
import '../style/navigation.css'

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
    return ( 
        <div className='search-container'>
            <input type="text" placeholder='محصول های خود را جستجو کنید'/>
            <img src={search} alt="" />
        </div>
     );
}
 
export {Header , Search};