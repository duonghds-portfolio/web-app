import React from 'react'
import { Outlet } from "react-router-dom";
import ContactButton from "./ContactButton";
import NavLabel from "./NavLabel";
import NavLogo from "./NavLogo";
import SlideContent from "./SlideContent";
const MaxContentPage = 4;
// const NextAction = "next";
// const PreAction = "pre";
export default class Layout extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			contentPage: 1,
		}
	}

	backPage = () => {
		let contentPage = this.state.contentPage
		if(contentPage === 1) {
			for(let i=1;i<=MaxContentPage-1;i++) {
				let id = `content-${i}`
				let content = document.getElementById(id)
				content.style.marginLeft = "-100%";
			}
			this.setState({
				contentPage: MaxContentPage
			})
			return
		}
		let prePage = contentPage - 1
		let id = `content-${prePage}`
		let content = document.getElementById(id)
		content.style.marginLeft = "0%";
		this.setState({
			contentPage: prePage
		})
	}

	nextPage = () => {
		// const { contentPage } = this.state
		let contentPage = this.state.contentPage
		let id = `content-${contentPage}`
		let content = document.getElementById(id)
		content.style.marginLeft = "-100%";
		if(contentPage >= MaxContentPage) {
			contentPage = 0;
			for(let i=MaxContentPage;i>=1;i--) {
				let id = `content-${i}`
				let content = document.getElementById(id)
				content.style.marginLeft = "0%";
			}
		}
		this.setState({
			contentPage: contentPage + 1
		})
	}

	render() {
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
					<div className="left-arrow" onClick={this.backPage}>
						<i className="arrow left"></i>
					</div>
					<div className="main-content">
						<Outlet />
					</div>
					<div className="right-arrow" onClick={this.nextPage}>
						<i className="arrow right"></i>
					</div>
				</div>
				<div className="outline">
					<SlideContent />
				</div>
			</>
		)
	}
}