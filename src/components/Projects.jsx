import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "../constants";
import ProjectsIntro from "./ui/ProjectsIntro";
import ProjectSlide from "./ui/ProjectSlide";

const TOTAL_SLIDES = PROJECTS.length + 1;

export default function Projects() {
    const containerRef = useRef(null);
    const trackRef = useRef(null);
    const [distance, setDistance] = useState(0);

    useEffect(() => {
        const measure = () => {
            if (trackRef.current) {
                setDistance(trackRef.current.scrollWidth - window.innerWidth);
            }
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

    return (
        <section id="projets" className="bg-slate-950 md:overflow-x-clip">
            {/* Barre de progression du scroll horizontal */}
            <motion.div
                className="fixed inset-x-0 top-0 z-40 hidden h-0.5 origin-left bg-white md:block"
                style={{ scaleX: scrollYProgress }}
            />

            {/* Version desktop : scroll horizontal sticky (plein écran) */}
            <div
                ref={containerRef}
                className="relative hidden md:block"
                style={{ height: `${TOTAL_SLIDES * 100}vh` }}
            >
                <div className="sticky top-0 h-screen overflow-hidden">
                    <motion.div ref={trackRef} className="flex h-full" style={{ x }}>
                        <ProjectsIntro />
                        {PROJECTS.map((project, index) => (
                            <ProjectSlide
                                key={project.title}
                                project={project}
                                index={index}
                                total={PROJECTS.length}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Version mobile : empilement vertical classique, pas de scroll horizontal */}
            <div className="flex flex-col md:hidden">
                <div className="flex min-h-screen flex-col justify-center bg-slate-950 px-6 py-16">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                        Projets sélectionnés
                    </p>
                    <h2 className="mt-4 font-serif text-4xl leading-tight text-white">
                        Des projets conçus pour{" "}
                        <span className="italic text-slate-400">convertir</span>.
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-slate-400">
                        Une sélection de projets web et mobile réalisés en formation, en
                        freelance ou à titre personnel.
                    </p>
                </div>

                {PROJECTS.map((project, index) => (
                    <ProjectSlide
                        key={project.title}
                        project={project}
                        index={index}
                        total={PROJECTS.length}
                    />
                ))}
            </div>
        </section>
    );
}