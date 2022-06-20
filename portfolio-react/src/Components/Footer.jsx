import Map from './SVG/map.svg';
import Time from './SVG/time.svg';
import Call from './SVG/call.svg';
import Mail from './SVG/mail.svg';

function Maps() {
    return (
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2376.477531327487!2d168.75624450426653!3d-45.01272968158803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d51f6e3c97416f%3A0x1d6488e8ae6b0114!2sFive%20Peaks%20Chartered%20Accounting!5e0!3m2!1sen!2snz!4v1655687303325!5m2!1sen!2snz" title="map" style={{border:0}} width="512px" height="512px" tabIndex="0" id="mapTile"></iframe>
    )
}

export default function News() {
    return (
        <div className="overallFooter">
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
                <div id="contactFooterTile14" className="contactFooterTile"><a className="Button" href='www.hello'>Book a meeting</a></div>
                <div id="contactFooterTile15" className="contactFooterTile"><Maps/>
                </div>
            </div>
            <div className="footer">
                footer
            </div>
        </div>
    );
}