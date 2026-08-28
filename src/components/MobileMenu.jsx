import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaDownload } from 'react-icons/fa'
import { SocialLinks } from './SocialLinks'

export function MobileMenu({ open, onClose, navLinks, logo, cvPath }) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-black/95 backdrop-blur-sm md:hidden"
                >
                    <div className="flex shrink-0 items-center justify-between px-6 py-6">
                        <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white">
                            <img src={logo} alt="Logo Amien" className="h-full w-full object-contain p-1" />
                        </div>
                        <button
                            onClick={onClose}
                            aria-label="Fermer le menu"
                            className="flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:bg-white/10"
                        >
                            <FaTimes size={20} />
                        </button>
                    </div>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
                        className="flex flex-col items-center gap-7 px-6 py-10"
                    >
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={onClose}
                                variants={{
                                    hidden: { opacity: 0, y: 15 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                className="text-2xl font-medium text-white transition hover:text-gray-400"
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </motion.div>

                    <motion.a
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        href={cvPath}
                        target="_blank"
                        rel="noreferrer"
                        download="CV-Christ-Amien.pdf"
                        className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
                    >
                        <FaDownload size={14} />
                        Télécharger mon CV
                    </motion.a>

                    <div className="mt-10 flex justify-center gap-6 pb-10 text-2xl text-white">
                        <SocialLinks variant="mobile" />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
