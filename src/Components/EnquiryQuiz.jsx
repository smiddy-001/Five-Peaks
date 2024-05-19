import React, { useRef } from 'react';
// import emailjs from 'emailjs-com';

//     const [name, setName] = useState("");
//     const [phone, setPhone] = useState("");
//     const [email, setEmail] = useState("");
//     const [header, setHeader] = useState("");
//     const [message, setMessage] = useState("");

// REACT_APP_SERVICE_ID = service_zptfgaf
// REACT_APP_TEMPLATE_ID = template_mxichsv
// REACT_APP_USER_ID = HzhD7dcu7i9m0FDsg

export const EnquiryQuiz = () => {

    // require('dotenv').config()
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        // emailjs.send(
        //     process.env.REACT_APP_SERVICE_ID,
        //     process.env.REACT_APP_TEMPLATE_ID,
        //     form.current,
        //     // process.env.REACT_APP_USER_ID
        //     ).then(
        //         result => console.log(result.text),
        //         error => console.log(error.text)
        //     )
        //     e.target.reset();
    };

    return (
        <div>
            {process.env.REACT_APP_SERVICE_ID}
            <form className="EnquiryFormCont" ref={form} onSubmit={sendEmail}>
                <label className="ItemOnLeft" id="Item1">Full name:</label>
                <input className="ItemOnRight" id="Item2" type="text" name="from_name" required />
                <label className="ItemOnLeft" id="Item3">Phone:</label>
                <input className="ItemOnRight" id="Item4" type="phone" name="from_phone" required />
                <label className="ItemOnLeft" id="Item5" >Email:</label>
                <input className="ItemOnRight" id="Item6" type="email" name="from_email" required />
                <label className="ItemOnLeft" id="Item7" >Header:</label>
                <input className="ItemOnRight" id="Item8" type="text" name="from_header" required />
                <label className="ItemOnLeft" id="Item9" >Message:</label>
                <textarea className="ItemOnRight" id="Item10" type="text" name="from_message" required />
                <input className="PButt" id="Item11" type="submit" value="Send"/>
            </form>
        </div>
    );
};

export default EnquiryQuiz;