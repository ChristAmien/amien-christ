import { FaLinkedin, FaGithub, FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const SOCIALS = [
    {
        href: 'https://www.linkedin.com/in/amien-christ-143801367',
        icon: FaLinkedin,
        hoverClass: 'hover:text-blue-400',
    },
    {
        href: 'https://github.com/ChristAmien',
        icon: FaGithub,
        hoverClass: 'hover:text-gray-300',
    },
    {
        href: 'https://x.com/christ_amien',
        icon: FaXTwitter,
        hoverClass: 'hover:text-gray-400',
    },
    {
        href: 'https://www.instagram.com/christ.vmienn2?igsh=MTV4YW4xa2Vlc2J6ZQ==',
        icon: FaInstagram,
        hoverClass: 'hover:text-pink-500',
    },
    {
        href: 'https://www.tiktok.com/@christ.vmien13?_r=1&_t=ZS-98S3s5nxvyH',
        icon: FaTiktok,
        hoverClass: 'hover:text-pink-700',
    },
    {
        href: 'https://www.facebook.com/profile.php?id',
        icon: FaFacebook,
        hoverClass: 'hover:text-blue-500',
    },
]

/**
 * @param {string} variant - 'desktop' (avec translate hover) ou 'mobile' (sans)
 */
export function SocialLinks({ variant = 'desktop' }) {
    const liftClass = variant === 'desktop' ? 'hover:-translate-y-1' : ''

    return (
        <>
            {SOCIALS.map(({ href, icon: Icon, hoverClass }) => (
                <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className={`transition ${liftClass} ${hoverClass}`}
                >
                    <Icon />
                </a>
            ))}
        </>
    )
}
