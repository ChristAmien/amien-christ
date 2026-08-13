import { FaXTwitter, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { motion } from "framer-motion";
import { itemVariants } from "./animation";

const socialIconMap = {
    FaTwitter: FaXTwitter,
    FaGithub: FaGithub,
    FaLinkedin: FaLinkedin,
    FaEnvelope: FaEnvelope,
};

export const FooterSocials = ({ socialLinks }) => (
    <motion.div variants={itemVariants}>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
            Ailleurs
        </p>
        <ul className="mt-4 space-y-2">
            {socialLinks.map(({ icon, href, label }) => {
                const IconComponent = socialIconMap[icon];
                return (
                    <li key={label}>
                        <a
                            href={href}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="flex items-center gap-2 text-sm text-[var(--color-muted)] transition hover:text-[var(--color-ink)]"
                        >
                            {IconComponent && <IconComponent className="h-3.5 w-3.5" aria-hidden="true" />}
                            {label}
                        </a>
                    </li>
                );
            })}
        </ul>
    </motion.div>
);