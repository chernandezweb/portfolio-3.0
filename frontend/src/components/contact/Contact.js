import React from 'react';
import {Button, } from 'react-bootstrap'
import "./contact.scss"

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            default: false,
        }
    }


    render() {
        return (
            <div className="contact-text">
                <p className="contact-intro">If you wanna get in touch with me, it will be my pleasure to answer any questions or enquiries</p>
                <br/>
                <p className="email-title">Email adress:</p>
                <p className="email">chernandezweb@gmail.com</p>
                <br/>
                <a href="/Carlos-Hernandez-CV.pdf"><Button variant="secondary" size="lg">Download my Resume</Button></a>
            </div>
        )
    }
}


export default Contact;