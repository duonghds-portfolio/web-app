export const Row = ({mainColor, icon, text, urlLink, firstIdChar, notAppend}) => {
    const textTruncate = (text) => {
        text = `${firstIdChar ? firstIdChar + text : text}`
        if(text.length > 20) {
            return `${text.substr(0,20)}...`
        }
        return text
    }
    const link = notAppend ? urlLink : `${urlLink}${text}`

    return(
        <a className="row" style={{ borderBottom: `0.5px solid ${mainColor}`}}
            href={link}>
            <img src={icon} alt="" />
            <p style={{ color: '#888B8D', fontWeight: 'bold' }}>{textTruncate(text)} <i className="arrow right"></i></p>
        </a>
    )
}