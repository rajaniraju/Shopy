import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct,RemoveSelectedProduct } from "../Redux/Actions/productActions";
const ProductDetails = ()=>{
    const product= useSelector((state)=>state.products);
    const {image,title,price,category,description}= product;
    const {productId} = useParams();
    const dispatch = useDispatch();
    console.log (product);
    const fetchProductDetails = async()=>{ 
         const response= await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{console.log("error",err)})
       
  dispatch(selectedProduct(response.data)) ; 
}
useEffect(()=>{
    if (productId && productId!=="")
    fetchProductDetails();
    return ()=>{
        dispatch(RemoveSelectedProduct());
    }
},[productId])
return (<div>
    {Object.keys(product).length===0?(<div> .. Loading</div>) :
   
    (<div>{image}
    {title}
    {price}
    {category}
    {description}
    </div>)}
    </div>)
}
 export default ProductDetails;