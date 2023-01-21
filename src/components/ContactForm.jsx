/*eslint-disable no-useless-escape */
import React from 'react'
import GlobelTechImg from './globel-tech.jpg'
import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
export default class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            realName: '',
            email: '',
            textContent: '',
            loading: false,
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
        const { realName, email, textContent, loading } = this.state;
        if (loading) {
            return
        }
        if (!this.validateEmail(email)) {
            document.getElementById("email-contact-form").style.border = "1px solid red";
            return
        }
        this.setState({
            loading: true
        })
        let self = this
        let host = process.env.REACT_APP_DUONGHDS_PORTFOLIO_API_HOST
        fetch(`${host}/api/contact`, {
            mode: "cors",
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                realName: realName,
                email: email,
                textContent: textContent
            })
        })
            .then(resp => {
                self.setState({
                    loading: false,
                })
                if (resp.status === 200) {
                    self.closeForm()
                    self.setState({
                        realName: '',
                        email: '',
                        textContent: ''
                    })
                    document.getElementById('email-contact-form').value = ""
                    document.getElementById('real-name-contact-form').value = ""
                    document.getElementById('text-content-contact-form').value = ""
                    NotificationManager.success('Success', 'I had received your message, welcome my friend')
                } else {
                    NotificationManager.error('Error', 'Something wrong, please try again later :( I\'m so sorry')
                }
            });
    }

    validateEmail(inputText) {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return inputText.match(mailformat)
    }

    render() {
        const { realName, email, textContent, loading } = this.state
        return (
            <div className="contact-form-layout" id="contact-form-layout" onClick={this.closeForm}>
                <div className="contact-form" id="contact-form" onClick={(e) => {
                    e.stopPropagation()
                }}>
                    <img className="globel-tech" src={GlobelTechImg} alt="globel-tech" />
                    <div className="input-form">
                        <div className="form-title">Hi boss</div>
                        <div className="form-title">Let's start a conversation</div>
                        <input placeholder="Your name" id="real-name-contact-form" defaultValue={realName} onChange={this.handleChangeName} />
                        <input placeholder="Email" id="email-contact-form" defaultValue={email} onChange={this.handleChangeEmail} style={{ marginTop: '0px' }} />
                        <textarea placeholder="Say hi with me" id="text-content-contact-form" defaultValue={textContent} onChange={this.handleChangeContent} />
                        <div className={`send-button ${loading ? 'loading' : ''}`} onClick={this.send}>
                            {loading ? <i className="fa fa-circle-o-notch fa-spin"></i> : null}
                            {!loading ? <div>Send</div> : null}
                        </div>
                    </div>
                    <div className="background-form">
                    </div>
                </div>
            </div>
        )
    }
}