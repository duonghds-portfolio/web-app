import DubaImg from './duba.png';

const Duba = ({id}) => {
    return(
        <div className="intro" id={id}>
            <div className="intro-text" style={{ width: '40%' }}>
                {/* <div className="hello-msg">Xin chào!</div> */}
                <div className="intro-name"><div className="bold-name">Duba E-commerce</div></div>
                <div className="wall-text">Idea: Duba E-commerce is an application for 
                    <span> buy everything online</span>.
                </div>
                <div className="wall-text" style={{ marginTop: "10px" }}>Main tech: Golang, Java, Spring Boot, ReactJS, React Native, AWS Lambda, AWS RDS,
                    AWS API Gateway, AWS S3.
                </div>
                <div className="wall-text" style={{ marginTop: "10px" }}>
                    Self learning
                </div>
                <div className="wall-text" style={{ marginTop: "10px" }}>
                    Status: <span>TODO</span>
                </div>
                <div className="intro-touch">
                </div>
            </div>
            <div className="intro-img duba" style={{ width: '60%' }}>
                <img className="large-img" style={{ width: '500px' }} src={DubaImg} alt="duba" />
            </div>
        </div>
    )
}

export default Duba;