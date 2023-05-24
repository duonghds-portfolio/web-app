import React from 'react';
import './CardVisit.css'
import NavLogo from '../layout/NavLogo';
import CardVisitLogo from './CardVisitLogo';

import CompanyImg from './company.png';
import InstaImg from './instagram.png';
import FacebookImg from './facebook.png';
import LinkedinImg from './linkedin.png';
import { Row } from './Row';

import { API } from './fake-data';

export default class CardVisit extends React.Component{
    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        if(!this.state) {
            const data =  API.getDataByID(id)
            this.setState({
                data
            })
        }
    }
    
    render() {
        if(!this.state) return null;
        const { mainColor, gradientColor, avatarURL, title, companyName,
                nickname, lastName, ig, fb, linkedin } = this.state.data;
        return (
            <div className="shift-asia">
                <div className="content">
                    <div className="company-info" style={{
                        background: mainColor,
                        //eslint-disable-next-line
                        background: gradientColor,
                        opacity: 1}}></div>
                    <div className="main-info">
                        <div className="header-info">
                            <div className="avatar" style={{ border: `3px solid ${mainColor}` }}>
                                <img src={avatarURL} alt="" />
                            </div>
                            <div className="name-title">
                                <div className="name"><span style={{color: mainColor}}>{nickname}</span> {lastName}</div>
                                <div className="title">{title}</div>
                            </div>
                        </div>
                        <div className="extra-info">
                            <Row mainColor={mainColor} icon={CompanyImg} text={companyName} />
                            <Row mainColor={mainColor} icon={InstaImg} text={ig} />
                            <Row mainColor={mainColor} icon={FacebookImg} text={fb} />
                            <Row mainColor={mainColor} icon={LinkedinImg} text={linkedin} />
                        </div>
                    </div>
                </div>
                <div className="shift-asia-logo">
                    <NavLogo></NavLogo>
                    <CardVisitLogo></CardVisitLogo>
                </div>
            </div>
        )
    }
}
    