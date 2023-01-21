import React from 'react'
import { NotificationContainer } from 'react-notifications';
import { Outlet } from "react-router-dom";
import ContactForm from '../../components/ContactForm';
import ContactButton from "./ContactButton";
import NavLabel from "./NavLabel";
import NavLogo from "./NavLogo";
import SlideContent from "./SlideContent";
const MaxContentPage = 2;
const AboutMeLabel = "About me";
const ProjectsLabel = "Projects";
const SkillsLabel = "Skills";
export default class Layout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			contentPage: 1,
			pageActive: AboutMeLabel,
		}
	}

	gotoPage = (targetPage) => {
		let currentPage = this.state.contentPage;
		if (currentPage === targetPage) {
			return
		}
		this.setNewActiveSlide(currentPage, targetPage)
		if (currentPage > targetPage) {
			for (let i = currentPage; i >= targetPage; i--) {
				let id = `content-${i}`
				let content = document.getElementById(id)
				content.style.marginLeft = "0%";
			}
			return
		}
		for (let i = currentPage; i < targetPage; i++) {
			let id = `content-${i}`
			let content = document.getElementById(id)
			content.style.marginLeft = "-100%";
		}
	}

	setNewActiveSlide = (inactivePage, activePage) => {
		let inactiveId = `content-direct-${inactivePage}`
		let activeId = `content-direct-${activePage}`
		//inactive current direct
		let direct = document.getElementById(inactiveId)
		direct.classList.remove("active")
		//active pre direct
		let directPre = document.getElementById(activeId)
		directPre.classList.add("active")
		this.setState({
			contentPage: activePage
		})
	}

	backPage = () => {
		let contentPage = this.state.contentPage
		if (contentPage === 1) {
			return
		}
		let prePage = contentPage - 1
		this.setNewActiveSlide(contentPage, prePage)
		let id = `content-${prePage}`
		let content = document.getElementById(id)
		content.style.marginLeft = "0%";
	}

	nextPage = () => {
		let contentPage = this.state.contentPage
		if (contentPage === MaxContentPage) {
			return
		}
		let id = `content-${contentPage}`
		let content = document.getElementById(id)
		content.style.marginLeft = "-100%";
		this.setNewActiveSlide(contentPage, contentPage + 1)
	}

	updatePageActive = (label) => {
		this.setState({
			pageActive: label
		})
	}

	render() {
		const { pageActive } = this.state
		return (
			<>
				<ContactForm />
				<div className="outline">
					<div className="nav-bar">
						<NavLogo labelName={AboutMeLabel} updatePageActive={this.updatePageActive} />
						<div className="nav-button">
							<NavLabel labelName={AboutMeLabel} path="/" pageActive={pageActive} updatePageActive={this.updatePageActive} />
							<NavLabel labelName={ProjectsLabel} path="/projects" pageActive={pageActive} updatePageActive={this.updatePageActive} />
							<NavLabel labelName={SkillsLabel} path="/skills" pageActive={pageActive} updatePageActive={this.updatePageActive} />
							<ContactButton />
						</div>
					</div>
				</div>
				<div className="content">
					<div className="left-arrow">
						<i className="arrow left inactive" onClick={this.backPage}></i>
					</div>
					<div className="main-content">
						<Outlet />
					</div>
					<div className="right-arrow">
						<i className="arrow right" onClick={this.nextPage}></i>
					</div>
				</div>
				<div className="outline">
					<SlideContent maxContentPage={MaxContentPage} gotoPage={this.gotoPage} />
				</div>
				<NotificationContainer />
			</>
		)
	}
}