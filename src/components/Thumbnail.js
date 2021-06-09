import React from "react"
import { Card } from 'antd';

function Thumbnail(props) {
    const { experience } = props;

    return (
        <div className="thumbnail-wrapper">
            <Card className="thumbnail-card" style={{ backgroundColor: `${experience.themeColor}` }} >
                <img className="thumbnail-img" alt="thumbnail" src={experience.img} />
            </Card>
            <h3>{experience.name}</h3>
            <h4>{experience.role}</h4>
        </div>
    );
}

export default Thumbnail;