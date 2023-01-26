
import ConfessionImg from './confess-app.png'
const Confession = ({id}) => {
    return(
        <div className="intro" id={id}>
            <div className="intro-text" style={{ width: '40%' }}>
                <div className="intro-name"><div className="bold-name">Confession App</div></div>
                <div className="wall-text">Idea: Confession App is an application for everyone
                    <span> confess everything</span> and
                    another will reply or try to contact with them.
                </div>
                <div className="wall-text" style={{ marginTop: "10px" }}>Main tech: Golang, ReactJS, React Native, AWS Lambda, AWS RDS,
                    AWS API Gateway, AWS S3.
                </div>
                <div className="wall-text" style={{ marginTop: "10px" }}>
                    Self learning
                </div>
                <div className="wall-text" style={{ marginTop: "10px" }}>
                    Status: <span>In Progress</span>
                </div>
                <div className="intro-touch">
                </div>
            </div>
            <div className="intro-img confession" style={{ width: '60%' }}>
                <img className="large-img" src={ConfessionImg} alt="confession" />
            </div>
        </div>
    )
}

export default Confession;