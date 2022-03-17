import { useState , useEffect } from "react";
import {useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const products = useSelector(state => state.allReducers.products)
    const [productDetails, setProductDetails] = useState()
    const { productId } = useParams();

    const getProductDetails = (id) =>{
        const product = products.filter(product => product.id === id)
        setProductDetails(product)
        console.log("id" , productId)
        console.log("detail" , ProductDetails)
    }
    useEffect(() => {
        getProductDetails(productId)
    }, [])

    return ( 
        <>
            <img src="" alt="" />
            <section></section>
            <section></section>
            <section></section>
        </>
     );
}
 
export default ProductDetails;