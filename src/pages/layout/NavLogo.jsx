import DuongHDSLogo from './duonghds-logo.png'
const NavLogo = () => {
    return(
        <div className="nav-logo"
        style={{fontWeight: 'bold', color: '#0EBAD4', fontSize: '20px'}}>
            <img src={DuongHDSLogo} style={{width: '200px'}} alt="duonghds-logo" />
        </div>
    )
}

export default NavLogo;