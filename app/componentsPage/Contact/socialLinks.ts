import { RiGithubLine, RiLinkedinBoxLine, RiBehanceFill, RiFile2Line, RiMailLine } from 'react-icons/ri';

export const socialLinks = [
    {
        name: 'Email',
        url: 'mailto:karirs.bambang@gmail.com',
        icon: RiMailLine,
        coloredIcon: 'Email',
    },
    {
        name: 'CV',
        url: '/',
        icon: RiFile2Line,
        coloredIcon: "Resume",
    },
    {
        name: 'GitHub',
        url: 'https://github.com/Bambangsolehudin',
        icon: RiGithubLine,
        coloredIcon: 'GitHub',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/bambang-solehudin/',
        icon: RiLinkedinBoxLine,
        coloredIcon: 'LinkedIn',
    },
];

export const iconMap = {
    Behance: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/behance/behance-original.svg",
    LinkedIn: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    GitHub: "https://cdn.worldvectorlogo.com/logos/github-icon-2.svg",
    Email: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg",
    Resume: "https://www.iconrepo.com/download/8588806/resume.svg"
};
