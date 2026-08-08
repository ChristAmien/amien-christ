import { PROJECTS } from "../constants";
import { motion } from "motion/react";
import { ProjectCard } from "./ProjectsCards";

export const Projects = () => {
    return (
        <section
            id="projets"
            className="relative overflow-hidden border-b border-neutral-900 py-24"
            style={{ perspective: 1500 }}
        >
            <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[160px]" />

            <motion.h1
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-24 text-center text-5xl font-bold text-white"
            >
                Mes
                <span className="text-purple-500"> Projets</span>
            </motion.h1>

            <div className="mx-auto flex max-w-7xl flex-col gap-32 px-6">
                {PROJECTS.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index} />
                ))}
            </div>
        </section>
    );
};