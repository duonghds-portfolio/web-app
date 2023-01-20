import { Link } from "react-router-dom";
const NavLabel = ({labelName, path, pageActive, updatePageActive}) => {
    return(
        <div className={`nav-label ${labelName === pageActive ? 'active' : null}`}>
            <Link to={path} onClick={() => {updatePageActive(labelName)}}>
            {labelName}
            </Link>
        </div>
    )
}

export default NavLabel;