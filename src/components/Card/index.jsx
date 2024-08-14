import { useContext } from 'react'
import styles from './index.module.css'
import BaksetContext from '../../contexts/BaksetContext'
import { useNavigate } from 'react-router-dom'




const Card=({id,title,image,category,price})=>{
    const {basket,setBasket} = useContext(BaksetContext)
    const navigate = useNavigate();
    const handlAddToBasket =(event) =>{
        event.stopPropagation();
        setBasket(prev =>{
            return [...prev,{id,title}]
        })

    }

    const handleClick = (productId) =>{
        navigate(`/Prduct/${productId}`)
       
    }
    

    return (
        <div className={styles.card} onClick={() => handleClick(id)}>
           <img src={image} />
          <div className={styles.body}>
          <span>{category}</span>
           <h3 className={styles.haz}>{title}</h3>
           <p className={styles.pa}>price:{price}$</p>
           {
            basket.find(item=>item.id===id)?
            <button className={`${styles.button} ${styles.has}`} onClick={handlAddToBasket}>Added</button>
            :
            <button className={styles.button} onClick={handlAddToBasket}>Add To Basket</button>

           }
          <svg className={styles.svg} data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"></path>
</svg>
          </div>
          
        </div>
    )
}


export default Card;