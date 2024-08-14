import { useEffect, useState } from "react";
import styles from "./index.module.css"
import { useParams } from "react-router-dom";



const ProductPage = () =>{
    const [product,setProduct] = useState({})
    const {id}=useParams();

   useEffect(()=>{
      fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res=>res.json())
      .then(json=>setProduct(json))
  },[])
   return(
    <div className={styles.ProductPage}>
     <div className={styles.product}>
     <img src={product.image} />
     <h2>{product.title}</h2>
     <p>{product.description}</p>
     <h3 className={styles.ha}>price: {product.price}$</h3>
     </div>
     </div>
   )
   
    
}


export default ProductPage;