import React from 'react';
import {Button } from 'react-bootstrap'
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
                {
                    this.props.lang === "en"
                    ?
                    (<p className="contact-intro">If you want get in touch with me, it will be my pleasure to answer any questions or enquiries</p>)
                    :
                    (<p className="contact-intro">Si vous êtes interressé à prendre contact avec moi, cela me fera plaisir de répondre à vos question ou vos demandes.</p>)
                }
                <br/>
                <p className="email-title">{this.props.lang === "en" ? "Email adress:" : "Adresse courriel:"}</p>
                <p className="email">chernandezweb@gmail.com</p>
                <br/>
                <a href="/Carlos-Hernandez-CV-2019-FR.pdf" target="_blank"  rel="noopener noreferrer"><Button variant="secondary" size="lg">{this.props.lang === "en" ? "Download my Resume (FR)" : "Télécharger mon CV (FR)"}</Button></a>
                <br/>
                <br/>
                <a href="/Carlos-Hernandez-CV-2019-EN.pdf" target="_blank"  rel="noopener noreferrer"><Button variant="secondary" size="lg">{this.props.lang === "en" ? "Download my Resume (EN)" : "Télécharger mon CV (EN)"}</Button></a>
                <br/>
                <a href="https://www.linkedin.com/in/carlos-hernandez-7a0177133/" target="_blank"  rel="noopener noreferrer" className="linkedin"><i className="fab fa-linkedin"></i></a>
            </div>
        )
    }
}


export default Contact;