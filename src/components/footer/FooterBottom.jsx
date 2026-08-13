import { motion } from "framer-motion";
import { itemVariants } from "./animation";

export const FooterBottom = ({ copyrightText, footerMessage }) => {
    const currentYear = new Date().getFullYear();
    return (
        <motion.div
            variants={itemVariants}
            className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-[var(--color-border)] pt-6 text-center font-mono text-xs text-white/70 sm:flex-row sm:text-left"
        >
            <p>
                © {currentYear} {copyrightText}
            </p>
            <p>{footerMessage}</p>
        </motion.div>
    );
};