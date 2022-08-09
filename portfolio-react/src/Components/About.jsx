import Jason from './Images/jason.jpg'
import Button from './Button';

export default function About() {
    return (
        <div className="center50vw">
            <div className="aboutMegaFlexContainer">
                <div className="aboutFlex1 margin1rem"><h4>JASON SMITH</h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  occaecat cupidatat non proident, sunt in culpa qui officia deserunt  mollit anim id est laborum."</div>
                <div className="aboutFlex2 margin1rem">
                    <div className="aboutInnerFlexLeft margin1rem"><h4>TITLE</h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ext dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</div>
                    <div className="aboutInnerFlexRight">
                        <div className="aboutInnerFlexImage"><img src={Jason} alt="Jason Smith" srcset={Jason} /></div>
                        <div className="aboutInnerFlexButton"><Button className={"PButt"} onClick="" id="toServices">Book A Meeting</Button></div>
                    </div>
                </div>
                <div className="aboutFlex3 margin1rem"><h4>TITLE 2</h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ext dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</div>
            </div>
        </div>
    );
}