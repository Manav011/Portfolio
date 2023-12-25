import projection from "@/public/images/projection.png";
import messenger from "@/public/images/messenger.png";
import wordanalyticsImg from "@/public/images/wordanalytics.png";

export const links = [
{
    name: "Home",
    hash: "#top",
},
{
    name: "Projects",
    hash: "#projects",
},
{
    name: "About",
    hash: "#about",
},
{
    name: "Contact",
    hash: "#contact",
},
] as const;

export const projectsData = [
{
    id:1,
    title: "ProjectiON",
    description:
        "In this project we utilized ReactJS to create and enhance a student portal, fostering better interactivity for project engagement. This addressed a problem from the Government of Chandigarh in the Smart India Hackathon, contributing to a 36-hour project marathon with a dedicated team of 5 members. This experience showcased my ReactJS skills and effective collaboration in a fast-paced environment.",
    tags: ["React", "Bootstrap", "MongoDB"],
    imageUrl: projection,
    url: "https://github.com/Manav011/Project-ION-front-end",
    githubUrl: "https://github.com/Manav011/Project-ION-front-end",
},
{
    id:2,
    title: "Messenger",
    description:
        "In this I have demonstrated my Java Socket Programming proficiency by creating a reliable and efficient communication channel between the client and server components of an application. Additionally, I integrated JDBC with MySQL to ensure seamless database access and implemented encryption using Cipher to safeguard sensitive user data.        ",
    tags: ["Java", "JavaFX" , "ServerSocket"],
    imageUrl: messenger,
    url: "https://github.com/Manav011/Messenger_project",
    githubUrl: "https://github.com/Manav011/Messenger_project",
},
{
    id:3,
    title: "Word Analytics",
    description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL"],
    imageUrl: wordanalyticsImg,
    url: "",
    githubUrl: "",
},
{
    id:4,
    title: "Word Analytics",
    description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL"],
    imageUrl: wordanalyticsImg,
    url: "",
    githubUrl: "",
},
] as const;

export const skillsData = [
"HTML",
"CSS",
"JavaScript",
"TypeScript",
"React",
"Next.js",
"Node.js",
"Git",
"Tailwind",
"Prisma",
"MongoDB",
"Redux",
"GraphQL",
"Apollo",
"Express",
"PostgreSQL",
"Python",
"Django",
"Framer Motion",
] as const;