import React, { useState } from "react"
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom';
import Home from './../views/Home';
import About from './../views/About';

import { PageHeader, Menu } from 'antd';
import { personalInfoData } from './../assets/data/personalInfo';

function Header(props) {
    const { person } = props;
    const [currentTab, setCurrentTab] = useState();

    const handleClickTab = (e) => {
        setCurrentTab(e.key);
    }

    return (
        <div>
            <BrowserRouter>
                <PageHeader
                    ghost={true}
                    title={person.lastName + " " + person.firstName}
                    extra={[
                        <Menu style={{ backgroundColor: "transparent" }} onClick={handleClickTab} selectedKeys={[currentTab]} mode="horizontal">
                            <Menu.Item style={{ fontWeight: '600' }} key="home">
                                <Link to="/home">Home</Link>
                            </Menu.Item>
                            <Menu.Item href="/about" style={{ fontWeight: '600' }} key="about">
                                <Link to="/about">About</Link>
                            </Menu.Item>
                        </Menu>
                    ]}
                    style={{ marginLeft: "100px", marginRight: "100px" }}
                >
                </PageHeader>
                <Switch>
                    <Route exact path="/" key="all">
                        <Redirect to="/home"/>
                    </Route>
                    <Route path="/home" key="home">
                        <Home />
                    </Route>
                    <Route path="/about" key="about">
                        <About person={personalInfoData}/>
                    </Route>
                    <Route component={Home}/>
                </Switch>

            </BrowserRouter>
        </div>
    )
}

export default Header;