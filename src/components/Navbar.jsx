import { useState } from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/logo_amien.png'
import { FaBars, FaDownload } from 'react-icons/fa'
import { useHideOnScroll } from '../hooks/useHideOnScroll'
import { SocialLinks } from './SocialLinks'
import { MobileMenu } from './MobileMenu'
import { NAV_LINKS } from '../constants';


// Chemin du CV 
const CV_PATH = '/documents/CV-Christ-Amien.pdf'

export function Navbar() {
    const [open, setOpen] = useState(false)
    const hidden = useHideOnScroll(80)

    return (
        <>
            <motion.nav
                animate={{ y: hidden && !open ? -120 : 0, opacity: hidden && !open ? 0 : 1 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="fixed left-1/2 top-6 z-50 w-[95%] max-w-6xl -translate-x-1/2"
            >

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
                            <SocialLinks variant="desktop" />
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
            </motion.nav>

            <MobileMenu
                open={open}
                onClose={() => setOpen(false)}
                navLinks={NAV_LINKS}
                logo={logo}
                cvPath={CV_PATH}
            />
        </>
    )
}