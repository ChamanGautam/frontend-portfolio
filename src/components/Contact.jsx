import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');

    const add = async (event) => {
        event.preventDefault(); // Prevent default form submission

        try {
            const response = await fetch('https://chaman-fz4b.onrender.com/addmessage', {
                method: 'POST',
                body: JSON.stringify({ title, message }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const result = await response.json();

            if (response.ok) {
                if (result.Status) {
                    alert('Thanks for contacting me!');
                    setTitle('');
                    setMessage('');
                } else if (result.Required) {
                    alert('All fields are required');
                }
            } else {
                alert('Failed to submit the form. Please try again.');
            }
        } catch (error) {
            console.error('There was an error submitting the form!', error);
            alert('There was an error submitting the form. Please try again.');
        }
    };

    return (
        <div className="main-form" id="contact">
            <div className="form">
                <h1>Contact Us</h1>
                <form onSubmit={add}>
                    <label>
                        <span>Title</span>
                        <input
                            type="text"
                            placeholder="What are you writing about?"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                    </label>
                    <label>
                        <span>Message</span>
                        <textarea
                            placeholder="Full message comes here..."
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
