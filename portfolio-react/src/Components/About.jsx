import Jason from './Images/jason.jpg'
import Button from './Button';

export default function About(props) {
    return (
        <div className="center50vw">
            <div className="aboutMegaFlexContainer">
                <div className="aboutFlex1 margin1rem"><h4>About Five Peaks - over 25 years experience</h4>
                    Need a partner in your business success? <br /><br />
                    Five Peaks Accounting Ltd takes the hassle out of business accounting, were based in Five Mile in Frankton Queenstown and we are ready to help with your business. Whether it's setting up an accounting system to match your business requirements or professional advice about taxation, cashflow, business plan, succession planning or starting a business, we're here to help. <br /> <br />
                    We offer a friendly, flexible approach that supports you to achieve success. Come and have a chat-the coffee is on us and the first meeting is free. This means there's time to see whether we're a good fit for your business and to discuss ideas about how we could help you achieve your goals.
                    <div className="aboutFlex2 margin1rem">
                        <div className="aboutInnerFlexLeft margin1rem"><h4>Pricing</h4>
                            We offer a friendly, flexible approach that supports you to achieve success. Come and have a chat-the coffee is on us and the first meeting is free. This means there's time to see whether we're a good fit for your business and to discuss ideas about how we could help you achieve your goals.
                            <div className="aboutInnerFlexRight">
                                <div className="aboutInnerFlexImage"><img src={Jason} alt="Jason Smith" /></div>
                                <div className="aboutInnerFlexButton"><Button className={"PButt"} href={props.href} onClick={props.onClick} id="toServices">Book A Meeting</Button></div>
                            </div>
                        </div>
                        <div className="aboutFlex3 margin1rem"><h4>More info</h4>
                            If you want to set up a system that makes your accounting quick, accurate and efficient, then look no further than Five Peaks. We'll help you do this so you can effortlessly monitor your business and automate low-value paper work.<br /> <br />
                            Five Peaks Accounting Ltd is a member of the Chartered Accountants of Australia and New Zealand. It is owned and managed by Jason Smith a Chartered Accountant. <br /> <br />
                            Want to know more? Browse our website and check out our services, what the software we offer could do for your business and our pricing. If you want to have a chat please get in touch.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}