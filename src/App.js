import React from "react";
import ReactDOM from "react-dom";
import {useWindowSize, useWindowWidth, useWindowHeight} from '@react-hook/window-size';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

function App() {

const currentWidth = useWindowWidth();

 return (
  <div>
    <nav class="navbar bg-primary navbar-expand-lg fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" style={{color: "white"}} href="#">The Product</a>
          <button class="navbar-toggler shadow-none" style={{border: "none"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <FontAwesomeIcon className="toggler" icon={faBars} />         
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header offcanvas-wrapper px-4 pb-0">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas Nav</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            
            <div class="offcanvas-body offcanvas-wrapper p-4 pt-0 p-lg-0">
            <hr className="d-lg-none"></hr>
                  <ul class="navbar-nav justify-content-end flex-grow-1 flex-row flex-wrap">
                    <li class="nav-item col-6 col-lg-auto">
                      <a class="nav-link active" style={currentWidth >= 991 ? {color: "white"} : {color: "black"}} aria-current="page" href="#">Home</a>
                    </li>
                  
                    <li class="nav-item col-6 col-lg-auto">
                      <a class="nav-link" style={currentWidth >= 991 ? {color: "white"} : {color: "black"}} href="#features">Features</a>
                    </li>
                    

                    <li class="nav-item col-6 col-lg-auto">
                      <a class="nav-link" style={currentWidth >= 991 ? {color: "white"} : {color: "black"}} href="#pricing">Pricing</a>
                    </li>
                    <li class="nav-item col-6 col-lg-auto">
                      <a class="nav-link" style={currentWidth >= 991 ? {color: "white"} : {color: "black"}} href="#contact">Contact Us</a>
                    </li>
                    

                  </ul>
                  <hr className="d-lg-none"></hr>
                </div>
          </div>
        </div>
    </nav>

    <main>
    <section className="main-page" id="home">
      <div className="row">
        <div className="presentation-half split-screen col-lg-6">
          <h1 className="main-text">Product <br></br>Presentation</h1>
          <img className="image" src="./images/Allura.png"></img>
        </div>

        <div className="application-half split-screen col-lg-6">
          <h1 className="main-text">Application <br></br>Design</h1>
          <img className="image" src="./images/Freelancing.png"></img>
        </div>
      </div>
    </section>


    <section className="features-page" id="features">

      <div className="features-content-container">
        <img className="image" src="./images/Mobile.png"></img>
        <h2 className="features-text">Bold new designs <br></br> A brand new face. <br></br> This is The Product 22.</h2>
      </div>

    </section>


    <section className="pricing-page" id="pricing">

    <div className="card-container row">

      <div className="pricing-div col-lg-4">
 
        <div className="card" style={{"width": "18rem"}}>
          <ul className="list-group list-group-flush ">
            <li className="list-group-item title">The Product Mini</li>
            <li className="list-group-item">150mb</li>
            <li className="list-group-item">LED Standard Touch screen display</li>
          </ul>
          <div className="card-footer">
            $150.99
          </div>
        </div>
      </div>

      <div className="pricing-div col-lg-4">
     
        <div className="card" style={{"width": "18rem"}}>
          <ul className="list-group list-group-flush ">
            <li className="list-group-item title">The Product 22</li>
            <li className="list-group-item">200mb</li>
            <li className="list-group-item">LED Standard Touch screen display</li>
          </ul>
          <div className="card-footer">
            $199.99
          </div>
        </div>
      </div>

      <div className="pricing-div col-lg-4">
        <div className="card" style={{"width": "18rem"}}>
          <ul className="list-group list-group-flush ">
            <li className="list-group-item title">The Product Pro</li>
            <li className="list-group-item">400mb</li>
            <li className="list-group-item">OLED Enameled touch screen display</li>
          </ul>
          <div className="card-footer">
            $299.99
          </div>
        </div>
      </div>

    </div>

    </section>


    </main>

    <div className="footer bg-primary">
      <p className="footer-text">© The Product 22 2022</p>
    </div>
  </div>
 )
}

export default App;
