const NavLabel = ({labelName, isActive}) => {
    return(
        <div className={`nav-label ${isActive ? 'active' : null}`}>{labelName}</div>
    )
}

export default NavLabel;