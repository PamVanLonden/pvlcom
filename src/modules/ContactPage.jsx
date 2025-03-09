import React from 'react';

function ContactPage() {
    return (
        <div >
            <h2>Contact Me</h2>
            <h3>Text me for information.</h3>
            <p>Pam Van Londen</p>
            <p>Corvallis, OR 97330, USA</p>
            <p>
                Tel: <a href="sms:+15417601449">541-760-1449</a> (Text only, please)
            </p>
            <div className="contact-info">
                <img 
                    className="canvas-logo"
                    src="/assets/canvas-logo.png" 
                    alt="Login to Canvas" 
                />
                <p>Current OSU students: please contact me via Canvas Inbox.</p>
            </div>
        </div>
    );
}

export default ContactPage;
