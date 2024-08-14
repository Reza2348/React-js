
import { useEffect } from "react";
import styles from "./index.module.css";
import { useState } from "react";
import Card from "../Card";

const HOMEPAGE = ()=>{
    const [products,setproducts]= useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setproducts(json))
    },[])
    return (
        
        <section className={styles.cantainer}>
            
       {
        products.map(product=>{
            return <Card key={product.id} {...product}/> 
             
        })
       }
        </section>
    ) 
}
export default HOMEPAGE;