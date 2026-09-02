import { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { CONTACT } from "../constants";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const BUDGETS = ["< 500K F", "500K - 1M", "1M - 2M", "2M - 5M", "+ 5M"];
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

// Animation de vol au repos (boucle infinie)
const IDLE_ANIMATION = {
    y: [0, -10, 0],
    x: [0, 8, 0],
    rotate: [0, 6, 0],
    opacity: 1,
    transition: { duration: 2.4, repeat: Infinity, ease: "easeInOut" },
};

// Illustration originale : personnage lançant un avion en papier
const PaperPlaneIllustration = ({ controls }) => (
    <motion.svg
        viewBox="0 0 320 300"
        className="h-48 w-48 text-neutral-500 sm:h-56 sm:w-56"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M70 260c-30-10-45-45-30-80 12-28 40-45 70-45 15 0 28 5 38 13" />
        <ellipse cx="150" cy="150" rx="55" ry="70" />
        <circle cx="120" cy="95" r="26" />
        <path d="M100 82c4-10 30-14 38 0" />
        <path d="M150 130c15-20 30-45 45-60" />
        <path d="M195 70c6-4 14-4 18 2" />
        <path d="M55 255h110l-14 30H72z" />
        <path d="M75 255v-40h70v40" />
        <motion.g
            animate={controls}
            initial={{ y: 0, x: 0, rotate: 0, opacity: 1 }}
            className="text-purple-400"
        >
            <path d="M195 60l70-35-30 65-12-22z" />
            <path d="M235 90l-12-22-14 8z" />
        </motion.g>
    </motion.svg>
);

const Contact = () => {
    const formRef = useRef(null);
    const [budget, setBudget] = useState(null);
    const [status, setStatus] = useState(null); // null | "sending" | "sent" | "error"
    const planeControls = useAnimation();

    // Lance l'animation de vol au repos dès le montage du composant
    useEffect(() => {
        planeControls.start(IDLE_ANIMATION);
    }, [planeControls]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(formRef.current);
        const emailValue = String(formData.get("email") || "").trim();

        if (!EMAIL_REGEX.test(emailValue)) {
            setStatus("error");
            return;
        }

        setStatus("sending");

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
                publicKey: PUBLIC_KEY,
            })
            .then(async () => {
                // L'avion s'envole hors de l'écran
                await planeControls.start({
                    x: 300,
                    y: -200,
                    rotate: 25,
                    opacity: 0,
                    transition: { duration: 1, ease: "easeIn" },
                });

                setStatus("sent");
                formRef.current.reset();
                setBudget(null);

                // Remise à zéro puis reprise de l'animation de vol normal
                planeControls.set({ x: 0, y: 0, rotate: 0, opacity: 1 });
                planeControls.start(IDLE_ANIMATION);
            })
            .catch((err) => {
                console.error("EmailJS error:", err);
                setStatus("error");
            });
    };

    return (
        <section id="contacts" className="border-b border-neutral-900 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="my-10 text-center text-4xl text-white"
            >
                Contacts
            </motion.h2>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                {/* Colonne gauche */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col justify-between rounded-lg border border-neutral-800 bg-neutral-900/30 p-8"
                >
                    <div>
                        <h3 className="text-2xl font-bold text-neutral-100">
                            Parlons de votre prochain projet.
                        </h3>
                        <p className="mt-3 max-w-md text-neutral-400">
                            Décrivez-moi votre besoin, je reviens vers vous rapidement pour
                            en discuter.
                        </p>

                        <div className="mt-8 flex flex-col gap-5">
                            <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                                    <MessageCircle className="h-4 w-4" />
                                </div>
                                <a
                                    href={`https://wa.me/${CONTACT.phoneNo.replace(/\s/g, "")}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-neutral-200 hover:text-emerald-400"
                                >
                                    {CONTACT.phoneNo}
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/15 text-purple-400">
                                    <Mail className="h-4 w-4" />
                                </div>
                                <a
                                    href={`mailto:${CONTACT.email}`}
                                    className="text-neutral-200 hover:text-purple-400"
                                >
                                    {CONTACT.email}
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/15 text-blue-400">
                                    <MapPin className="h-4 w-4" />
                                </div>
                                <p className="text-neutral-200">{CONTACT.address}</p>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-10 flex justify-center overflow-hidden"
                    >
                        <PaperPlaneIllustration controls={planeControls} />
                    </motion.div>
                </motion.div>

                {/* Colonne droite : formulaire */}
                <motion.form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex flex-col gap-6 rounded-lg border border-neutral-800 bg-neutral-900/30 p-8"
                >
                    <div>
                        <label className="mb-1 block text-sm text-neutral-400">
                            Nom complet*
                        </label>
                        <input
                            name="name"
                            type="text"
                            required
                            placeholder="Votre nom"
                            className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-purple-500"
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label className="mb-1 block text-sm text-neutral-400">
                                Email*
                            </label>
                            <input
                                name="email"
                                type="email"
                                required
                                pattern={EMAIL_REGEX.source}
                                title="Entrez une adresse email valide"
                                placeholder="vous@exemple.com"
                                className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-purple-500"
                            />
                        </div>
                        <div>
                            <label className="mb-1 block text-sm text-neutral-400">
                                Téléphone
                            </label>
                            <input
                                name="phone"
                                type="tel"
                                placeholder="+225 ..."
                                className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-purple-500"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="mb-1 block text-sm text-neutral-400">
                            Type de demande*
                        </label>
                        <select
                            name="reason"
                            required
                            defaultValue=""
                            className="w-full rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-purple-500"
                        >
                            <option value="" disabled>
                                Choisir...
                            </option>
                            <option value="Nouveau projet">Nouveau projet</option>
                            <option value="Collaboration">Collaboration</option>
                            <option value="Freelance">Mission freelance</option>
                            <option value="Autre">Autre</option>
                        </select>
                    </div>

                    <div>
                        <label className="mb-2 block text-sm text-neutral-400">
                            Budget du projet*
                        </label>
                        <input type="hidden" name="budget" value={budget || ""} />
                        <div className="flex flex-wrap gap-2">
                            {BUDGETS.map((b) => (
                                <motion.button
                                    key={b}
                                    type="button"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setBudget(b)}
                                    className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${budget === b
                                            ? "border-purple-500 bg-purple-600 text-white"
                                            : "border-purple-500/30 bg-purple-500/10 text-purple-300 hover:border-purple-500/60"
                                        }`}
                                >
                                    {b}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <label className="mb-1 block text-sm text-neutral-400">
                            Détails du projet*
                        </label>
                        <textarea
                            name="message"
                            required
                            rows={4}
                            placeholder="Parlez-moi de votre projet..."
                            className="w-full resize-none rounded-md border border-neutral-700 bg-neutral-950 px-3 py-2 text-sm text-neutral-100 outline-none transition focus:border-purple-500"
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={status === "sending"}
                        className="mt-2 rounded-md bg-purple-600 py-2.5 text-sm font-medium text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
                    </motion.button>

                    {status === "sent" && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-sm text-green-400"
                        >
                            Message envoyé ! Je reviens vers vous rapidement.
                        </motion.p>
                    )}
                    {status === "error" && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-sm text-red-400"
                        >
                            Une erreur est survenue, réessayez plus tard.
                        </motion.p>
                    )}
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;