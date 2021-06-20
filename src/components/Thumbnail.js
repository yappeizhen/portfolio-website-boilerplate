import React from "react"
import { Card, Button } from 'antd';
import { LinkOutlined } from '@ant-design/icons';

function Thumbnail(props) {
    const { experience, size } = props;
    var chosenSize = ""
    if (size != null && size === "small") {
        chosenSize = " small";
    }
    const showLink = () => {
        if (experience.link) {
            return <Button className="icon-button" href={experience.link} size="large" target="_blank" icon={<LinkOutlined />} />
        }
    }

    return (
        <div className={"thumbnail-wrapper" + chosenSize}>
            <Card className={"thumbnail-card" + chosenSize} style={{ backgroundColor: `${experience.themeColor}` }} >
                <img className="thumbnail-img" alt="thumbnail" src={experience.img} />
            </Card>
            <div className={"thumbnail-text" + chosenSize}>
                <h2>{experience.name} {showLink()}</h2>
                <h3>{experience.role}</h3>
            </div>
        </div>
    );
}

export default Thumbnail;