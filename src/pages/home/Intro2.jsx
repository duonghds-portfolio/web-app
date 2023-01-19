import LinkedinImg from './linkedin.png'
import FacebookImg from './facebook.png'
import GmailImg from './gmail.png'
import DuongHDSImg from './duonghds-img-2-cropped.png'
const Intro2 = ({id}) => {
    return(
        <div className="intro" id={id}>
            <div className="intro-text">
                <div className="hello-msg">Xin chào!</div>
                <div className="intro-name">I am&nbsp;<div className="bold-name">Duong Hoang</div></div>
                <div className="intro-name" style={{marginTop: '0px', marginBottom: '20px'}}>Vietnamese Software Engineer</div>
                <div className="wall-text">Hi my boss, I am Duong Hoang, a software engineer with more
                than 5+ years experience with full-stack position (heavy BE). I love football, 
                playing games and travel. I always wanna learn and enjoy the culture of countries from the world, 
                especially Nordic(Northern Europe) countries. If you have a job from these countries, ping me to discuss about this.
                Let's start the conversation and be friend first with some ways below,
                you also can click to "Contact Me" or send direct to my email: duonghoang2411@gmail.com</div>
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