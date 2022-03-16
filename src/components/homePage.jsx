/* icons */
import clothing from '../svg_files/clothing.svg'
import shoes from '../svg_files/shoes.svg'
import beauty from '../svg_files/beauty.svg'
import tools from '../svg_files/tools.svg'
import pencil from '../svg_files/pencil.svg'
import house from '../svg_files/house.svg'
import food from '../svg_files/food.svg'
import toy from '../svg_files/toy.svg'
import sport from '../svg_files/sport.svg'
import office from '../svg_files/office.svg'
import vehicle from '../svg_files/vehicle.svg'
import handmade from '../svg_files/handmade.svg'
/* style */
import '../style/homePage.css'

const HomePage = () => {
    const homePageCategories = [
        {
            title: "پوشاک", 
            icon: clothing,
            icon_background_class: "icon-clothing"
        },
        {
            title: "کیف و کفش", 
            icon: shoes,
            icon_background_class: "icon-shoes"
        },
        {
            title: "زیبایی و سلامت", 
            icon: beauty,
            icon_background_class: "icon-beauty"
        },
        {
            title: "ابزارآلات", 
            icon: tools,
            icon_background_class: "icon-tools"
        },
        {
            title: "نوشت افزار", 
            icon: pencil,
            icon_background_class: "icon-pencil"
        },
        {
            title: "خانه و آشپزخانه", 
            icon: house,
            icon_background_class: "icon-house"
        },
        {
            title: "مواد غذایی", 
            icon: food,
            icon_background_class: "icon-food"
        },
        {
            title: "اسباب بازی", 
            icon: toy,
            icon_background_class: "icon-toy"
        },
        {
            title: "لوازم ورزشی", 
            icon: sport,
            icon_background_class: "icon-sport"
        },
        {
            title: "لوازم اداری", 
            icon: office,
            icon_background_class: "icon-office"
        },
        {
            title: "وسایل نقلیه", 
            icon: vehicle,
            icon_background_class: "icon-vehicle"
        },
        {
            title: "صنایع دستی", 
            icon: handmade,
            icon_background_class: "icon-handmade"
        }
    ]
    return ( 
        <>
            <h5 className='homepage-title'>دسته بندی های پیشنهادی</h5>
            <section className='category_section'>
                {homePageCategories.map(({title , icon , icon_background_class} , index)=>(
                    <div className='category_container' key={index}>
                        <div className={`category-image-section ${icon_background_class}`}>
                            <img src={icon} alt="" />
                        </div>
                        <h5>{title}</h5>
                    </div>
                ))}
            </section>
        </>
     );
}
 
export default HomePage;