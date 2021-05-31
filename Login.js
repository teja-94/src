import React, { useState }from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import {auth} from './Firebase'


function Login() {
    const history= useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword]= useState('');
    

    const login = (event) => {
        event.preventDefault(); //this stops the refresh.
        //do the login logic... 
        auth
            .signInWithEmailAndPassword(email, password)
            .then((auth) => {
                //redirect to homepage
                history.push("/")
            
            })
            .catch((e)=> alert(e.message));
    }

    const register = (event) => {
        event.preventDefault(); //this stops the refresh.
        //do the register logic...
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
            //redirect to homepage
            history.push("/")
        
        })
        .catch((e)=> alert(e.message));
}
   
return (
        <div className="login">
            <Link to ="/">
            <img className="login_logo"
                src="MC Logo.png" alt="" />

            </Link>
            <div className="login_container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
                    <button onClick={login} type="submit" className="login_signInButton">Sign In</button>
                </form>
                
                <p>By signing-in you agree to Millets Clique's 
            Conditions of Use & Sale.Please see our Privacy Notice,
            and our Cookies Notice and our  ineterest-Based Ads Notice.
                </p>
            
            <button onClick={register} className="login_registerButton">
                Create Your Millet Clique Account</button> 
            
            </div>
            </div>
   
   
)
};

export default Login
