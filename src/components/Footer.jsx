import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FOOTER_CONTENT } from '../constants';
import { StarRating } from './StarRating';


const iconMap = {
    FaTwitter: FaTwitter,
    FaGithub: FaGithub,
    FaLinkedin: FaLinkedin,
    FaEnvelope: FaEnvelope,
};

export const Footer = () => {
    const currentYear = new Date().getFullYear();
    const {
        brandName,
        tagline,
        email,
        phone,
        address,
        footerLinks,
        socialLinks,
        copyrightText,
        footerMessage
    } = FOOTER_CONTENT;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
            },
        },
    };

    return (
        <footer className="relative mt-20 border-t border-gray-800 bg-slate-950 text-gray-300">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_-200px,#3e3e3e,transparent)] opacity-30"></div>

            <div className="relative z-10">
                {/* Main footer content */}
                <motion.div
                    className="mx-auto max-w-7xl px-8 py-16"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
                        {/* Brand section */}
                        <motion.div variants={itemVariants} className="md:col-span-1">
                            <div className="mb-6 flex items-center gap-3">
                                <img
                                    src="/logo_amien.png"
                                    alt={brandName}
                                    className="h-10 w-10 rounded-full object-cover ring-1 ring-gray-700"
                                />
                                <div>
                                    <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        {brandName}
                                    </h2>
                                </div>
                            </div>
                            <p className="mb-4 text-sm text-gray-400">
                                {tagline}
                            </p>
                            <div className="space-y-2 text-sm">
                                <a
                                    href={`mailto:${email}`}
                                    className="flex items-center gap-2 text-gray-400 transition hover:text-blue-400"
                                >
                                    <FaEnvelope className="h-4 w-4" />
                                    {email}
                                </a>
                                <a
                                    href={`tel:${phone.replace(/\s/g, '')}`}
                                    className="flex items-center gap-2 text-gray-400 transition hover:text-blue-400"
                                >
                                    <FaPhone className="h-4 w-4" />
                                    {phone}
                                </a>
                                <div className="flex items-start gap-2 text-gray-400 pt-2">
                                    <span className="text-blue-400 pt-0.5">📍</span>
                                    <span className="text-xs">{address}</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Links sections */}
                        {Object.entries(footerLinks).map(([title, links]) => (
                            <motion.div key={title} variants={itemVariants} className="md:col-span-1">
                                <h3 className="mb-4 font-semibold text-white">{title}</h3>
                                <ul className="space-y-3">
                                    {links.map((link) => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                className="text-sm text-gray-400 transition duration-300 hover:text-blue-400"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}

                        {/* Rating section */}
                        <motion.div variants={itemVariants} className="md:col-span-1">
                            <StarRating />
                        </motion.div>
                    </div>

                    {/* Divider */}
                    <motion.div
                        variants={itemVariants}
                        className="my-12 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
                    />

                    {/* Bottom section */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col items-center justify-between gap-6 md:flex-row"
                    >
                        {/* Social icons */}
                        <div className="flex gap-4">
                            {socialLinks.map(({ icon, href, label }) => {
                                const IconComponent = iconMap[icon];
                                return (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-gray-400 transition duration-300 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        aria-label={label}
                                    >
                                        {IconComponent && <IconComponent className="h-5 w-5" />}
                                    </motion.a>
                                );
                            })}
                        </div>

                        {/* Copyright */}
                        <div className="text-center text-sm text-gray-500 md:text-right">
                            <p>
                                © {currentYear} {copyrightText}
                            </p>
                            <p className="mt-1">{footerMessage}</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    );
};