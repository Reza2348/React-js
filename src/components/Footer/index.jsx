
import styles from "./index.module.css"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer =() =>{
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.footercol}>
                        <h4>company</h4>
                        <ul>
                            <li><a href="#">about us</a></li>
                            <li><a href="#">our services</a></li>
                            <li><a href="#">privacy policy</a></li>
                            <li><a href="#">affiliate program</a></li>
                        </ul>
                    </div>
                    <div className={styles.footercol}>
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">shipping</a></li>
                            <li><a href="#">returns</a></li>
                            <li><a href="#">order</a></li>
                            <li><a href="#">payment options</a></li>
                        </ul>
                    </div>
                    <div className={styles.footercol}>
                        <h4>online shop</h4>
                        <ul>
                            <li><a href="#">watch</a></li>
                            <li><a href="#">bag</a></li>
                            <li><a href="#">shoes</a></li>
                            <li><a href="#">dress</a></li>
                        </ul>
                    </div>
                    <div className={styles.footercol}>
                        <h4>follow us</h4>
                        <div className={styles.social}>
                            <a href="#"><FaFacebook  /></a>
                            <a href="#"><FaTwitter  /></a>
                            <a href="#"><FaInstagramSquare   /></a>
                            <a href="#"><FaLinkedin    /></a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;
