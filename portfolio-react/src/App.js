import './App.css';
import longLogo from './Components/Images/wide.png';

import Home from './Components/Home'
import Enquiry from './Components/Enquiry';
import About from './Components/About'
import Services from './Components/Services';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { useState } from 'react';
import Button from './Components/Button';


function NavBarA(props) {
  return <a href="#navBar" id={props.id} className={props.className} onClick={props.onClick}>{props.children}</a>
}

function App() {

  // page setup to allow the state of the page components to refresh when a change occurs ie function "ToHome" is called

  const [Page, setPage] = useState("Home");

  const ToHome = () => { setPage("Home") }
  const ToEnquiry = () => { setPage("Enquiry") }
  const ToAbout = () => { setPage("About") }
  const ToServices = () => { setPage("Services") }
  const ToPricing = () => { setPage("Pricing") }
  const ToContact = () => { setPage("Contact") }

  // another state object allowing the buttons on the services page to create an overlay with corresponding text


  function PageBody(props) {
    if (props.page === "Home") {
      return <div><Home 
      buttonLeft = {
          <Button id="LB" onClick={ToServices} className={"PButt"}>Check out services</Button>
      }
      buttonRight = {
        <Button id="RB" onClick={ToAbout} className={"PButt"}>About us</Button>
      }/>
      </div>;
    }

    if (props.page === "Enquiry") {
      return <Enquiry />;
    }
    if (props.page === "About") {
      return <About href="https://calendly.com/jason-fivepeaks/initial-client-meeting" />;
    }
    if (props.page === "Services") {
      return <Services 

        mainHeader="Accounting Services"
        mainText="

At Five Peaks Accounting we aim to provide Queenstown businesses with Accounting advice and supoport when you need it, not just when you ask for it. We help you manage every aspect of your business and because we establish a one-on-one relationship with each of our clients, our advice is tailor-made for your business. We've also developed our traditional accounting practices into innovative client-focused services where we meet with you in our Frankton Queenstown Office. Our flexibility and adaptability ensure we help you get the best results.

Listed below are the services we offer. This list is by no means exhaustive, and our team of friendly staff are more than happy to talk about any services not listed here that you might require.
"
        b1Text={
          <ul>
            <li><div onClick={overlayBenchmarking}>Benchmarking</div></li>
            <li><div onClick={overlayBenchmarking}>Benchmarking</div></li>
          </ul>}
      b1HText="Business Services"
      b2Text=""
      b2HText=""
      b3Text=""
      b3HText=""
      b4Text=""
      b4HText=""
      b5HText=""
      b5Text=""
      src={longLogo}
      alt="image of mountain"

      />;
    }
    if (props.page === "Pricing") {
      return <Pricing />;
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
  const [overlay, setOverlay] = useState([0, "", ""]);
  const overlayHide = () => { setOverlay([0, "", ""])};
  const overlayBenchmarking = () => { setOverlay(
    [1,
    "Benchmarking", 
    <div>
      Have you ever wondered how your business performs compared to your competitors? What is their average bottom line? Are you spending enough on advertising? Are you paying too much rent? Are your staff costs too high? Surviving in today's business climate requires you to spend more time working on your business rather than in it. We can provide you with accurate, timely, informative benchmarking reports that enable you to:
      
      <ul>
        <li>See how your business compares to your competitors
</li>
        <li>Understand more about how the rest of your industry works</li>
        <li>Analyse the key performance indicators in your industry</li>
      </ul>
      Equipped with this information, we'll work with you to develop action strategies that improve your bottom line.
    </div>
])}
  const overlayHeader = () => {
    setOverlay(
      [1,
        "Header",
        <div>
          bodytext
        </div>
      ])
  }
  // [bool, string, string]
  // [on/off, Header text, Body text]
  return (
    <div className="App">
      {/* below function checks if the on/off bool in the overlay state is on or off and gives the according id */}
      <div className={(overlay[0]?"show":"hide") + " overlayOuter"} onClick={overlayHide}>
        <div className="overlayContainer">
            <div className="overlayHeading">
              <div className="overlayTitle">{overlay[1].toLowerCase() + " info"}</div>
            <div className="overlayIcons bold">x</div>
            </div>
            <div className="overlayBody">
              <h1 className="overlayTitle">{(overlay[1]).toUpperCase()}</h1>
              <div className="overlayBodyText">{overlay[2]}</div>
            </div>
          </div>
      </div>
      <div id="navBar">
        <div id="navInnerFlex">
          <div id="logo"><NavBarA onClick={ToHome}><img src={longLogo} alt="fivepeaks logo"/></NavBarA></div>
          <div id="navBarText">
            <NavBarA id={activeFun(Page, "Home")} onClick={ToHome}>Home</NavBarA>
            <NavBarA id={activeFun(Page, "Enquiry")} onClick={ToEnquiry}>Enquiry</NavBarA>
            <NavBarA id={activeFun(Page, "About")} onClick={ToAbout}>About</NavBarA>
            <NavBarA id={activeFun(Page, "Services")} onClick={ToServices}>Services</NavBarA>
            <NavBarA id={activeFun(Page, "Pricing")} onClick={ToPricing}>Pricing</NavBarA>
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
        <NavBarA id={activeFun(Page, "Contact")} onClick={ToContact}>Contact</NavBarA>
      </Footer>
      {/* above is the navbar */}
    </div>
  );
  }

export default App;
