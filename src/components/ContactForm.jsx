import React from 'react'
import GlobelTechImg from './globel-tech.jpg'
export default class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        ContactForm.openForm = ContactForm.openForm.bind(this)
    }
    static openForm() {
        let formLayout = document.getElementById("contact-form-layout")
        let form = document.getElementById("contact-form")
        formLayout.style.visibility = "visible";
        formLayout.style.transform = "scale(1)";
        form.style.transform = "scale(1)";
        
    }

    closeForm() {
        let formLayout = document.getElementById("contact-form-layout")
        let form = document.getElementById("contact-form")
        formLayout.style.transform = "scale(0)";
        form.style.transform = "scale(0)";
        setTimeout(() => {
            formLayout.style.visibility = "hidden";
        }, 350)
    }

    render() {
        return (
            <div className="contact-form-layout" id="contact-form-layout" onClick={this.closeForm}>
                <div className="contact-form" id="contact-form" onClick={(e) => {
                    e.stopPropagation()
                }}>
                    <img className="globel-tech" src={GlobelTechImg} alt="globel-tech" />
                    <div className="input-form">
                        <div className="form-title">Hi boss</div>
                        <div className="form-title">Let's start a conversation</div>
                        <input placeholder="Your name" />
                        <input placeholder="Email" style={{marginTop: '0px'}} />
                        <textarea placeholder="Say hi with me" />
                        <div className="send-button">Send</div>
                    </div>
                    <div className="background-form">
                        {/* <img src={GlobelTechImg} alt="globel-tech" /> */}
                    </div>
                </div>
            </div>
        )
    }
}