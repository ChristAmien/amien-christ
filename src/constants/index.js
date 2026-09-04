import project1 from "../assets/projects/image.png";
import project2 from "../assets/projects/EduScan.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/Coffee.png"
import project6 from "../assets/projects/project-6.jpg"
import project7 from "../assets/projects/obvx.png"
import { color } from "framer-motion";

export const HERO_CONTENT = `Développeur Full Stack passionné par la conception d’applications web modernes et performantes. Je travaille principalement avec Java, Spring Boot, React et JavaScript, avec un intérêt particulier pour le développement backend, les API REST et les solutions digitales dans le secteur bancaire.`;

export const ABOUT_TEXT = `Je suis un développeur Full Stack passionné, spécialisé dans Java, Spring Boot, React et JavaScript. Je conçois des applications web modernes en travaillant aussi bien sur le backend, les API REST et les bases de données que sur les interfaces utilisateur.
Curieux et constamment en apprentissage, j’aime transformer des idées en solutions concrètes à travers des projets personnels. Mon ambition est de progresser en tant que développeur logiciel et de créer des applications fiables, performantes et évolutives, avec un intérêt particulier pour le secteur bancaire et financier.`

export const EXPERIENCES = [
    {
        year: "2026",
        role: "Développeur Java",
        company: "Projets Personnels",
        description: `Simulation des opérations bancaires (comptes, clients, transactions) en Java. Développement d'une API REST avec Spring Boot incluant CRUD et gestion des avis utilisateurs, connectée à une base de données. Tests des requêtes API avec Postman.`,
        technologies: ["Java", "Spring Boot", "REST API", "Postman"],
    },
    /*{
        year: "2026",
        role: "Développeur",
        company: "OIJD-CIV",
        description: `Développeur travaillant sur la maintenance de site web de l'OIJD, veillant à la sécurité du site web et à la fiabilité`,
        technologies: ["Java", "Spring Boot", "TYPESCRIPT", "TAILWINDCSS"],
    },*/
    {
        year: "2025 - 2026",
        role: "Développeur Web",
        company: "OBVX",
        description: `Création et administration de bases de données. Conception de l'interface utilisateur en collaboration avec l'équipe Frontend.`,
        technologies: ["Web", "Base de données", "UI"],
    },
];

export const PROJECTS = [
    {
        title: "Dinevoria",
        image: project1,
        description:
            "Plateforme de restauration en ligne pensée pour offrir une navigation fluide, un parcours commande clair et une expérience visuelle premium. Le projet met en avant l'UX, la structure de contenu et la fluidité de l'interaction sur mobile et desktop.",
        technologies: ["REACT", "TAILWINDCSS", "FRAMER"],
        demoUrl: "https://dinevoria.vercel.app/",
        sourceUrl: "https://github.com/ChristAmien/Dinevoria",
    },
    {
        title: "EduScan",
        image: project2,
        description:
            "EduScan est une application mobile de gestion scolaire permettant d’identifier rapidement les étudiants grâce à un QR Code et de consulter leur statut de paiement et leur solde scolaire",
        technologies: ["Flutter", "Supabase"],
        demoUrl: "https://christamien.github.io/EduScan/#/login",
        sourceUrl: "https://github.com/ChristAmien/EduScan",
    },
    {
        title: "SkillPath",
        image: project4,
        description:
            "Plateforme d'e-learning tournée vers la progression des apprenants, avec une architecture de parcours claire, des contenus structurés et une interface pensée pour favoriser la concentration et l'engagement.",
        technologies: ["REACT", "TAILWINDCSS"],
        demoUrl: "https://skillpath-lac-eta.vercel.app/",
        sourceUrl: "https://github.com/ChristAmien/Skillpath",
    },
    {
        title: "OBVX",
        image: project7,
        description:
            "OBVX est une plateforme e-commerce dédiée à la vente de vêtements streetwear. Elle propose une interface moderne et immersive, facilitant la découverte des produits, la navigation par collection et le parcours d’achat sur ordinateur comme sur mobile.",
        technologies: ["REACT", "TAILWINDCSS"],
        demoUrl: "",
        sourceUrl: "",
    },
    {
        title: "Am'Coffee",
        image: project5,
        description:
            "Site vitrine moderne pour un café, avec une identité visuelle premium, des sections de mise en avant des produits et une expérience immersive pensée pour renforcer la marque et la conversion.",
        technologies: ["HTML", "CSS", "JAVASCRIPT"],
        demoUrl: "https://christamien.github.io/AM-Coofee/",
        sourceUrl: "https://github.com/ChristAmien/AM-Coofee",
    },
    {
        title: "Portfolio AMIEN",
        image: project6,
        description:
            "Portfolio personnel conçu pour présenter mes compétences, mes réalisations et mon approche de développement avec une esthétique minimaliste, une navigation immersive et un rendu premium.",
        technologies: ["REACT", "TAILWINDCSS", "JAVASCRIPT", "FRAMER"],
        demoUrl: "https://portfolio-amien-christ.vercel.app/",
        sourceUrl: "https://github.com/ChristAmien/Portfolio-Amien-Christ",
    },

];

