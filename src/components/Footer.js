import React from "react";
import { LinkedinOutlined, GithubOutlined, MailOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Button, BackTop } from 'antd';

function Footer() {
    return (
        <div style={{ padding: '25px 80px', backgroundColor: "whitesmoke" }}>
            <h3 style={{ float: "left", display: "inline", color: "black" }}>Let's Connect!</h3>
            <BackTop style={{width: '150px', float: "right", position:"static"}}>
                <h3 style={{ color: "black" }}>Back to Top <ArrowUpOutlined /></h3>
            </BackTop>
            <div style={{ float: "center", marginTop: "-5px" }}>
                <Button type="primary" shape="circle" icon={<LinkedinOutlined />} />
                &nbsp;&nbsp;
                <Button type="primary" shape="circle" icon={<GithubOutlined />} />
                &nbsp;&nbsp;
                <Button type="primary" shape="circle" icon={<MailOutlined />} />
            </div>
        </div >
    )
}

export default Footer;