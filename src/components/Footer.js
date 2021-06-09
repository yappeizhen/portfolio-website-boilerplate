import React from "react";
import { LinkedinOutlined, GithubOutlined, MailOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Button } from 'antd';

function Footer() {
    return (
        <div style={{ padding: '25px 80px', backgroundColor: "whitesmoke" }}>
            <h3 style={{ float:"left", display: "inline", color: "black" }}>Let's Connect!</h3>
            <h3 style={{ float:"right", display: "inline", color: "black" }}>Back to Top <ArrowUpOutlined/></h3>
            <div style={{ float: "center", marginTop:"-5px"}}>
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