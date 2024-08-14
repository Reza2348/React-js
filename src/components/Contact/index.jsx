import style from "./index.module.css";
const Contact = () =>{
    
    return(
        <body className={style.bo}>
            <section className={style.contact}>
            <h2>Contact Us</h2>
            <form action="#">
                <div className={style.box}>
                    <div className={style.field}>
                        <input type="text" placeholder="Full Name" className={style.item} />
                        <div className={style.error}>Full Name cant be blank</div>
                    </div>
                    <div className={style.field}>
                        <input type="text" placeholder="Email Address" className={style.item} />
                        <div className={style.error}>Email Address cant be blank</div>
                    </div>
                </div>
                <div className={style.box}>
                    <div className={style.field}>
                        <input type="text" placeholder="Phone Number" className={style.item} />
                        <div className={style.error}>Phone Number cant be blank</div>
                    </div>
                    <div className={style.field}>
                        <input type="text" placeholder="Subject" className={style.item}/>
                        <div className={style.error}>Subject cant be blank</div>
                    </div>
                </div>
                <div className={style.field}>
                <textarea name="" rows={10} cols={30} placeholder="Your Message"  className={style.item}/>
                <div className={style.error}>Message cant be blank</div>
                </div>
                <button className={style.but} type="submit">Swnd Message</button>
            </form>
            </section>
        </body>
    )
}


export default Contact;