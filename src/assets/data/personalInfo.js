import img1 from './../images/profileImgAbout.jpeg';
import img from './../images/profileImgHome.jpeg';
import pinkBullets from './../png/pink-bullet-points.png';
import project1 from './../projectLogos/projectLogo1.png';
import project2 from './../projectLogos/projectLogo2.png';
import socialImpact1 from './../socialImpactLogos/socialImpactLogo1.png';
import socialImpact2 from './../socialImpactLogos/socialImpactLogo2.png';
import socialImpact3 from './../socialImpactLogos/socialImpactLogo3.png';
import workLogo1 from './../workLogos/workLogo1.png';
import workLogo2 from './../workLogos/workLogo2.png';

export const personalInfoData = {
    themeColor: { primaryColor: "#ce4c92" },
    firstName: "Pei Zhen",
    lastName: "Yap",
    areaOfInterest: "a Software Developer",
    img: img,
    img1: img1,
    profilePattern: pinkBullets,
    aboutIntro: ["I am an interdisciplinary student seeking to apply simple solutions to solve complex social problems.", "In my free time, I enjoy birdwatching and indulging in fantasy novels."],
    contact: {
        linkedIn: "https://www.linkedin.com",
        gitHub: "https://github.com",
        email: "email@email.com",
    }
}

export const workExperienceData = [
    {
        name: "Company Name 1",
        role: "Frontend Development Intern",
        img: workLogo1,
        themeColor: "#d5c3eb",
        link: "/#",
    },
    {
        name: "Company Name 2",
        role: "Software Engineer",
        img: workLogo2,
        themeColor: "#c7ddf0",
    },
]

export const projectData = [
    {
        name: "Project 1",
        role: "Systems Thinking Researcher",
        img: project1,
        themeColor: "#c7f0e2",
        link: "/#",
    },
    {
        name: "Project 2",
        role: "Full Stack Developer · Creator",
        img: project2,
        themeColor: "#f0eec7"
    },
]

export const socialImpactData = [
    {
        name: "Social Impact 1",
        role: "Spearheaded several carnival events, panel forums, as well as Freshmen Orientation to promote the inclusion of students with special needs in the community.",
        img: socialImpact1,
        themeColor: "#f0c7eb"
    },
    {
        name: "Social Impact 2",
        role: "Launched a new agricultural tourism model in Tra Vinh, Vietnam to stimulate upskilling and create sustainable income sources",
        img: socialImpact2,
        themeColor: "#f0d3c7"
    },
    {
        name: "Social Impact 3",
        role: "Initiated a virtual mentorship programme for underprivileged students, providing tutoring support in light of COVID-19 disruptions",
        img: socialImpact3,
        themeColor: "#c7cef0"
    },
]

export const skillsList = [
    {
        name: "React",
        color: "geekblue",
    },
    {
        name: "React Native",
        color: "purple",
    },
    {
        name: "Angular",
        color: "magenta"
    },
    {
        name: "Typescript",
        color: "cyan"
    },
    {
        name: "Javascript",
        color: "gold"
    },
    {
        name: "JavaEE",
        color: "lime"
    },
    {
        name: "JPQL",
        color: "magenta"
    },
    {
        name: "Systems Thinking",
        color: "orange"
    },
    {
        name: "C",
        color: "geekblue"
    },
    {
        name: "R",
        color: "lime"
    },
    {
        name: "Java",
        color: "purple"
    },
    {
        name: "Wiley Certified Big Data Analyst",
        color: "blue"
    },
]