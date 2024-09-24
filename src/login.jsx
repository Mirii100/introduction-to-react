import './styles.css';
import user_icon from './assets/images/myuser.png';
import email_icon from './assets/images/myemail.png';
import password_icon  from './assets/images/security.png';
import { useState } from 'react';



export default  function Hello(){

const [action,setAction]=useState("Sign Up");






    return(
       
        <div className='container'>
        <div className="header">
            <h1>
            Alexia_tech
            </h1>
            
            <div className="text">{action} </div>
            <div className="underline"></div>
            <div className="inputs">
                
                {
                    action==="login"?<div></div>:
                    <div className="input">                
                <img src={user_icon} alt="image" />
                    <input type="text" placeholder='Name' />
                    </div>
                }
            
                    <div className="input">
                <img src={email_icon} alt="image" />
                    <input type="email" placeholder='Your email' />
                    </div>
                    <div className="input">
                <img src={password_icon} alt="image" />
                    <input type="password"  placeholder='your prefferd password '/>
                    </div>
            </div>

        </div>

        {
            action==="sign up"?<div></div>:
            <div className="forgot-password">
            lost password??
            <span>click here</span>
        </div>
        }
        
        <div className="submit-container">
            <div className={action==="login"?"submit gray":"submit"} onClick={()=>{setAction("sign up")}}>sign up</div>
            <div className={action==="sign up"?"submit gray":"submit"} onClick={()=>{setAction("login")}}>login</div>
        </div>
        </div>
       
    );
}