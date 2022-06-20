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
  return <a href={props.href} onClick={props.onClick}>{props.children}</a>
}

function PageBody(props) {
  if (props.page === "Home") {
    return <Home/>;
  }
  if (props.page === "Enquiry") {
    return <Enquiry/>;
  }
  if (props.page === "About") {
    return <About/>;
  }
  if (props.page === "Services") {
    return <Services/>;
  }
  if (props.page === "Pricing") {
    return <Pricing/>;
  }
  if (props.page === "News") {
    return <News/>;
  }
  if (props.page === "Contact") {
    return <Contact/>;
  }
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

  return (
    <div className="App">
      <div id="navBar">
        <div id="navInnerFlex">
          <div id="logo"><NavBarA onClick={ToHome}><img src={longLogo} alt="fivepeaks logo"/></NavBarA></div>
          <div id="navBarText">
            <NavBarA onClick={ToHome}>Home</NavBarA>
            <NavBarA onClick={ToEnquiry}>Enquiry</NavBarA>
            <NavBarA onClick={ToAbout}>About</NavBarA>
            <NavBarA onClick={ToServices}>Services</NavBarA>
            <NavBarA onClick={ToPricing}>Pricing</NavBarA>
            <NavBarA onClick={ToNews}>News</NavBarA>
            <NavBarA onClick={ToContact}>Contact</NavBarA>
          </div>
        </div>
      </div>
      <div>
        <PageBody page={Page} />
      </div>
      <Footer/>
      {/* above is the navbar */}
    </div>
  );
  }

export default App;
