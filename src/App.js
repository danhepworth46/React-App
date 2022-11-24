import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEllipsis, faUmbrella } from '@fortawesome/free-solid-svg-icons'

function App() {

 return (
  <div>
  
    <nav className="navbar bg-primary navbar-expand-lg fixed-top">
        <div className="container-fluid"> 
          <button className="navbar-toggler shadow-none hidden-lg" style={{border: "none"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebar" aria-controls="sidebar">
          <FontAwesomeIcon className="toggler" icon={faEllipsis}/>         
          </button>
          <a className="navbar-brand" style={{color: "white"}} href="#home">The Product <FontAwesomeIcon icon={faUmbrella} /></a>
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
                      <a className="nav-link" aria-current="page" href="#home">Home</a>
                    </li>
                  
                    <li className="nav-item col-6 col-lg-auto">
                      <a className="nav-link" href="#features">Features</a>
                    </li>
                    

                    <li className="nav-item col-6 col-lg-auto">
                      <a className="nav-link" href="#pricing">Pricing</a>
                    </li>
                    <li className="nav-item col-6 col-lg-auto">
                      <a className="nav-link" href="#contact">Contact Us</a>
                    </li>
                    

                  </ul>
                  <hr className="d-lg-none"></hr>
                </div>
          </div>
        </div>
    </nav>

    <div className="main-container">
      <div className="sidebar navbar-expand-lg">
      
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="sidebar" aria-labelledby="sidebarLabel">
          <div className="offcanvas-header offcanvas-wrapper px-4 pb-0">
            <h5 className="offcanvas-title" id="sidebarLabel">Offcanvas Nav</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body offcanvas-wrapper p-4 pt-0 p-lg-0">
          <hr className="d-lg-none"></hr>
            <ul className="sidebar-list">
              <li className="sidebar-list-item nav-item"><a className="nav-link" href="#">Connectivity</a></li>
              <li className="sidebar-list-item nav-item"><a className="nav-link" href="#">Our Story</a></li>
              <li className="sidebar-list-item nav-item"><a className="nav-link" href="#">Sharing with friends</a></li>
              <li className="sidebar-list-item nav-item"><a className="nav-link" href="#">Outreach</a></li>
              <li className="sidebar-list-item nav-item"><a className="nav-link" href="#">2021 Lineup</a></li>
              <li className="sidebar-list-item nav-item"><a className="nav-link" href="#">FAQ's</a></li>
              <li className="sidebar-list-item nav-item"><a className="nav-link" href="#">About us</a></li>
              <li className="sidebar-list-item nav-item"><a className="nav-link" href="#">Ask Us</a></li>  
              <input className="form-control me-2 search shadow-none" type="search" placeholder="Search"></input>
            </ul>
          </div>  
        </div>
      </div>
  

      <main className="main">
      <section className="first-section">
        <section className="main-page" id="home">
        <h1 className="section-heading">Latest News</h1>
        <div className="row box-container">
          <div className="col-md-4"><div className="box"><p className="box-heading">Introduction the Product. A step-by-step manual on how to get the best out of your Product.</p></div></div>
          <div className="col-md-4"><div className="box"><p className="box-heading">Introduction the Product. A step-by-step manual on how to get the best out of your Product.</p></div></div>
          <div className="col-md-4 "><div className="box"><p className="box-heading">Introduction the Product. A step-by-step manual on how to get the best out of your Product.</p></div></div>
        </div>
        </section>


        <section className="features-page" id="features">

          <div className="features-content-container row">
            <div className="col-lg-6 image-container g-0"><img className="image" src="./images/watch.jpg" alt="The Product watch"></img></div>
            <h2 className="features-text col-lg-6">Bold new designs <br></br> A brand new face. <br></br> This is The Product 22.</h2>
          </div>

        </section>
      </section>

      <hr className="section-break" style={{opacity: "100"}}></hr>


      <section id="" className="second-section">
        <section className="pricing-page" id="pricing">
        <h1 className="section-heading">2022 Line-Up</h1>
          <div className="row card-container">
            <div className="pricing-div col-xxl-3 col-sm-6">
      
              <div className="card" style={{width: "18rem"}}>
                <ul className="list-group list-group-flush ">
                  <li className="list-group-item title ellipsis">The Product Mini</li>
                  <li className="list-group-item">150mb</li>
                
                  <li className="list-group-item e-lg">LED Standard Touch screen display</li>
                </ul>
                <div className="card-footer">
                  $150.99
                </div>
              </div>
            </div>

            <div className="pricing-div col-xxl-3 col-sm-6">
          
              <div className="card" style={{width: "18rem"}}>
                <ul className="list-group list-group-flush ">
                  <li className="list-group-item title ellipsis">The Product 22</li>
                  <li className="list-group-item">200mb</li>
                  <li className="list-group-item e-lg">LED Standard Touch screen display</li>
                </ul>
                <div className="card-footer">
                  $199.99
                </div>
              </div>
            </div>

            <div className="pricing-div col-xxl-3 col-sm-6">
              <div className="card" style={{width: "18rem"}}>
                <ul className="list-group list-group-flush ">
                  <li className="list-group-item title ellipsis">The Product Pro</li>
                  <li className="list-group-item">400mb</li>
                  <li className="list-group-item e-lg">OLED Enameled touch screen display</li>
                </ul>
                <div className="card-footer">
                  $299.99
                </div>
              </div>
            </div>

            <div className="pricing-div col-xxl-3 col-sm-6">
              <div className="card" style={{width: "18rem"}}>
                <ul className="list-group list-group-flush ">
                  <li className="list-group-item title ellipsis">The Product Pro X</li>
                  <li className="list-group-item">500mb</li>
                  <li className="list-group-item e-lg">OLED Enameled touch screen display</li>
                </ul>
                <div className="card-footer">
                  $329.99
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="" className="carousel-section">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./images/watch-square.jpg" className="d-block w-100" alt="Square Watch"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>Some representative placeholder content for the first slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="./images/watch.jpg" className="d-block w-100" alt="Square Watch"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>Some representative placeholder content for the second slide.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="./images/watch-thin.jpg" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>Some representative placeholder content for the third slide.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
        
      </section>

      {/* <hr className="section-break" style={{opacity: "100"}}></hr> */}


      </main>
    </div>

    <div className="footer">
      <p className="footer-text">© The Product <FontAwesomeIcon icon={faUmbrella}/> 2022</p>
    </div>
  </div>
 )
}

export default App;