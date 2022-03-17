/* icons */
import arrow from '../svg_files/arrow.svg'
import bag from '../svg_files/bag.svg'
import home from '../svg_files/home.svg'
import heart from '../svg_files/heart.svg'
/* style */
import '../style/navigation.css'
/* component */
import { Search } from './Search'

const Header = ({title, hasSearch}) => {
    return ( 
        <>
            <div className='header'>
                <img src={arrow} alt="" />
                <p>{title}</p>
            </div>
            {hasSearch && <Search/>}
        </>
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
export {Header , BottomMenu};