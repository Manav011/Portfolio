import projection from "@/public/images/projection.webp";
import messenger from "@/public/images/messenger.webp";
import newsimg from "@/public/images/news.webp";
import portfolioimg from "@/public/images/portfolio.webp";
import badge from '@/public/images/OCAJP.webp';
import angularsvg from "@/public/svg/angular.svg";
import bootsrtapsvg from "@/public/svg/bootstrap.svg";
import csvg from "@/public/svg/c.svg";
import cppsvg from "@/public/svg/cpp.svg";
import csssvg from "@/public/svg/css.svg";
import dockersvg from "@/public/svg/docker.svg";
import expresssvg from "@/public/svg/express.svg";
import gitsvg from "@/public/svg/git.svg";
import githubsvg1 from "@/public/svg/github1.svg";
import htmlsvg from "@/public/svg/html.svg";
import javasvg from "@/public/svg/java.svg";
import jssvg from "@/public/svg/js.svg";
import linuxsvg from "@/public/svg/linux.svg";
import mongodbsvg from "@/public/svg/mongodb.svg";
import mysqlsvg from "@/public/svg/mysql.svg";
import nextjssvg from "@/public/svg/nextjs.svg";
import nodesvg from "@/public/svg/node.svg";
import npmsvg from "@/public/svg/npm.svg";
import pythonsvg from "@/public/svg/python.svg";
import reactsvg from "@/public/svg/react.svg";
import scsssvg from "@/public/svg/scss.svg";
import tailwindsvg from "@/public/svg/tailwind.svg";
import typescriptsvg from "@/public/svg/typescript.svg";
import vscodesvg from "@/public/svg/vscode.svg";
import certificateImg from "@/public/images/cert.png";

export const certificate = certificateImg;

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
        "In this project we utilized ReactJS to create and enhance a student portal for project engagement. This addressed a problem from the Govt. of Chandigarh in the Smart India Hackathon, contributing to a 36-hour project marathon with a dedicated team of 5 members. This experience showcased my ReactJS skills and effective collaboration in a fast-paced environment.",
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
    tags: ["Java", "ServerSocket" , "JavaFX"],
    imageUrl: messenger,
    url: "https://drive.google.com/drive/folders/1UgPFe7hG1KnNEmmF7IE9etWK8_PJkI5_",
    githubUrl: "https://github.com/Manav011/Messenger_project",
},
{
    id:3,
    title: "Portfolio",
    description:
        "Explore the synergy of TypeScript, Next.js, and Tailwind CSS in my portfolio, brought to life by Framer Motion and GSAP animations. Seamless transitions unveil my projects, creating an engaging user experience. Discover the ideal fusion of creativity and beauty in this dynamic showcase thanks to flexible design.",
    tags: ["Next.js", "TypeScript" , "Tailwind"],
    imageUrl: portfolioimg,
    url: "https://manav.is-a.dev",
    githubUrl: "https://github.com/Manav011/Portfolio",
},
{
    id:4,
    title: "Quick News",
    description:
        "A sleek web app powered by Angular, TypeScript, and Bootstrap. Breaking news from every corner of the globe, seamlessly delivered through the NewsAPI. Engage with a visually dynamic interface and enjoy a fluid news experience, enriched with captivating custom animation.",
    tags: ["Angular", "Bootstrap" , "TypeScript"],
    imageUrl: newsimg,
    url: "https://github.com/Manav011/NewsWebApp",
    githubUrl: "https://github.com/Manav011/NewsWebApp",
},
] as const;


export const skillsData = [
    {
        name: "OCAJP SE8",
        svg: badge,
        link: "https://education.oracle.com/product/trackp_333",
    },
    {
        name: "Angular",
        svg: angularsvg,
        link: "https://angular.io/",
    },
    {
        name: "Bootstrap",
        svg: bootsrtapsvg,
        link: "https://getbootstrap.com/",
    },
    {
        name: "C",
        svg: csvg,
        link: "https://devdocs.io/c/",
    },
    {
        name: "C++",
        svg: cppsvg,
        link: "https://devdocs.io/cpp/",
    },
    {
        name: "CSS",
        svg: csssvg,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        name: "Docker",
        svg: dockersvg,
        link: "https://www.docker.com/",
    },
    {
        name: "Express",
        svg: expresssvg,
        link: "https://expressjs.com/",
    },
    {
        name: "Git",
        svg: gitsvg,
        link: "https://git-scm.com/",
    },
    {
        name: "GitHub",
        svg: githubsvg1,
        link: "https://github.com/",
    },
    {
        name: "HTML",
        svg: htmlsvg,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        name: "Java",
        svg: javasvg,
        link: "https://dev.java/learn/getting-started/",
    },
    {
        name: "JavaScript",
        svg: jssvg,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        name: "Linux",
        svg: linuxsvg,
        link: "https://www.linux.org/",
    },
    {
        name: "MongoDB",
        svg: mongodbsvg,
        link: "https://www.mongodb.com/",
    },
    {
        name: "MySQL",
        svg: mysqlsvg,
        link: "https://www.mysql.com/",
    },
    {
        name:"Next.js" ,
        svg: nextjssvg,
        link: "https://nextjs.org/",
    },
    {
        name: "Node.js",
        svg: nodesvg,
        link: "https://nodejs.org/en/",
    },
    {
        name: "NPM",
        svg: npmsvg,
        link: "https://www.npmjs.com/",
    },
    {
        name:"Python" ,
        svg: pythonsvg,
        link:"https://www.python.org/",
    },
    {
        name:"React" ,
        svg: reactsvg,
        link:"https://reactjs.org/",
    },
    {
        name:"SCSS",
        svg: scsssvg,
        link:"https://sass-lang.com/",
    },
    {
        name:"Tailwind CSS",
        svg: tailwindsvg,
        link:"https://tailwindcss.com/"
    },
    {
        name:"TypeScript",
        svg: typescriptsvg,
        link:"https://www.typescriptlang.org/",
    },
    {
        name:"VS Code",
        svg: vscodesvg,
        link:"https://code.visualstudio.com/",
    },
] as const;