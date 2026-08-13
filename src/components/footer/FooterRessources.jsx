import { FileText } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { itemVariants } from "./animation";
import Folder from "../ui/Folder";

const FolderPaper = ({ href, children }) => (
    
    <a  
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        onClick={(e) => e.stopPropagation()}
        className="flex h-full w-full items-center justify-center text-[var(--color-accent)]"
    >
        {children}
    </a>
);

export const FooterResources = ({ socialLinks, email }) => {
    const github = socialLinks.find((s) => s.icon === "FaGithub");
    const linkedin = socialLinks.find((s) => s.icon === "FaLinkedin");
    const cvPath = "/documents/CV-Christ-Amien.pdf";

    return (
        <motion.div variants={itemVariants} className="flex flex-col items-start gap-3 lg:items-center">
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/70">
                Mes ressources
            </p>
            <Folder
                color="#7c3aed"
                size={0.9}
                items={[
                    <FolderPaper key="gh" href={github?.href}>
                        <FaGithub className="h-4 w-4" />
                    </FolderPaper>,
                    <FolderPaper key="li" href={linkedin?.href}>
                        <FaLinkedin className="h-4 w-4" />
                    </FolderPaper>,
                    <FolderPaper key="cv" href={cvPath}>
                        <FileText className="h-4 w-4" />
                    </FolderPaper>,
                ]}
            />
            <p className="text-center text-[11px] text-white/70 lg:max-w-[120px]">
                Clique pour ouvrir : GitHub, LinkedIn, CV
            </p>
        </motion.div>
    );
};