import React, { useState } from "react";
import { HashRouter, Route, Switch } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components'

import { CloseOutlined, MenuOutlined } from '@ant-design/icons';

import { personalInfoData } from '../assets/data/personalInfo';
import About from '../views/About';
import Home from '../views/Home';

// Styled Components

const StyledLink = styled(Link)`
& {
    color: ${props => props.themecolor === "true" ? props.themecolor.primaryColor : `white`};
    padding-left: 20px;
    padding-right: 20px;
    font-size: 16px;
    font-weight: 400;
}
&:hover {
     color: ${props => props.themecolor.primaryColor};
}
`;
const StyledHeaderBar = styled.div`
& {    
    align-items: center;
    justify-content: center;
    position: fixed;
    background-color: black;
    width: 100%;
    padding: 20px 60px 20px 60px;
    z-index: 9;
}
`;
const StyledHeaderText = styled.h3`
& {
    display: inline-block;
    float: left;
    margin: 0;
    font-size: 18px;
    font-weight: 400;
}
&:focus {
    outline: none;
}
`;
const StyledTabBar = styled.nav`
& {
    display: flex;
    flex-direction: row;
    float: right;
    transition: all 0.5s;
}
@media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    display: ${props => props.showNav ? `flex` : `none`}
`;
const StyledNavToggle = styled.div`
& {
    display: none;
    float: right;
}
&:hover {
    opacity: 0.75;
}
@media only screen and (max-width: 768px) {
    align-self: flex-end;
    display: block;
    cursor: pointer;
}
`;

const navLinks = [
    { label: "Home", link: "/home" },
    // { label: "Work", link: "/work" },
    // { label: "Projects", link: "/projects" },
    // { label: "Service", link: "/service" },
    { label: "About Me", link: "/aboutme" }
];

function Navigation({ person }) {
    const [currentTab, setCurrentTab] = useState("Home");
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleToggleClick = () => setIsNavCollapsed(!isNavCollapsed);
    const collapseNav = () => setIsNavCollapsed(true);

    const handleClick = (item) => {
        setCurrentTab(item.label);
    }

    return (
        <HashRouter>
            <StyledHeaderBar onBlur={collapseNav}>
                <StyledHeaderText themecolor={person.themeColor}>
                    Yap Pei Zhen
                    </StyledHeaderText>
                <StyledNavToggle onClick={handleToggleClick}>
                    {isNavCollapsed && <MenuOutlined />}
                    {!isNavCollapsed && <CloseOutlined />}
                </StyledNavToggle>
                <StyledTabBar showNav={!isNavCollapsed} >
                    {navLinks.map((item) => (
                        <StyledLink
                            key={item.label}
                            to={item.link}
                            themecolor={person.themeColor}
                            isclicked={(currentTab === item.label).toString()}
                            onClick={() => handleClick(item)}>{item.label}
                        </StyledLink>))}
                </StyledTabBar>
            </StyledHeaderBar>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/aboutme" key="about">
                    <About person={personalInfoData} />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </HashRouter>
    )
}

export default Navigation;