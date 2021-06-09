
import peizhenImg from './../images/peizhen.jpg';
import pinkBullets from './../png/pink-bullet-points.png';
import solvewareLogo from './../logos/solvewareLogo.png';
import aphroditeLogo from './../logos/aphroditeLogo.png';
import oneEightyLogo from './../logos/oneEightyLogo.png';
import paLogo from './../logos/paLogo.png';

export const personalInfoData = {
    firstName: "Pei Zhen",
    lastName: "Yap",
    roles: ['Software Developer', 'Management Consultant'],
    img: peizhenImg,
    profilePattern: pinkBullets
}

export const workExperienceData = {
    solveware: {
        companyName: "The Solveware Co.",
        role: "Frontend Development Intern",
        img: solvewareLogo,
        themeColor: "#151d32"
    },
    aphrodite: {
        companyName: "The Aphrodite Project – Core Team",
        role: "Frontend Developer · Singapore Charter Lead",
        img: aphroditeLogo,
        themeColor: "#fff7fa"
    },
    consulting: {
        companyName: "180 Degrees Consulting NUS",
        role: "Deputy Project Leader · Project Analyst",
        img: oneEightyLogo,
        themeColor: "#ffffff"
    },
    peoplesAssociation: {
        companyName: "People's Association – SkillsFuture Advice",
        role: "Central Singapore Community Development Council Intern",
        img: paLogo,
        themeColor: "#ffffff"
    },
}