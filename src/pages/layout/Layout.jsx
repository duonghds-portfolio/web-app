import { Outlet } from "react-router-dom";
import ContactButton from "./ContactButton";
import NavLabel from "./NavLabel";
import NavLogo from "./NavLogo";
import SlideContent from "./SlideContent";

const Layout = () => {
  return (
    <>
    <div className="outline">
      <div className="nav-bar">
        <NavLogo />
        <div className="nav-button">
          <NavLabel labelName="About me" isActive={true} />
          <NavLabel labelName="Project" />
          <NavLabel labelName="Skills" />
          <ContactButton />
        </div>
      </div>
    </div>
    <div className="content">
      <div className="left-arrow"><i className="arrow left"></i></div>
      <div className="main-content">
        <Outlet />
      </div>
      <div className="right-arrow"><i className="arrow right"></i></div>
    </div>
    <div className="outline">
      <SlideContent />
    </div>
    </>
  )
};

export default Layout;