export const CERTIFICATIONS = [
    {
        title: "Certification VIBEATHON",
        issuer: "Vibeathon",
        date: "2026",
        file: "/certificates/certificat-vibeathon-2026.pdf",
    },
    {
        title: "Getting started with Microsoft Office 365",
        issuer: "Coursera",
        date: "2026",
        file: "/certificates/Coursera%20DTUY7BEYFJC6.pdf", // espace encodé en %20
    },
    {
        title: "Introduction to SoftWare Developpement",
        issuer: "Coursera and Amazon",
        date: "2026",
        file: "/certificates/Coursera LU6MGU6FJB48.pdf", // espace encodé en %20
    },
    {
        title: "Programming with JAVA",
        issuer: "Coursera and Amazon",
        date: "2026",
        file: "/certificates/Coursera V6B15G4T9ZI7.pdf", // espace encodé en %20
    },
    {
        title: "IA Générative",
        issuer: "MTN Skills Academy",
        date: "2026",
        file: "/certificates/IA_g_n_rative_Certificate.pdf",
    },
    {
        title: "IA Responsable",
        issuer: "MTN Skills Academy",
        date: "2026",
        file: "/certificates/IA_responsable_Certificate.pdf",
    },
    {
        title: "IA Pour Tous",
        issuer: "MTN Skills Academy",
        date: "2026",
        file: "/certificates/L_IA_pour_tous_Certificate.pdf",
    },
    {
        title: "Bases de l'IA Générative",
        issuer: "MTN Skills Academy",
        date: "2026",
        file: "/certificates/Les_bases_de_l_IA_Certificate.pdf",
    },
    {
        title: "Recherche sur Internet",
        issuer: "MTN Skills Academy",
        date: "2026",
        file: "/certificates/Recherche_sur_Internet_et_au_d_Certificate.pdf",
    },
    {
        title: "Booster la productivité avec COPILOT",
        issuer: "MTN Skills Academy",
        date: "2026",
        file: "/certificates/Boostez_votre_productivit_ave_Certificate.pdf",
    },
    {
        title: "Microsoft PowerPoint",
        issuer: "Coursera",
        date: "2026",
        file: "/certificates/Coursera GKFXJRCP95DG.pdf",
    },
    {
        title: "Microsoft Word",
        issuer: "Coursera",
        date: "2026",
        file: "/certificates/Coursera AK8PUBKH9J1F.pdf",
    },
    {
        title: "A2 English ",
        issuer: "FreeCodeCamp",
        date: "2026",
        file: "/certificates/A2 English certification.pdf",
    },
];

