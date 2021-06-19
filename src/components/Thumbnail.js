import React from "react"
import { Card } from 'antd';

function Thumbnail(props) {
    const { experience, size } = props;
    var chosenSize = ""
    if (size != null && size === "small") {
        chosenSize = " small";
    }

    return (
        <div className={"thumbnail-wrapper" + chosenSize}>
            <Card className={"thumbnail-card" + chosenSize} style={{ backgroundColor: `${experience.themeColor}` }} >
                <img className="thumbnail-img" alt="thumbnail" src={experience.img} />
            </Card>
            <div className={"thumbnail-text" + chosenSize}>
                <h3>{experience.name}</h3>
                <h4>{experience.role}</h4>
            </div>
        </div>
    );
}

export default Thumbnail;