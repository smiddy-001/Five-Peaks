export default function Home(props) {
    return (
        <div className="center50vw">
            <div id="homeTextGrid">
                <div id="homeText1">
                <h4>WHAT IS FIVE PEAKS ACCOUNTING?</h4>
                Five Peaks Accounting Ltd is a small Queenstown Accountant which is a Chartered Accounting firm that takes the hassle out of business accounting and advice.
                    <br /><br /><br />
                Whether it's setting up an accounting system to match your business requirements or professional advice about taxation, cashflow, business plan, succession planning or starting a business, we're here to help and meet at our Frankton Queenstown office.
                    <br /><br /><br />
                <h4>PRICING.</h4>
                Our pricing is transparent-whether it's a one-off project like a business plan or forecast cashflow-we'll let you know the price before we start. Many of our clients like the monthly pricing plans we offer as these spread the cost throughout the year. And there's no extra charge when you want to call us on the phone with a quick query.
                    <br /><br />
                We pride ourselves on being an accessable Queenstown Accountant. Our practice has been operating since 2015 and we offer a wide range of services to suit all budgets, ensuring that you get the best care and support that you deserve.
                    <br /><br />
                Five Peaks Accounting is a Queenstown Accountant with a focus on small to medium business which we provide in person and local service to. We have an extensive range of business and residential services for you to choose from. We are happy to help you with any of your Five Peaks Accounting needs. We are a family run business. We are able to provide all the services you need to make a difference to your business.
                </div>
                <div id="homeText2">{props.buttonLeft}</div>
                <div id="homeText3">{props.buttonRight}</div>
            </div>
            <div className="servicesTileBackground">
                <div className="serviceTileContainer">
                    <div className="servicesTile">
                        <h1 className="Title">Accounting Services</h1>
                        <div className="subText">We'll take care of your accounting and tax so you can focus on other things.</div>
                    </div>
                    <div className="servicesTile">
                        <div className="ServicesImg"></div>
                    </div>
                    <div className="servicesTile">
                        <h1 className="Title">Xero Support</h1>
                        <div className="subText">We use beauatiful accounting software to streamline and support your business.</div>
                    </div>
                    <div className="servicesTile">
                        <div className="AccountingImg"></div>
                    </div>
                    <div className="servicesTile">
                        <h1 className="Title">Mentoring Services</h1>
                        <div className="subText">Let us proviode mentoring services which will improve your business with targeted advice.</div>
                    </div>
                    <div className="servicesTile">
                        <div className="XeroImg"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}