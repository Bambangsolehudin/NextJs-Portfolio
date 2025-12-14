import { RiSearchLine, RiPencilLine, RiBrushLine, RiCodeLine, RiShieldCheckLine } from "react-icons/ri";

const aboutData = {
    techStack: {
        content: [
            { name: "Javascript", icon: "/images/js.png" },
            { name: "Figma", icon: "/images/figma.png" },
            // add more
        ],
    },
    experience: {
        content: [
            {
                role: "Frontend Developer Intern",
                company: "House of Representatives - Philippines",
                period: "Feb 2025 - May 2025",
            },
        ],
    },
    education: {
        content: [
            {
                degree: "Bachelor of Science in Informatics Engineering",
                institution: "Gunadarma University",
                period: "Aug 2016 - Aug 2020",
            },
        ],
    },
    certifications: {
        content: [
            {
                title: "React (Basic)",
                institution: "Hacker Rank",
                date: "Jan 2025",
                image: "/assets/hackerrank_logo.jpg",
                link: "https://www.hackerrank.com/certificates/iframe/d42f3d986b8d"
            },
            {
                title: "Frontend Developer (React)",
                institution: "Hacker Rank",
                date: "Jan 2025",
                image: "/assets/hackerrank_logo.jpg",
                link: "https://www.hackerrank.com/certificates/iframe/b2d798f8cef5"
            },
            {
                title: "Belajar Dasar Pemrograman Javascript",
                institution: "Dicoding",
                date: "Jun 2022",
                image: "https://assets.cdn.dicoding.com/original/commons/new-ui-logo.png",
                link: "https://www.dicoding.com/certificates/JMZVG9E9RZN9"
            },
            {
                title: "Belajar Membuat Aplikasi Web dengan React",
                institution: "Dicoding",
                date: "Jun 2022",
                image: "https://assets.cdn.dicoding.com/original/commons/new-ui-logo.png",
                link: "https://www.dicoding.com/certificates/07Z6R86D2PQR"
            },
            {
                title: "Belajar Fundamental Front-End Web Development",
                institution: "Dicoding",
                date: "Aug 2021",
                image: "https://assets.cdn.dicoding.com/original/commons/new-ui-logo.png",
                link: "https://www.dicoding.com/certificates/MRZMK85YLPYQ"
            }
           
        ],
    },
      
    designProcess: {
        steps: [
            { title: "Research", description: "Before creating something useful, I focus on the details. Careful planning is key.", icon: RiSearchLine },
            { title: "Wireframe", description: "With the details set, ideas move onto pen and paper, shaping the website's layout.", icon: RiPencilLine },
            { title: "Design", description: "The exciting part — adding style and life to the wireframes.", icon: RiBrushLine },
            { title: "Development", description: "Turning designs into a fully functional, practical product.", icon: RiCodeLine },
            { title: "Test", description: "Optimizing load speed, SEO, and performance for a seamless experience.", icon: RiShieldCheckLine },
        ]
          
    }
      
};

export const techIcons = {
    HTML: {
        name: "HTML",
        url: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    },
    CSS: {
        name: "CSS",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    },
    JavaScript: {
        name: "JavaScript",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    NextJs: {
        name: "NextJs",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    React: {
        name: "React",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    TailwindCSS: {
        name: "TailwindCSS",
        url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    Vue: {
        name: "Vue",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    },
    Laravel: {
        name: "Laravel",
        url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    },
    Bootstrap: {
        name: "Bootstrap",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
    MySQL: {
        name: "MySQL",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    Figma: {
        name: "Figma",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    },
    AdobeXD: {
        name: "Adobe XD",
        url: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
    },
    Git: {
        name: "Git",
        url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
};
  

export default aboutData;
  