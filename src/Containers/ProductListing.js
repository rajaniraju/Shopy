import React,{useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProductComponent from "./ProductComponent";
import {SET_PRODUCTS}from "../Redux/Actions/productActions";
import axios from 'axios';
const ProductList = ()=>{
    const products= useSelector((state)=>state);
    const dispatch = useDispatch();
    const fetchProducts = async ()=>{
      const response =  await axios.get ('https://fakestoreapi.com/products').catch((err)=>{console.log("error",err)})
    dispatch(SET_PRODUCTS(response.data));
    }
    console.log(products);
 useEffect(()=>{
     fetchProducts();
 },[])
 console.log("Products:",products)
return (<>
<div className="ui grid container">
<ProductComponent/>
</div></>)
}
 export default ProductList;