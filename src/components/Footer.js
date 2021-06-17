import React from "react";
import { LinkedinOutlined, GithubOutlined, MailOutlined, ArrowUpOutlined, FilePdfOutlined } from '@ant-design/icons';
import { Button, BackTop } from 'antd';

// // Create a reference with an initial file path and name
// var storage = firebase.storage();
// var pathReference = storage.ref('Yap Pei Zhen Resume.pdf');

// // Create a reference from a Google Cloud Storage URI
// var gsReference = storage.refFromURL('gs://yappeizhen-7ea44.appspot.com/Yap Pei Zhen Resume.pdf'); 

function Footer() {
    return (
        <div style={{ padding: '25px 80px', backgroundColor: "whitesmoke" }}>
            <h3 style={{ float: "left", display: "inline", color: "black" }}>Let's Connect!</h3>
            <BackTop style={{width: '150px', float: "right", position:"static"}}>
                <h3 style={{ color: "black" }}>Back to Top <ArrowUpOutlined /></h3>
            </BackTop>
            <div style={{ float: "center", marginTop: "-5px" }}>
                <Button href="https://www.linkedin.com/in/peizhen/" target="_blank" type="primary" shape="circle" icon={<LinkedinOutlined />} />
                &nbsp;&nbsp;
                <Button href="https://github.com/yappeizhen" target="_blank" type="primary" shape="circle" icon={<GithubOutlined />} />
                &nbsp;&nbsp;
                <Button href="mailto:yappeizhen@u.nus.edu" type="primary" shape="circle" icon={<MailOutlined />} />
                &nbsp;&nbsp;
                <Button href="gs://yappeizhen-7ea44.appspot.com/Yap Pei Zhen Resume.pdf" type="primary" shape="circle" icon={<FilePdfOutlined />} />
            </div>
        </div >
    )
}

export default Footer;