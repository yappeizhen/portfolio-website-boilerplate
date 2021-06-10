import React, { useState } from "react"
import { PageHeader, Menu } from 'antd';

function Header(props) {
    const { person } = props;

    const [currentTab, setCurrentTab] = useState('home');

    const handleClickTab = (e) => {
        setCurrentTab(e.key);
    }
    return (
        <div>
            <PageHeader
                ghost={true}
                title={person.lastName + " " + person.firstName}
                extra={[
                    <Menu style={{ backgroundColor: "transparent" }} onClick={handleClickTab} selectedKeys={[currentTab]} mode="horizontal">
                        <Menu.Item style={{fontWeight:'600'}} key="home">
                            Home
                        </Menu.Item>
                    </Menu>
                ]}
                style={{ marginLeft: "100px", marginRight: "100px" }}
            >
            </PageHeader>
        </div>
    )
}

export default Header;