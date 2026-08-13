import { Mail, MapPin, Phone } from "lucide-react";
import { FaEnvelope } from "react-icons/fa6";
import { motion } from "framer-motion";
import { itemVariants } from "./animation";

export const FooterBrand = ({ brandName, tagline, email, phone, address }) => (
    <motion.div variants={itemVariants}>
        <div className="mb-4 flex items-center gap-3">
            <img
                src="/logo_amien.png"
                alt={brandName}
                className="h-10 w-10 rounded-full object-cover ring-1 ring-[var(--color-border)]"
            />
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-white/80">
            {tagline}
        </p>
        <div className="mt-4 space-y-2 text-sm">
            <a
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-white/80 transition hover:text-white"
            >
                <FaEnvelope className="h-3.5 w-3.5" />
                {email}
            </a>
            <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-white/80 transition hover:text-white"
            >
                <Phone className="h-3.5 w-3.5" />
                {phone}
            </a>
            <p className="flex items-center gap-2 pt-1 text-xs text-white/80">
                <MapPin className="h-3.5 w-3.5" />
                {address}
            </p>
        </div>
    </motion.div>
);