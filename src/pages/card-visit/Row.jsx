export const Row = ({mainColor, icon, text}) => {
    return(
        <div className="row" style={{ borderBottom: `0.5px solid ${mainColor}` }}>
            <img src={icon} alt="" />
            <p style={{ color: '#888B8D', fontWeight: 'bold' }}>{text} <i className="arrow right"></i></p>
        </div>
    )
}