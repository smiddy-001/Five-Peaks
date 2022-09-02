import Map from './SVG/map.svg';
import Time from './SVG/time.svg';
import Call from './SVG/call.svg';
import Mail from './SVG/mail.svg';
import Mountain from './SVG/Mountain.svg'
import Partnering from './SVG/Partnering.svg'
import FivePeaksCA from './SVG/FivePeaks Chartered Accounting.svg'
import Button from './Button'

// Contact Icon Svg's
import fb from './SVG/facebook-fill.svg'
import ig from './SVG/instagram-fill.svg'
import ld from './SVG/linkedin-box-fill.svg'
import tw from './SVG/twitter-fill.svg'


function Maps() {
    return (
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.477531327487!2d168.75624450426653!3d-45.01272968158803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d51f6e3c97416f%3A0x1d6488e8ae6b0114!2sFive%20Peaks%20Chartered%20Accounting!5e0!3m2!1sen!2snz!4v1655687303325!5m2!1sen!2snz" title="map" style={{border:0}} tabIndex="0" id="mapTile"></iframe>
    )
}

export default function News(props) {
    return (
        <div className="overallFooter">
            <div className="footerImg">
                <div className="contactFooter">
                    <div id="contactFooterTile1" className="contactFooterTile"><h1>Contact</h1></div>
                    <div id="contactFooterTile2" className="contactFooterTile"><img src={Mail} alt="email" /></div>
                    <div id="contactFooterTile3" className="contactFooterTile textRight"><h4>Email:</h4></div>
                    <div id="contactFooterTile4" className="contactFooterTile"><h4><a href="mailto:office@fivepeaks.co.nz<"> office@fivepeaks.co.nz</a></h4></div>
                    <div id="contactFooterTile5" className="contactFooterTile"><img src={Call} alt="phone" /></div>
                    <div id="contactFooterTile6" className="contactFooterTile textRight"><h4>Phone:</h4></div>
                    <div id="contactFooterTile7" className="contactFooterTile"><a href="tel:+034282760">(03) 428 2760</a></div>
                    <div id="contactFooterTile8" className="contactFooterTile"><img src={Map} alt="adress" /></div>
                    <div id="contactFooterTile9" className="contactFooterTile textRight"><h4>Adress:</h4></div>
                    <div id="contactFooterTile10" className="contactFooterTile"><h4><a href="https://www.google.com/maps/dir//19%2F189,+Glenda+Drive,+Shotover+Ridge,+Frankton,+Queenstown/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0xa9d51f6e3c97416f:0x1d6488e8ae6b0114?sa=X&ved=2ahUKEwj11KD-ga74AhXH9zgGHanFDFYQ9Rd6BAhjEAU">19/189, Glenda Drive, Shotover Ridge, Frankton, Queenstown</a></h4></div>
                    <div id="contactFooterTile11" className="contactFooterTile"><img src={Time} alt="bussiness Hours" /></div>
                    <div id="contactFooterTile12" className="contactFooterTile textRight"><h4>Bussiness Hours:</h4></div>
                    <div id="contactFooterTile13" className="contactFooterTile"><h4 className="whiteColor">9am - 5pm, Monday to Friday</h4></div>
                    <div id="contactFooterTile14" className="contactFooterTile"><Button className="SButt PButt">Book a meeting</Button></div>
                    <div id="contactFooterTile15" className="contactFooterTile"><Maps/>
                    </div>
                </div>
            </div>
            <div className="footerCont">
                <div className="footer">
                    <div id="footerTile1" className="footerTile"><img src={Mountain} alt="Mountain" /></div>
                    <div id="footerTile2" className="footerTile"><img src={FivePeaksCA} alt="five peaks chartered accounting" /></div>
                    <div id="footerTile3" className="footerTile">
                        {/* nav */}
                        {props.children}
                    </div>
                    <div id="footerTile4" className="footerTile">
                        <div className="socialCube">
                            <div className="socialCubeTile" id="socialCube1"><img src={ig} alt="instagram" /></div>
                            <div className="socialCubeTile" id="socialCube2"><img src={ld} alt="linkedin" /></div>
                            <div className="socialCubeTile" id="socialCube3"><img src={fb} alt="facebook" /></div>
                            <div className="socialCubeTile" id="socialCube4"><img src={tw} alt="twitter" /></div>
                        </div>
                    </div>
                    <div id="footerTile5" className="footerTile"><img src={Partnering} alt="partnering" /></div>
                </div>
            </div>
        </div>
    );
}