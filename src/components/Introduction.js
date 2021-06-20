import React from "react"

function Introduction(props) {
    const { person } = props;
    return (
        <div className="intro-container">
            <div className="intro-text">
                <h2>Hello!</h2>
                <br />
                <h1 style={{ margin: '0' }}>I'm <span style={{ color: "#ce4c92" }}>{person.firstName}</span>,</h1>
                <h1>{person.areaOfInterest}</h1>
            </div>
            <div className="profile-image-display">
                <img className="profile-pattern" alt="pink dotted pattern" src={person.profilePattern} />
                <img className="profile-pic" alt="Profile" src={person.img}/>
            </div>
        </div>
    );
}

export default Introduction;