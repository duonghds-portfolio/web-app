import LinkedinImg from './linkedin.png'
import FacebookImg from './facebook.png'
import GmailImg from './gmail.png'
import DuongHDSImg from './duonghds-intro-2.png'
const Intro2 = ({id}) => {
    return(
        <div className="intro" id={id}>
            <div className="intro-text">
                <div className="hello-msg">Ideal of life</div>
                <div className="intro-name">Enjoy the&nbsp;<div className="bold-name">Job</div></div>
                <div className="intro-name" style={{marginTop: '0px', marginBottom: '20px'}}>Enjoy the&nbsp;<div className="bold-name">World</div></div>
                <div className="wall-text">I have a strong desire to learn and immerse myself in the diverse cultures of countries worldwide, with a special fascination for the UK and Nordic (Northern European) regions. My dream is to explore every corner of the globe.</div>
                <div className="wall-text">Let's initiate a conversation and become friends through the following methods. You can also click on "Contact Me" or reach out directly via email at: <span>duonghoang2411@gmail.com</span></div>
                <div className="list-icon">
                    <a href="https://www.linkedin.com/in/duonghds/" rel="noreferrer" target="_blank">
                        <img className="social-icon" src={LinkedinImg} alt="linkedin" />
                    </a>
                    <a href="https://www.facebook.com/hdsduong24" rel="noreferrer" target="_blank">
                        <img className="social-icon" src={FacebookImg} alt="facebook" />
                    </a>
                    <a href="mailto:duonghoang2411@gmail.com">
                        <img className="social-icon" src={GmailImg} alt="gmail" />
                    </a>
                </div>
            </div>
            <div className="intro-img">
                <img className="large-img" src={DuongHDSImg} alt="duonghds" />
            </div>
        </div>
    )
}

export default Intro2;