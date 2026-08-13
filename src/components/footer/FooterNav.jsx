import { motion } from "framer-motion";
import { itemVariants } from "./animation";
import { NAV_ITEMS } from "./footerConfig";

export const FooterNav = () => (
    <motion.div variants={itemVariants}>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-white/70">
            Navigation
        </p>
        <ul className="mt-4 space-y-2">
            {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                    <a
                        href={item.href}
                        className="text-sm text-white/80 transition hover:text-white"
                    >
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
    </motion.div>
);