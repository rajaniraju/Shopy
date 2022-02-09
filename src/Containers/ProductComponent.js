import React from "react";
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import {Card} from 'react-bootstrap';
const ProductComponent = ()=>{
    const products= useSelector((state)=>state.allProducts.products);
    const renderList = products.map((product)=>{
        const {id,title,image,category,price} = product;
return(<div key={id}>
    
    <Link to ={`/product.${id}`}>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src= {image} alt={title}/> 
    <Card.Body>
    <Card.Title>{title}</Card.Title>
    <Card.Text>
     {category}
     ${price}
    </Card.Text>
     </Card.Body>
    </Card>
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