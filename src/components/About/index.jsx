import styles from "./index.module.css"
import $ from 'jquery';


const Abot = () =>{
  $(function () {
    $("#p1").click(function () {
      $("#p2").slideToggle(1000);
    });
    $("#p3").click(function () {
      $("#p4").slideToggle(1000);
    });
    $("#p5").click(function () {
      $("#p6").slideToggle(1000);
      
    });
    $("#p7").click(function (){
      $("#p8").slideToggle(1000)
    })
  });
    return (
        <>
        
        <div>
      <p className={styles.pag}>asked questions</p>
    </div>
    <div>
      <p id="p1" className={styles.pag}>about site</p>
      <p id="p2" className={styles.pag}>
      Our site is a store site and you can buy the product you want very easily,
      If you don't find a product on our site, you can upload the product name and photo in the contact me section so that we can make it available.
      
      </p>
    </div>
    <div>
      <p id="p3" className={styles.pag}>about us</p>
      <p id="p4" className={styles.pag}>
      Our site is an Iranian and foreign store site and we stock both Iranian and foreign products
      </p>
    </div>
    <div>
      <p id="p5" className={styles.pag}>Login guide</p>
      <p id="p6" className={styles.pag}>
      Hello, first register in the registration section of the site and enter the site after entering the username and password and then you can buy the product you like.
      </p>
    </div>
    <div>
      <p id="p7" className={styles.pag}>about us</p>
      <p id="p8" className={styles.pag}>
      Our site is an Iranian and foreign store site and we stock both Iranian and foreign products
      </p>
    </div>
        </>
    )
}

export default Abot;