export const CONTACT = {
    address: "Bingerville, Abidjan, Côte d'Ivoire ",
    phoneNo: "+225 0706528067 ",
    email: "amienfabien@gmail.com",
};

export const FOOTER_CONTENT = {
    brandName: "AMIEN",
    tagline: "Développeur Full Stack | Passion pour l'innovation digitale",
    email: "amienfabien@gmail.com",
    phone: "+225 0706528067",
    address: "Bingerville, Abidjan, Côte d'Ivoire",
    
    footerLinks: {
        Products: [
            { label: "Portfolio", href: "#" },
            { label: "Projets", href: "#projects" },
            { label: "Technologies", href: "#technologies" },
            { label: "Certifications", href: "#certifications" },
        ],
        Learn: [
            { label: "À propos", href: "#about" },
            { label: "Expériences", href: "#experiences" },
            { label: "Blog", href: "https://blog-amien.vercel.app/" },
            { label: "Ressources", href: "#" },
        ],
        Company: [
            { label: "Nous contacter", href: "#contact" },
            { label: "GitHub", href: "https://github.com/ChristAmien" },
            { label: "LinkedIn", href: "https://linkedin.com/in/amien-christ" },
            { label: "Mentions légales", href: "#" },
        ],
    },
    
    socialLinks: [
        {
            icon: "FaTwitter",
            href: "https://twitter.com/amien_dev",
            label: "Twitter",
        },
        {
            icon: "FaGithub",
            href: "https://github.com/ChristAmien",
            label: "GitHub",
        },
        {
            icon: "FaLinkedin",
            href: "https://linkedin.com/in/amien-christ",
            label: "LinkedIn",
        },
        {
            icon: "FaEnvelope",
            href: "mailto:amienfabien@gmail.com",
            label: "Email",
        },
    ],
    
    copyrightText: "Amien Christ. Tous droits réservés.",
    footerMessage: "Passion pour l'innovation technologique ",
};

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

export const technologies = [
    { name: "React", icon: `${DEVICON_BASE}/react/react-original.svg` },
    { name: "Java", icon: `${DEVICON_BASE}/java/java-original.svg` },
    { name: "Python", icon: `${DEVICON_BASE}/python/python-original.svg` },
    { name: "Spring Boot", icon: `${DEVICON_BASE}/spring/spring-original.svg` },
    { name: "MySQL", icon: `${DEVICON_BASE}/mysql/mysql-original.svg` },
    { name: "PostgreSQL", icon: `${DEVICON_BASE}/postgresql/postgresql-original.svg` },
    { name: "Git", icon: `${DEVICON_BASE}/git/git-original.svg` },
    { name: "GitHub", icon: `${DEVICON_BASE}/github/github-original.svg`, badge: "bg-white" },
    { name: "Tailwind CSS", icon: `${DEVICON_BASE}/tailwindcss/tailwindcss-original.svg` },
    { name: "Docker", icon: `${DEVICON_BASE}/docker/docker-original.svg` },
    { name: "Flask", icon: `${DEVICON_BASE}/flask/flask-original.svg`, badge: "bg-neutral-200" },
    { name: "HTML", icon: `${DEVICON_BASE}/html5/html5-original.svg` },
    { name: "CSS", icon: `${DEVICON_BASE}/css3/css3-original.svg` },
    { name: "JavaScript", icon: `${DEVICON_BASE}/javascript/javascript-original.svg` },
    { name: "Flutter", icon: `${DEVICON_BASE}/flutter/flutter-original.svg` },
    { name: "Supabase", icon: `${DEVICON_BASE}/supabase/supabase-original.svg` },
    { name: "Neon", icon: "https://simpleicons.org/icons/neon.svg", color: "green" },
]

export const NAV_LINKS = [
    { label: 'Acceuil', href: '#acceuil' },
    { label: 'A propos', href: '#apropos' },
    { label: 'Projets', href: '#projets' },
    { label: 'Competences', href: '#competences' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Contacts', href: '#contacts' },
]
