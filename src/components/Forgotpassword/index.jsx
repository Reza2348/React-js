import style from "./index.module.css";
import { CiMail } from "react-icons/ci";

const Forgotpassword = () =>{
    return(
        <>
          <div className={style.div}>
      <div className={style.wrapper}>
         <form action="">
             <h1>Forgot password</h1>
             <div className={style.inputbox}>
                 <input type="mail" placeholder="mail"  required/>
                 <CiMail className={style.icon} />
             </div>
             <div className={style.remember}>
                 <label><input type="checkbox" />Remember me</label>
                 <a href="#">Forgot password</a>
             </div>
             <button type="submit">Login</button>
             
             <div className={style.register}>
                 <p>Dont habe an account <a href="#">Register</a></p>
             </div>
         </form>
      </div>
      </div>
        </>
    )
}


export default Forgotpassword;