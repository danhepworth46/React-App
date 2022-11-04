import React, {useState} from "react";
import ReactDOM from "react-dom";
import {useWindowSize, useWindowWidth, useWindowHeight} from '@react-hook/window-size';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

function App() {

const currentWidth = useWindowWidth();

// const [padding, setPadding] = useState(88)
// const cardPadding = document.getElementsByClassName('pricing-div')[0].style.currentWidth;
// console.log(cardPadding)

// function responsivePadding(){
//   setPadding(2)
// }


 return (
  <div>
    <nav className="navbar bg-primary navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" style={{color: "white"}} href="#">The Product</a>
          <button className="navbar-toggler shadow-none" style={{border: "none"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <FontAwesomeIcon className="toggler" icon={faBars} />         
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header offcanvas-wrapper px-4 pb-0">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas Nav</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            
            <div className="offcanvas-body offcanvas-wrapper p-4 pt-0 p-lg-0">
            <hr className="d-lg-none"></hr>
                  <ul className="navbar-nav justify-content-end flex-grow-1 flex-row flex-wrap">
                    <li className="nav-item col-6 col-lg-auto">
                      <a className="nav-link active" style={currentWidth >= 990 ? {color: "white"} : {color: "black"}} aria-current="page" href="#">Home</a>
                    </li>
                  
                    <li className="nav-item col-6 col-lg-auto">
                      <a className="nav-link" style={currentWidth >= 990 ? {color: "white"} : {color: "black"}} href="#features">Features</a>
                    </li>
                    

                    <li className="nav-item col-6 col-lg-auto">
                      <a className="nav-link" style={currentWidth >= 990 ? {color: "white"} : {color: "black"}} href="#pricing">Pricing</a>
                    </li>
                    <li className="nav-item col-6 col-lg-auto">
                      <a className="nav-link" style={currentWidth >= 990 ? {color: "white"} : {color: "black"}} href="#contact">Contact Us</a>
                    </li>
                    

                  </ul>
                  <hr className="d-lg-none"></hr>
                </div>
          </div>
        </div>
    </nav>


      <div className="sidebar">
        <ul>
          <li className="sidebar-list-item">Connectivity</li>
          <li className="sidebar-list-item">Our Story</li>
          <li className="sidebar-list-item">Sharing with friends</li>
          <li className="sidebar-list-item">Outreach</li>
          <li className="sidebar-list-item">2021 Lineup</li>
          <li className="sidebar-list-item">FAQ's</li>
          <li className="sidebar-list-item">About us</li>
          <li className="sidebar-list-item">Ask Us</li>
        
          <input className="form-control me-2 search shadow-none" type="search" placeholder="Search"></input>

        </ul>

      </div>

    <main className="main">
    <section className="main-page" id="home">
    <h2>News</h2>
     <div className="row box-container">
      <div className="col-lg-4"><div className="box"><p className="box-heading">Introduction the Product. A step-by-step manual on how to get the best out of your Product.</p></div></div>
      <div className="col-lg-4"><div className="box"><p className="box-heading">Introduction the Product. A step-by-step manual on how to get the best out of your Product.</p></div></div>
      <div className="col-lg-4 "><div className="box"><p className="box-heading">Introduction the Product. A step-by-step manual on how to get the best out of your Product.</p></div></div>
     </div>
    </section>


    <section className="features-page" id="features">

      <div className="features-content-container row">
        <div className="col-lg-6 image-container g-0"><img className="image" src="./images/watch.jpg"></img></div>
        <h2 className="features-text col-lg-6">Bold new designs <br></br> A brand new face. <br></br> This is The Product 22.</h2>
      </div>

    </section>
    {/* onChange={responsivePadding} style={{"paddingLeft": {padding} + "px", "paddingRight": {padding} + "px"}} */}
    <section className="pricing-page " id="pricing" >
      <div className="row card-container">
        <div className="pricing-div col-xl-3 col-lg-6">
  
          <div className="card" >
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

        <div className="pricing-div col-xl-3 col-lg-6">
      
          <div className="card" >
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

        <div className="pricing-div col-xl-3 col-lg-6">
          <div className="card" >
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

        <div className="pricing-div col-xl-3  col-lg-6">
          <div className="card" >
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