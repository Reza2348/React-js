import { useContext } from "react";
import styles from "./index.module.css"
import BaksetContext from "../../contexts/BaksetContext";
import { Link } from "react-router-dom";


const Header = ()=>{
    const {basket} = useContext(BaksetContext);
    return(
        <header className={styles.header}>

            <Link to={"/"}>
            <h1 className={styles.title}>Store</h1>
            </Link>

           <Link to={"/about"}> 
           <a className={styles.About}>About Us</a>
           </Link>

           <Link to={"/Contact"}> 
           <a className={styles.About}>Contact Us</a>
           </Link>

           <Link to={"/Account"}> 
           <a className={styles.About}>log in</a>
           </Link>

           <Link to={"/Register"}> 
           <a className={styles.About}>sign up</a>
           </Link>

           <Link to={"/Cart"}> 
           <a className={styles.About}>
           <div className={styles.basketContainer}>
        <div className={styles.badge}>{basket.length}
            </div>  
       <svg width={48} data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path>
</svg>
    </div>
           </a>
           </Link>
    </header>
    )
}

export default Header;