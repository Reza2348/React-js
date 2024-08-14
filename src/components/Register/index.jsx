import style from "./index.module.css";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { CiMail } from "react-icons/ci";


const Register = () =>{
    return(
        
      <div className={style.div}>
      <div className={style.wrapper}>
         <form action="">
             <h1>sign up</h1>
             <div className={style.inputbox}>
                 <input type="text" placeholder="Username"  required/>
                 <CiUser className={style.icon}/>
             </div>
             <div className={style.inputbox}>
                 <input type="mail" placeholder="mail"  required/>
                 <CiMail className={style.icon} />
             </div>
             <div className={style.inputbox}>
                 <input type="password" placeholder="password"  required/>
                 <CiLock className={style.icon} />
             </div>
             <div className={style.remember}>
                 <label>
                    <input type="checkbox" />
                    Remember me
                    </label>
                 <a href="#">Forgot password</a>
             </div>

             

             <button type="submit">Login</button>
             
             <div className={style.register}>
                 <p>Dont habe an account <a href="#">Register</a></p>
             </div>
         </form>
      </div>
      </div>
    )
}


export default Register;