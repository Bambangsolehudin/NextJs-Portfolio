// Images
const TodoList = '/assets/Projects/todoList.png';
const TerminalPortfolio = '/assets/Projects/vuePortfolio.png';
const Soarchives = '/assets/Projects/soarchives.png';
const Snacz = '/assets/Projects/snacz.png';
const EduSparkPH = '/assets/Projects/edusparkph.png';
const Codeit = '/assets/Projects/codeit.png';
const RedesignedNBI = '/assets/Projects/redesigned-nbi.png';
const Orbit = '/assets/Projects/orbit.png';
const Rarebook = '/assets/Projects/redesigned-rarebook.png';

const EMIS4 = '/assets/portfolio/emis/1.jpg';
const LSP = '/assets/portfolio/lsp/lsp.jpg';
const DistributionAPP = '/assets/portfolio/distribusi/distribusi.jpg';
const webBoh = '/assets/portfolio/weboh/weboh.jpg';
const Receiving = '/assets/portfolio/receiving/receiving.jpg';
const BMovie = '/assets/portfolio/BmovieInfo/Bmovie2.png';
const Soundbox = ' /assets/portfolio/soundbox/soundbox01.png';


const projectsData = [
     {
        id: 8,
        title: "Soundbox App",
        image: Soundbox,
        date: "Code.Id (2025)",
        description: `
           Soundbox is an internal project designed to manage information processes 
           (including devices, merchants, transactions, and etc) that are carried out through the 
           soundbox device. This project is currently under development.
        `,
        url: "",
        tech: ["ExpressJs", "MySQL", "NextJs", "TailwindCSS"],
    },
    {
        id: 1,
        title: "EMIS 4.0",
        image: EMIS4,
        date: "Juke Solution (2024 - 2025)",
        description: `
            The EMIS program, short for Education Management Information System, 
            is an educational data management system developed by Kementrian Agama (Kemenag). 
            EMIS provides an accurate, valid, and efficient system for managing student data, 
            enabling a comprehensive understanding of each student's condition based on reliable information. 
            This data serves as the foundation for ensuring that assistance programs, 
            such as the Indonesia Smart Program (PIP), are distributed effectively to students in need.
        `,
        url: "https://emis.kemenag.go.id/",
        tech: ["Laravel", "MySQL", "React Native"],
    },
    {
        id: 6,
        title: "BMOVIEINFO",
        image: BMovie,
        date: "Personal Project - 2025",
        description: `
            Movie information web app built using the OMDb API for searching and viewing detailed movie data. Created as a personal learning project. No streaming functionality included.
        `,
        url: 'https://bmovieinfoapp.netlify.app/',
        tech: ["VueJS", "TailwindCSS"],
    },
    {
        id: 2,
        title: "LSP GETI",
        image: LSP,
        date: "ATT GROUP (2021 - 2022)",
        description: `
            This program was developed to support the needs of the Professional Certification Institution (LSP)
            and is conducted entirely online. Candidates (assessees) are provided with written tests or practical 
            assessments (conducted via Zoom link) and are supervised by certified assessors. 
            The master data for assessors is managed and maintained by the admin user through the system.
        `,
        url: "https://asesi.lsp.geti.id/",
        tech: ["Laravel", "NuxtJs", "Bootstrap", "MySQL"],
    },
    {
        id: 3,
        title: "DistributionAPP V1.0",
        image: DistributionAPP,
        date: "Sarirasa Group (2023 - 2024)",
        description: `
            his program was developed to manage the product distribution transactions from the Sarirasa Group warehouse 
            to Sarirasa stores. Products received at the warehouse are distributed based on the specific orders from each store. 
            The transaction process includes picking, generating the SKB (Shipping Order) number, 
            followed by the distribution receipt process, item splitting into containers, 
            and finally, the creation of a SKB transit document as proof of delivery to the store location.
        `,
        url: "",
        tech: ["ReactJS", "TailwindCSS", "MongoDb", "ExpressJs"],
    },
    {
        id: 4,
        title: "WEBOH V1.0",
        image: webBoh,
        date: "Sarirasa Group (2022 - 2023)",
        description: `
            This program was developed to manage product and sub-product data displayed in the POS menu for 
            the available brands under the Sarirasa Group.It handles various aspects such as product visibility, 
            promotions, pricing, and other related configurations.
            `,
        url: "",
        tech: ["VueJS", "Bootstrap", "ExpressJs", "MongoDb"],
    },
    {
        id: 5,
        title: "ReceivingApp V1.0",
        image: Receiving,
        date: "Sarirasa Group (2022 - 2023)",
        description: `
            This program is created for transactions on receiving goods at the Sarirasa Group Warehouse, 
            in this transaction the goods received will be grouped into several grades after which the goods are weighed,
            and QC, and there is a final process to change the data into a pack, which will later be entered into the goods receipt data.
        `,
        url: '',
        tech: ["VueJS", "Bootstrap", "ExpressJs", "MongoDb"],
    },


];

export const techIcons = {
    HTML: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    CSS: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    ReactJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    TailwindCSS: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    VueJS: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    Laravel: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg",
    Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    AdobeXD: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
    Notion: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    FramerMotion: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
    Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    'React Native': "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    NuxtJs: "https://nuxt.com/assets/design-kit/icon-green.svg",
    MongoDb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    ExpressJs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    NextJs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
};

export default projectsData;
  