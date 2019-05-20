import React from 'react';
import {Button, } from 'react-bootstrap'

class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            default: false,
        }
    }


    render() {
        return (
            <div >
                <p>If you wanna get in touch with me, it will be my pleasure to answer any question or enquiries</p>
                <br/>
                <p>Email adress</p>
                <br/>
                <p>chernandezweb@gmail.com</p>
                <br/>
                <a href="/Carlos-Hernandez-CV.pdf"><Button>Download my Resume</Button></a>
            </div>
        )
    }
}


export default Contact;