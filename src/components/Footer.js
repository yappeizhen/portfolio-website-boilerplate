import React, { useState } from "react";
import { LinkedinOutlined, GithubOutlined, MailOutlined, ArrowUpOutlined, FilePdfOutlined } from '@ant-design/icons';
import { Button, BackTop } from 'antd';
import storage from "../config/firebase";

function Footer() {
    // Create a reference with an initial file path and name
    var pathReference = storage.ref('YapPeiZhen_Resume.pdf');
    const [resumeDownloadUrl, setResumeDownloadUrl] = useState();
    pathReference.getDownloadURL()
        .then((url) => {
            setResumeDownloadUrl(url);
        });

    return (
        <div style={{ padding: '25px 80px', backgroundColor: "whitesmoke" }}>
            <h3 style={{ float: "left", display: "inline", color: "black", fontWeight: "600" }}>Let's Connect!</h3>
            <BackTop style={{ width: '150px', float: "right", position: "static" }}>
                <h3 style={{ color: "black", fontWeight: "600" }}>Back to Top <ArrowUpOutlined /></h3>
            </BackTop>
            <div style={{ float: "center", marginTop: "-5px", display: 'inline-block' }}>
                <Button href="https://www.linkedin.com/in/peizhen/" target="_blank" type="primary" shape="circle" icon={<LinkedinOutlined />} />
                &nbsp;&nbsp;
                <Button href="https://github.com/yappeizhen" target="_blank" type="primary" shape="circle" icon={<GithubOutlined />} />
                &nbsp;&nbsp;
                <Button href="mailto:yappeizhen@u.nus.edu" type="primary" shape="circle" icon={<MailOutlined />} />
                &nbsp;&nbsp;
                <Button href={resumeDownloadUrl} type="primary" shape="circle" icon={<FilePdfOutlined />} />
            </div>
        </div >
    )
}

export default Footer;