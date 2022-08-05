import './App.css';
import longLogo from './Components/Images/wide.png';

import Home from './Components/Home'
import Enquiry from './Components/Enquiry';
import About from './Components/About'
import Services from './Components/Services';
import Pricing from './Components/Pricing';
import News from './Components/News';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

import { useState } from 'react';


function NavBarA(props) {
  return <a href="#navBar" id={props.id} className={props.className} onClick={props.onClick}>{props.children}</a>
}

function App() {
  const [Page, setPage] = useState("Home");

  const ToHome = () => { setPage("Home") }
  const ToEnquiry = () => { setPage("Enquiry") }
  const ToAbout = () => { setPage("About") }
  const ToServices = () => { setPage("Services") }
  const ToPricing = () => { setPage("Pricing") }
  const ToNews = () => { setPage("News") }
  const ToContact = () => { setPage("Contact") }

  function PageBody(props) {
    if (props.page === "Home") {
      return <Home className="PButt" leftButtonOnclick={ToHome} leftButtonText="Check Our Services" rightButtonHref="www.google.com" rightButtonText="Book A Meeting" />;
    }
    if (props.page === "Enquiry") {
      return <Enquiry />;
    }
    if (props.page === "About") {
      return <About />;
    }
    if (props.page === "Services") {
      return <Services />;
    }
    if (props.page === "Pricing") {
      return <Pricing />;
    }
    if (props.page === "News") {
      return <News />;
    }
    if (props.page === "Contact") {
      return <Contact />;
    }
  }
  function activeFun(page_n, page) {
    if (page_n === page) {
      return ("active")
    }
  }

  return (
    <div className="App">
      <div id="navBar">
        <div id="navInnerFlex">
          <div id="logo"><NavBarA onClick={ToHome}><img src={longLogo} alt="fivepeaks logo"/></NavBarA></div>
          <div id="navBarText">
            <NavBarA id={activeFun(Page, "Home")} onClick={ToHome}>Home</NavBarA>
            <NavBarA id={activeFun(Page, "Enquiry")} onClick={ToEnquiry}>Enquiry</NavBarA>
            <NavBarA id={activeFun(Page, "About")} onClick={ToAbout}>About</NavBarA>
            <NavBarA id={activeFun(Page, "Services")} onClick={ToServices}>Services</NavBarA>
            <NavBarA id={activeFun(Page, "Pricing")} onClick={ToPricing}>Pricing</NavBarA>
            <NavBarA id={activeFun(Page, "News")} onClick={ToNews}>News</NavBarA>
            <NavBarA id={activeFun(Page, "Contact")} onClick={ToContact}>Contact</NavBarA>
          </div>
        </div>
      </div>
      <div>
        <PageBody page={Page} />
      </div>
      <Footer>
        <NavBarA id={activeFun(Page, "Home")} onClick={ToHome}>Home</NavBarA>
        <NavBarA id={activeFun(Page, "Enquiry")} onClick={ToEnquiry}>Enquiry</NavBarA>
        <NavBarA id={activeFun(Page, "About")} onClick={ToAbout}>About</NavBarA>
        <NavBarA id={activeFun(Page, "Services")} onClick={ToServices}>Services</NavBarA>
        <NavBarA id={activeFun(Page, "Pricing")} onClick={ToPricing}>Pricing</NavBarA>
        <NavBarA id={activeFun(Page, "News")} onClick={ToNews}>News</NavBarA>
        <NavBarA id={activeFun(Page, "Contact")} onClick={ToContact}>Contact</NavBarA>
      </Footer>
      {/* above is the navbar */}
    </div>
  );
  }

export default App;
