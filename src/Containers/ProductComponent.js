import React from "react";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
const ProductComponent = ()=>{
    const products= useSelector((state)=>state.allProducts.products);
    const renderList = products.map((product)=>{
        const {id,title,image,category,price} = product;
return(<div className="four column wide" key={id}>
    <Link to ={`/product.${id}`}>
<div className="ui link cards"></div>
<div className="card">
    <div className="image">
        <img src= {image} alt={title}/>
    </div>
    <div className="content"></div>
    <div className="header">{title}</div>
    <div className="meta price">{category}</div>
    
    <div className="meta price">${price}</div>
</div>
</Link>
</div>)
    })
   
return (
<>
{renderList}
</>
);
}
 export default ProductComponent;