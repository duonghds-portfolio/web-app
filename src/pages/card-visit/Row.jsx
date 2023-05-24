export const Row = ({mainColor, icon, text}) => {
    const textTruncate = (text) => {
        if(text.length > 20) {
            return `${text.substr(0,20)}...`
        }
        return text
    }
    return(
        <div className="row" style={{ borderBottom: `0.5px solid ${mainColor}` }}>
            <img src={icon} alt="" />
            <p style={{ color: '#888B8D', fontWeight: 'bold' }}>{textTruncate(text)} <i className="arrow right"></i></p>
        </div>
    )
}