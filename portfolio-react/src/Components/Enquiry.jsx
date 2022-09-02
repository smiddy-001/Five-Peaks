import { useState } from 'react';

export default function Enquiry() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [header, setHeader] = useState("");
    const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
      alert(` ${'Name : ' + name + '\nPhone : ' + phone + '\nEmail : ' + email + '\n\nHeader : ' + header + '\nMessage : ' + message}`)
  }

    return (
        <div className="s">
            <div className="EnquiryCont">
                <form className="EnquiryFormCont">
                    <label htmlFor='name' className="ItemOnLeft" id="Item1">Full Name:</label>
                    <input className="ItemOnRight" id="Item2" type="text" autoComplete="on" value={name} onChange={(i) => setName(i.target.value)} />
                    <label htmlFor="Phone" className="ItemOnLeft" id="Item3">Phone:</label>
                    <input type="tel" className="ItemOnRight" id="Item4" autoComplete="on" value={phone} onChange={(i) => setPhone(i.target.value)} />
                    <label htmlFor="Email" className="ItemOnLeft" id="Item5">Email:</label>
                    <input type="email" className="ItemOnRight" id="Item6" autoComplete="on" value={email} onChange={(i) => setEmail(i.target.value)} />
                    <label htmlFor="Header" className="ItemOnLeft" id="Item7">Header:</label>
                    <input className="ItemOnRight" id="Item8" autoComplete="on" value={header} onChange={(i) => setHeader(i.target.value)} />
                    <label htmlFor="Message" className="ItemOnLeft" id="Item9">Message:</label>
                    <textarea className="ItemOnRight" id="Item10" autoComplete="on" value={message} onChange={(i) => setMessage(i.target.value)} />
                    <div id="Item11" className="PButt" onClick={handleSubmit}>Send</div>           
                </form>
            </div>
        </div>
    );
}