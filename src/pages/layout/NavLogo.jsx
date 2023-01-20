import { Link } from 'react-router-dom';
import DuongHDSLogo from './duonghds-logo.png'
const NavLogo = ({labelName, updatePageActive}) => {
    return(
        <div className="nav-logo"
        style={{fontWeight: 'bold', color: '#0EBAD4', fontSize: '20px'}}
        onClick={() => {updatePageActive(labelName)}}>
            <Link to="/"><img src={DuongHDSLogo} style={{width: '200px'}} alt="duonghds-logo" /></Link>
        </div>
    )
}

export default NavLogo;