import ContactForm from "../../components/ContactForm";

const ContactButton = () => { 
    return(
        <>
            <div className="nav-label" onClick={ContactForm.openForm}>
                <div className="nav-contact-button">Contact Me</div>
            </div>
        </>
    )
}

export default ContactButton;