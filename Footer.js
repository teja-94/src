import React, {Component} from 'react';
import {render} from 'react-dom';
import Home from './Home';
import Checkout from './Checkout';
import './Footer.css';
//import Contact from './Contact'


export default class Footer extends Component {
  render() {
    return (

    	 <div className="footer-div">
        <p className={ "footer-text"}>
        	<p id="footer"> &copy; {new Date().getFullYear()} Copyright: <a href="https://teja-94.github.io/"> Teju-Teja </a> </p>

  </p>
      
      </div>
    	
     /* <footer className="page-footer blue-grey darken-1">
          <div >
          <div>
            <div className="footer-copyright">

                    <div>
                      <a href="https://github.com/teja804/Millets-Web">
                        Download Source code{" "}
                      </a>
                    </div>

                    <div>
                      <a href="https://youtu.be/1_IYL9ZMR_Y">
                        Watch Learning Video
                        </a>
                      </div>


                    <div>
                      <a href="https://codingwithbasir.com/course/learn-react-redux/">
                        Learn React From Scratch
                      </a>
                    </div>


                </div>
                </div>
            <div className="container">
            &copy; {new Date().getFullYear()} Copyright: <a href="https://www.linkedin.com/in/tejeswini-katuboyana-339800147/"> Teju-Teja </a>


            </div>
            </div>

        </footer> */
    )
  }
}