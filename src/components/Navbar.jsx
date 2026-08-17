import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/logo_amien.png'
import { FaLinkedin, FaGithub, FaInstagram, FaTiktok, FaFacebook, FaBars, FaTimes, FaDownload } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const NAV_LINKS = [
    { label: 'Acceuil', href: '#acceuil' },
    { label: 'A propos', href: '#apropos' },
    { label: 'Projets', href: '#projets' },
    { label: 'Competences', href: '#competences' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Contacts', href: '#contacts' },
]

// Chemin du CV 
const CV_PATH = '/documents/CV-Christ-Amien.pdf'

export function Navbar() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <nav className="fixed left-1/2 top-6 z-50 w-[95%] max-w-6xl -translate-x-1/2">

                {/* ===== Desktop : barre complète ===== */}
                <div className="hidden min-h-[72px] items-center justify-between gap-3 rounded-full border-[5px] border-black bg-white p-2 shadow-[0_8px_20px_rgba(0,0,0,0.25)] md:flex">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                        <img
                            src={logo}
                            alt="Logo Amien"
                            className="h-full w-full object-contain p-1"
                        />
                    </div>

                    <div className="flex flex-1 flex-nowrap items-center justify-center gap-4 overflow-x-auto whitespace-nowrap lg:gap-8">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="font-medium text-black transition hover:text-gray-500"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex shrink-0 items-center justify-center rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800">
                        <div className="flex items-center justify-center gap-5 text-2xl">
                            <a
                                href="https://www.linkedin.com/in/amien-christ-143801367"
                                target="_blank"
                                rel="noreferrer"
                                className="transition hover:-translate-y-1 hover:text-blue-400"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="https://github.com/ChristAmien"
                                target="_blank"
                                rel="noreferrer"
                                className="transition hover:-translate-y-1 hover:text-gray-300"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://x.com/christ_amien"
                                className="transition hover:-translate-y-1 hover:text-gray-400"
                            >
                                <FaXTwitter />
                            </a>
                            <a
                                href="https://www.instagram.com/christ.vmienn2?igsh=MTV4YW4xa2Vlc2J6ZQ=="
                                className="transition hover:-translate-y-1 hover:text-pink-500"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://www.tiktok.com/@christ.vmien13?_r=1&_t=ZS-98S3s5nxvyH"
                                className="transition hover:-translate-y-1 hover:text-pink-700"
                            >
                                <FaTiktok />
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id"
                                className="transition hover:-translate-y-1 hover:text-blue-500"
                            >
                                <FaFacebook />
                            </a>
                        </div>
                    </div>
                </div>

                {/* ===== Mobile : juste hamburger + CV, sans barre ===== */}
                <div className="flex items-center justify-between md:hidden">
                    <button
                        onClick={() => setOpen(true)}
                        aria-label="Ouvrir le menu"
                        className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-black bg-white text-black shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition hover:bg-neutral-100"
                    >
                        <FaBars size={18} />
                    </button>

                    <a
                        href={CV_PATH}
                        target="_blank"
                        rel="noreferrer"
                        download="CV-Christ-Amien.pdf"
                        className="flex items-center gap-2 rounded-full border-[3px] border-black bg-black px-4 py-2.5 text-sm font-semibold text-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] transition hover:bg-gray-800"
                    >
                        <FaDownload size={13} />
                        CV
                    </a>
                </div>
            </nav>

            {/* MENU MOBILE PLEIN ECRAN */}
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
                                onClick={() => setOpen(false)}
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
                            {NAV_LINKS.map((link) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
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
                            href={CV_PATH}
                            target="_blank"
                            rel="noreferrer"
                            download="CV-Christ-Amien.pdf"
                            className="mx-auto mt-4 flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
                        >
                            <FaDownload size={14} />
                            Télécharger mon CV
                        </motion.a>

                        <div className="mt-10 flex justify-center gap-6 pb-10 text-2xl text-white">
                            <a href="https://www.linkedin.com/in/amien-christ-143801367" target="_blank" rel="noreferrer" className="transition hover:text-blue-400">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/ChristAmien" target="_blank" rel="noreferrer" className="transition hover:text-gray-300">
                                <FaGithub />
                            </a>
                            <a href="https://x.com/christ_amien" className="transition hover:text-blue-400">
                                <FaXTwitter />
                            </a>
                            <a href="https://www.instagram.com/christ.vmienn2?igsh=MTV4YW4xa2Vlc2J6ZQ==" className="transition hover:text-pink-500">
                                <FaInstagram />
                            </a>
                            <a href="https://www.tiktok.com/@christ.vmien13?_r=1&_t=ZS-98S3s5nxvyH" className="transition hover:text-pink-700">
                                <FaTiktok />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id" className="transition hover:text-blue-500">
                                <FaFacebook />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}