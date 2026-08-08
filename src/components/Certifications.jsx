import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CERTIFICATIONS } from "../constants";

// Palette de dégradés utilisée quand une certif n'a pas d'image (cert.image).
// Ajoute simplement une clé "image" sur un objet de CERTIFICATIONS pour
// afficher une vraie miniature à la place du dégradé.
const FALLBACK_GRADIENTS = [
    "linear-gradient(135deg, #7c3aed 0%, #1e1033 100%)",
    "linear-gradient(135deg, #a855f7 0%, #0f0a1f 100%)",
    "linear-gradient(135deg, #6d28d9 0%, #18122b 100%)",
    "linear-gradient(135deg, #9333ea 0%, #120a24 100%)",
];

const CertBadge = ({ index, size = 46 }) => (
    <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: FALLBACK_GRADIENTS[index % FALLBACK_GRADIENTS.length] }}
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={size}
            height={size}
            fill="none"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="1.2"
        >
            <circle cx="12" cy="8" r="5" />
            <path d="M8.5 12.5 7 22l5-3 5 3-1.5-9.5" />
        </svg>
    </div>
);

const Certifications = () => {
    const [active, setActive] = useState(0);
    const [previewFile, setPreviewFile] = useState(null);

    const count = CERTIFICATIONS.length;

    return (
        <section id="certifications" className="border-b border-neutral-900 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="my-10 text-center text-4xl text-white"
            >
                Certifications
            </motion.h2>

            {count === 0 ? (
                <p className="text-center text-neutral-500">
                    Aucune certification à afficher pour le moment.
                </p>
            ) : (
                <>
                    {/* ===== Version desktop / tablette (>640px) : bandes animées au hover ===== */}
                    <div
                        className="hidden h-[420px] w-full gap-3 min-[641px]:flex"
                        role="list"
                        aria-label="Liste des certifications"
                    >
                        {CERTIFICATIONS.map((cert, index) => {
                            const isActive = index === active;
                            return (
                                <motion.div
                                    key={index}
                                    role="listitem"
                                    tabIndex={0}
                                    aria-current={isActive ? "true" : undefined}
                                    aria-label={cert.title}
                                    onMouseEnter={() => setActive(index)}
                                    onFocus={() => setActive(index)}
                                    onClick={() => (isActive ? setPreviewFile(cert.file) : setActive(index))}
                                    onKeyDown={(e) => {
                                        if (e.key === "ArrowRight") setActive((index + 1) % count);
                                        if (e.key === "ArrowLeft") setActive((index - 1 + count) % count);
                                        if (e.key === "Enter") setPreviewFile(cert.file);
                                    }}
                                    animate={{ flexGrow: isActive ? 5 : 1 }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="group relative min-w-0 basis-0 cursor-pointer overflow-hidden rounded-xl border border-neutral-800 outline-none focus-visible:border-purple-500"
                                >
                                    {/* Visuel de fond */}
                                    {cert.image ? (
                                        <img
                                            src={cert.image}
                                            alt=""
                                            draggable="false"
                                            className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
                                                isActive ? "grayscale-0 scale-100" : "grayscale scale-105"
                                            }`}
                                        />
                                    ) : (
                                        <CertBadge index={index} />
                                    )}

                                    {/* Voile sombre */}
                                    <div
                                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 transition-opacity duration-500"
                                        style={{ opacity: isActive ? 0.75 : 0.55 }}
                                    />

                                    {/* Contenu quand actif */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 12 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 12 }}
                                                transition={{ duration: 0.35, delay: 0.15 }}
                                                className="absolute inset-x-0 bottom-0 flex flex-col gap-3 p-5"
                                            >
                                                <div>
                                                    <h3 className="text-lg font-semibold leading-tight text-white">
                                                        {cert.title}
                                                    </h3>
                                                    <p className="text-sm text-neutral-300">{cert.issuer}</p>
                                                    <span className="text-xs text-neutral-400">{cert.date}</span>
                                                </div>
                                                <div className="flex gap-3">
                                                    <button
                                                        type="button"
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setPreviewFile(cert.file);
                                                        }}
                                                        className="flex-1 rounded-md bg-purple-600 py-2 text-sm font-medium text-white transition hover:bg-purple-500"
                                                    >
                                                        Voir
                                                    </button>
                                                    <a
                                                        href={cert.file}
                                                        download
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="flex-1 rounded-md border border-purple-600 py-2 text-center text-sm font-medium text-purple-400 transition hover:bg-purple-600/10"
                                                    >
                                                        Télécharger
                                                    </a>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Label replié (panneau non actif) */}
                                    {!isActive && (
                                        <div className="absolute inset-x-0 bottom-0 p-3">
                                            <span className="line-clamp-2 text-xs font-medium text-neutral-200 [writing-mode:vertical-rl]">
                                                {cert.title}
                                            </span>
                                        </div>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* ===== Version mobile (<=640px) : liste verticale empilée, cartes toujours "ouvertes" ===== */}
                    <div
                        className="flex w-full flex-col gap-4 min-[641px]:hidden"
                        role="list"
                        aria-label="Liste des certifications"
                    >
                        {CERTIFICATIONS.map((cert, index) => (
                            <div
                                key={index}
                                role="listitem"
                                aria-label={cert.title}
                                className="flex overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950"
                            >
                                {/* Vignette carrée à gauche */}
                                <div className="relative h-28 w-28 flex-shrink-0">
                                    {cert.image ? (
                                        <img
                                            src={cert.image}
                                            alt=""
                                            draggable="false"
                                            className="absolute inset-0 h-full w-full object-cover"
                                        />
                                    ) : (
                                        <CertBadge index={index} size={34} />
                                    )}
                                </div>

                                {/* Contenu texte + actions */}
                                <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 p-3">
                                    <div className="min-w-0">
                                        <h3 className="truncate text-sm font-semibold leading-tight text-white">
                                            {cert.title}
                                        </h3>
                                        <p className="truncate text-xs text-neutral-400">{cert.issuer}</p>
                                        <span className="text-[11px] text-neutral-500">{cert.date}</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            type="button"
                                            onClick={() => setPreviewFile(cert.file)}
                                            className="flex-1 rounded-md bg-purple-600 py-1.5 text-xs font-medium text-white transition active:bg-purple-500"
                                        >
                                            Voir
                                        </button>
                                        <a
                                            href={cert.file}
                                            download
                                            className="flex-1 rounded-md border border-purple-600 py-1.5 text-center text-xs font-medium text-purple-400 transition active:bg-purple-600/10"
                                        >
                                            Télécharger
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {previewFile && (
                <div
                    onClick={() => setPreviewFile(null)}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="relative h-[85vh] w-full max-w-3xl overflow-hidden rounded-lg bg-neutral-950"
                    >
                        <button
                            onClick={() => setPreviewFile(null)}
                            aria-label="Fermer"
                            className="absolute right-3 top-2 z-10 text-2xl text-neutral-300 hover:text-white"
                        >
                            &times;
                        </button>
                        <iframe
                            src={previewFile}
                            title="Aperçu du certificat"
                            className="h-full w-full border-none"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};

export default Certifications;