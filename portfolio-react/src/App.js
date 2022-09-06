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
import wideImage from './Components/Images/wideImage.jpg'

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
        buttonLeft={
          <Button id="LB" onClick={ToServices} className={"PButt"}>Check out services</Button>
        }
        buttonRight={
          <Button id="RB" onClick={ToAbout} className={"PButt"}>About us</Button>
        } />
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
          <div className='horizontalFlex'>
            <div className='link servicesButton' onClick={overlayBenchmarking}>Benchmarking</div>
            <div className='link servicesButton' onClick={overlayBookkeeping}>Bookkeeping/accounting</div>
            <div className='link servicesButton' onClick={overlayBudgeting}>Budgeting</div>
            <div className='link servicesButton' onClick={overlayStartup}>Business Start-up</div>
            <div className='link servicesButton' onClick={overlayCashFlow}>Cash Flow Forecasting</div>
            <div className='link servicesButton' onClick={overlayConsulting}>Consulting</div>
            <div className='link servicesButton' onClick={overlayFinancingManagement}> Financing Management</div>
            <div className='link servicesButton' onClick={overlayHubDoc}> Hubdoc setup and training</div>
            <div className='servicesButton'> Quarterly Review Meetings</div>
            <div className='servicesButton'> Reckon One</div>
            <div className='servicesButton'> Reckon Hosted</div>
            <div className='servicesButton'> Regional Business Partner Network</div>
            <div className='servicesButton'> Risk Management</div>
            <div className='servicesButton'> Software Solutions</div>
            <div className='link servicesButton' onClick={overlayStrategicplanning}> Strategic planning</div>
            <div className='servicesButton'> Xero setup and training</div>
          </div>}
        b1HText="Business Services"
        b2Text={
          <div className='horizontalFlex'>
            <div className='link servicesButton' onClick={overlayFtb}>Fringe Benefit Tax (FBT)</div>
            <div className='link servicesButton' onClick={overlayGst}>Goods & Services Tax (GST)</div>
            <div className='servicesButton'>Income Tax Returns</div>
            <div className='servicesButton'>Tax Planning</div>
            <div className='servicesButton'>Donation Rebates</div>

          </div>
            }
        b2HText="Tax"
        b3Text={
          <div className="horizontalFlex">
            <div className='servicesButton'>Business Valuation</div>
            <div className='servicesButton'>Business Succession Planning</div>
            <div className='servicesButton'>Company Secratarial Admin</div>
            <div className='servicesButton'>Estate Planning</div>
            <div className='servicesButton'>Financial Modelling</div>
            <div className='link servicesButton' onClick={overlayRental}>Rental Property</div>
            <div className='servicesButton'>Trust Administration</div>
          </div>
        }
        b3HText="Specialist Services"
        b4Text=""
        b4HText=""
        b5HText="Mentouring"
        b5Text={
          <div className="HorizontalFlex3Tall">
            <div className='servicesButton'>Beginning and buying a business</div>
            <div className='servicesButton'>Financial management</div>
            <div className='servicesButton'>Accounting systems</div>
            <div className='servicesButton'>Business systems</div>
            <div className='servicesButton'>Pricing and margins</div>
            <div className='servicesButton'>Debtor management</div>
            <div className='servicesButton'>Technology in business</div>
            <div className='servicesButton'>Customer management</div>
            <div className='servicesButton'>Directorship</div>
            <div className='servicesButton'>Time management</div>
            <div className='servicesButton'>Family businesses</div>
            <div className='servicesButton'>Profit improvement</div>
            <div className='servicesButton'>Succession planning</div>
            <div className='servicesButton'>Selling the business</div>
            <div className='link servicesButton' onClick={overlayRetirement}>Retirement planning</div>
          </div>
        }
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


  // these constant funcitons have to be in App.js as they dont correctly communicate with the overlay object if they are in a external jsx file.

  const [overlay, setOverlay] = useState([0, "", ""]);

  const overlayHide = () => { setOverlay([0, "", ""]) };

  const overlayBenchmarking = () => {
    setOverlay(
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
      ])
  };

  const overlayBudgeting = () => {
    setOverlay(
      [1,
        "Budgeting",
        <div>


          A good budget is a necessity for a good business plan. It is one of the best business tools you can have, enabling you to set financial targets and measure your performance.
          <br /><br />
          The techniques we utilise to form financial projections enable you to consider future scenarios and provide you with goals to strive for in your business.
          <br /><br />
          In addition to goal-setting value, budgets will often improve your chances of acquiring funding. Financiers often require forecasts as a prerequisite for funding approval.
          <br /><br />
          The techniques we utilise to form financial projections enable you to consider future scenarios and provide you with goals to strive for in your business. There are many types of budgets. We can help you design the right budget for your requirements.
          <br /><br />
          Let us show you how a budget can provide feedback that helps you prepare for the future of your business!

        </div>
      ])
  };

  const overlayBookkeeping = () => {
    setOverlay(
      [1,
        "Bookkeeping and Accounting",
        <div>


          Modern business demands up-to-date, accurate financial information and this takes time away from your business or family.
          <br /><br />
          We can relieve you and your staff of the enormous burden of all your bookkeeping and accounting requirements, including the preparation of your GST returns and provide timely financial reports.
          <br /><br />
          We will discuss your requirements with you and provide information relevant to your particular situation, as well as constructive advice, on a regular basis.

        </div>
      ])
  };

  const overlayCashFlow = () => {
    setOverlay(
      [1,
        "Cash Flow Forecasting",
        <div>
          Are you holding too much inventory? Is this the right time to expand your business? Are you going to have enough cash to pay all expenses every month? Surviving in today's business climate requires you to spend more time working on your business than in it.
          We can provide you with accurate, timely, informative cash flow forecasting reports that enable you to:
          <br /><br />
          Realise and understand when cash is available
          Plan and prepare for expansion, stock control, and taxes
          Analyse and anticipate key expenses
          Equipped with this information, we'll work with you to develop action strategies that improve your bottom line.


        </div>
      ])
  };
  const overlayStartup = () => {
    setOverlay(
      [1,
        "Business Startup",
        <div>
          If you have a good idea for a new business venture but don't have expertise in the legal or financial aspects, we can help you:
          <ul>
            <li>Decide on the most suitable structure for your business - Sole trader, Partnership, or Company</li>
            <li>Prepare a business plan and cash flow projections</li>
            <li>Assess your finance requirements, advise on the best sources of finance</li>
            <li>Establish a good working relationship with your bank</li>
            <li>Complete any registration procedures with Companies House, Inland Revenue</li>
            <li>Deal with company secretarial issues</li>
            <li>Set up a recording system for your internal use and for complying with statutory requirements</li>
            <li>Help you setup your Accounting Systems</li>
          </ul>
          Let us help you turn your business idea into a reality!
        </div>
      ])
  };

  const overlayConsulting = () => {
    setOverlay(
      [1,
        "Consulting",
        <div>
          Accounting consultants help you understand what the various reports mean, and how the data you're seeing affects your company. Accounting consultants help with a number of tasks related to accounting services:
          <ul>
            <li>financial forecasting</li>
            <li>analyzing financial statements</li>
            <li>determining the profitability of your business</li>
            <li>analyzing accounts payable to see where your business might be able to save money</li>
            <li>determining what accounting services you need</li>
            <li>setting up consistent accounting practices</li>
          </ul>
        </div>
      ])
  };

  const overlayFinancingManagement = () => {
    setOverlay(
      [1,
        "Financing Managment",
        <div>


          A wide range of financing options exist, each with their pros and cons. At Five Peaks Accounting we know the financial market and have the experience to assist you in securing the best financing option for your personal and business goals. Our experience in the market means we can also structure debt upon acquisition to maximise tax advantages.
          <br /><br />
          Let our experienced team explore the best financing options with you an get your business closer to its goals!

        </div>
      ])
  };

  const overlayHubDoc = () => {
    setOverlay(
      [1,
        "Hubdoc setup and training",
        <div>
          Hubdoc is a free Xero addon to the Starter, Standard and Premium Plans.
          <br /><br />
          It allows you to easily get your receipts into Xero so you don't need that stack of paper, there is a little setup at the start but over time this drastically improves the efficiency and quality of your accounting information.
          <br /><br />
          Take a look at the video below to see what it can do and get in touch if you would like this setup or needs some training on it.

        </div>
      ])
  };

  const overlayStrategicplanning = () => {
    setOverlay(
      [1,
        "Strategic planning",
        <div>


          The pressures of daily business can often mean strategic planning takes a back seat, but to have a successful business, it is vital to plan ahead. We'll help you establish a strategic plan that examines where you want your business to be in the next 3-5 years and exactly how you and your team can achieve these aims and objectives.
          <br /><br />
          Your strategic plan will:
          <br /><br />
          <ul>
            <li>Define the characteristics of your company in three to five years</li>
            <li>Identify your competitors</li>
            <li>Define your objectives and financial goals</li>
            <li>Include an effective implementation strategy to achieve your goals</li>
          </ul>
        </div>
      ])
  };

  const overlayFtb = () => {
    setOverlay(
      [1,
        "Fringe Benefit Tax (FBT)",
        <div>


          The rules for FBT payments change on a regular basis. At Five Peaks Accounting we keep up to date with the latest tax trends, enabling us to provide accurate advice on preparing FBT returns. We can also advise on the FBT consequences of proposals you intend to make, ensuring you make informed decisions.
          <br /><br />
          Rather than paying excessive amounts of FBT, let the experts answer your tax queries. We can help you develop and complete the administration for a cost-effective employee benefit plan.

        </div>
      ])
  };

  const overlayGst = () => {
    setOverlay(
      [1,
        "Goods & Services Tax (GST)",
        <div>


          GST legislation is an area we know like the back of our hand. We can offer accurate, timely assistance in several areas, including:
          <ul>
            <li>Registration queries</li>
            <li>Preparing GST returns</li>
            <li>Filing and adjusting GST returns</li>
            <li>IRD audit assistance</li>
            <li>Specalist advice around Land and Property sales</li>
          </ul>
        </div>
      ])
  };

  const overlayRental = () => {
    setOverlay(
      [1,
        "Rental Property",
        <div>
          At Five Peaks Accounting we have the expertise required to assist you in a variety of areas relating to residential and commercial property. The services we offer our include:
<ul>
            <li>Advice on purchasing a property</li>
            <li>Reviews of lease agreements</li>
            <li>Advice on funding</li>
            <li>Guidance on tax minimisation</li>
            <li>Advice on ownership structure</li>
            <li>Periodic reviews to ensure returns are maximised</li>
            <li>The importance of forecasts in making a residential investment cannot be emphasised enough. We can provide you with forecasts for:</li>
            <li>Revenue returns</li>
            <li>Financial position</li>
            <li>Potential growth</li>
</ul>
          Contact us today for more information on how we can assist you in the business of rental properties! 
        </div>
      ])
  };

  const overlayRetirement = () => {
    setOverlay(
      [1,
        "Retirement Planning",
        <div>


          Achieving a comfortable retirement requires forward planning. You need to consider when you will retire, how much income you need for the retirement you desire, how to acquire that income, what role the government will play, and more.
<br /><br />
          The friendly team at Five Peaks Accounting can help you answer these questions and plan for the relaxing retirement you've earned.

        </div>
      ])
  };


  // [bool, string, string]
  // [on/off, Header text, Body text]
  return (
    <div className="App">
      {/* below function checks if the on/off bool in the overlay state is on or off and gives the according id */}
      <div className={(overlay[0] ? "show" : "hide") + " overlayOuter"} onClick={overlayHide}>
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
          <div id="logo"><NavBarA onClick={ToHome}><img src={longLogo} alt="fivepeaks logo" /></NavBarA></div>
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
