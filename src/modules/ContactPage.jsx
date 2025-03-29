import React from 'react';

function ContactPage() {
    return (
        <div >
            <h2>Contact Me</h2>
            <article>
            <h3>Text me for information.</h3>
            <p>Pam Van Londen</p>
            <p>Corvallis, OR 97330, USA</p>
            <p>
                Tel: <a href="sms:+15417601449">541-760-1449</a> (Text only, please)
            </p>
            <figure >
                <img 
                    className="canvas-logo"
                    src="/assets/canvas-logo.png" 
                    alt="Login to Canvas" 
                />
                <figcaption>Current OSU students: please contact me via Canvas Inbox.</figcaption>
            </figure>
            </article>
        </div>
    );
}

export default ContactPage;
