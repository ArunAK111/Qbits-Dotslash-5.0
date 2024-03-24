import React from 'react';
import Navbar from '../navbar/Navbar';
import './contactdoctor.css'; // Import CSS file

const ContactDoctor = () => {
    return (
        <div className="contact-doctor-container">
            <Navbar />
            <div className="contact-doctor-content">
                <h1>Contact Doctor</h1>
                <p>Feel free to contact your doctor for any medical assistance.</p>
                {/* Add contact form or other content */}
            </div>
        </div>
    );
}

export default ContactDoctor;
