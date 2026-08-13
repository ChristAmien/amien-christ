import { motion } from "framer-motion";
import { StarRating } from "../StarRating";
import { FOOTER_CONTENT } from "../../constants";
import { containerVariants } from "./animation";
import { FooterBrand } from "./FooterBrand";
import { FooterNav } from "./FooterNav";
import { FooterResources } from "./FooterRessources";
import { FooterBottom } from "./FooterBottom";

export const Footer = () => {
    const {
        brandName,
        tagline,
        email,
        phone,
        address,
        socialLinks,
        copyrightText,
        footerMessage,
    } = FOOTER_CONTENT;

    return (
        <footer className="border-t border-neutral-800 bg-neutral-900 text-[var(--color-ink)]">
            <motion.div
                className="mx-auto max-w-6xl px-6 py-16 sm:px-10"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
            >
                <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_auto]">
                    <FooterBrand brandName={brandName} tagline={tagline} email={email} phone={phone} address={address} />
                    <FooterNav />
                    <motion.div>
                        <StarRating />
                    </motion.div>
                    <FooterResources socialLinks={socialLinks} email={email} />
                </div>

                <FooterBottom copyrightText={copyrightText} footerMessage={footerMessage} />
            </motion.div>
        </footer>
    );
};