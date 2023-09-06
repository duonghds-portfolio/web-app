import ContactButton from '../layout/ContactButton';
import DuongHDSImg from './duonghds-intro-1.png'
import Resume from './Resume';
import LinkedinImg from './linkedin.png'
import FacebookImg from './facebook.png'
import GmailImg from './gmail.png'
const Intro = ({id}) => {
    return(
        <div className="intro" id={id}>
            <div className="intro-text">
                <div className="hello-msg">Xin chào!</div>
                <div className="intro-name">I am&nbsp;<div className="bold-name">Duong Hoang</div></div>
                <div className="intro-name" style={{marginTop: '0px', marginBottom: '20px'}}>Software Engineer</div>
                <div className="wall-text">Hello, my boss, I am Duong Hoang, and I don't know who you are.
                    But if you love <span>animals</span>, enjoy <span>games</span>, have an interest in <span>football</span> or are passionate about <span>technologies</span> then I hope you can
                    be my friend and engage in many conversations throughout the night.
                </div>
                <div className="intro-touch">
                    <ContactButton />
                    <Resume />
                </div>
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
            <div id="intro-img-1" className="intro-img">
                <img className="large-img" src={DuongHDSImg} alt="duonghds" />
            </div>
        </div>
    )
}

export default Intro;