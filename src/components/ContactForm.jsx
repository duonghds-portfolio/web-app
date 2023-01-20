/*eslint-disable no-useless-escape */
import React from 'react'
import GlobelTechImg from './globel-tech.jpg'
export default class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            realName: '',
            email: '',
            textContent: '',
        }
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

    handleChangeName = (event) => {
        this.setState({ realName: event.target.value });
    }

    handleChangeEmail = (event) => {
        document.getElementById("email-contact-form").style.border = "none";
        this.setState({ email: event.target.value });
    }

    handleChangeContent = (event) => {
        this.setState({ textContent: event.target.value });
    }

    send = () => {
        const { realName, email, textContent } = this.state;
        if(!this.validateEmail(email)) {
            document.getElementById("email-contact-form").style.border = "1px solid red";
        }
    }

    validateEmail(inputText) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return inputText.match(mailformat)
    }

        render() {
            const { realName, email, textContent } = this.state
            return (
                <div className="contact-form-layout" id="contact-form-layout" onClick={this.closeForm}>
                    <div className="contact-form" id="contact-form" onClick={(e) => {
                        e.stopPropagation()
                    }}>
                        <img className="globel-tech" src={GlobelTechImg} alt="globel-tech" />
                        <div className="input-form">
                            <div className="form-title">Hi boss</div>
                            <div className="form-title">Let's start a conversation</div>
                            <input placeholder="Your name" defaultValue={realName} onChange={this.handleChangeName} />
                            <input placeholder="Email" id="email-contact-form" defaultValue={email} onChange={this.handleChangeEmail} style={{ marginTop: '0px' }} />
                            <textarea placeholder="Say hi with me" defaultValue={textContent} onChange={this.handleChangeContent} />
                            <div className="send-button" onClick={this.send}>Send</div>
                        </div>
                        <div className="background-form">
                        </div>
                    </div>
                </div>
            )
        }
    }