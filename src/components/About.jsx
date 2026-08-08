import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import { Counter } from "./Counter";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay },
    },
});

export const About = () => {
    return (
        <div id="apropos" className="border-b border-neutral-900 pb-4">
            <h1 className="my-8 text-center text-4xl text-white">
                A <span className="text-neutral-500">propos</span>
            </h1>

            <div className="grid gap-10 lg:grid-cols-[1.8fr_1fr] lg:items-start">
                <div className="space-y-8">
                    <motion.p
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="max-w-3xl text-lg leading-8 tracking-tight text-white"
                    >
                        {ABOUT_TEXT}
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="rounded-3xl border border-neutral-700 bg-neutral-900/70 p-6 shadow-xl shadow-black/20">
                        <p className="text-4xl font-bold text-white">
                            <Counter end={2} suffix="+" />
                        </p>
                        <p className="mt-2 text-sm text-neutral-400">
                            Années d’expérience
                        </p>
                    </div>

                    <div className="rounded-3xl border border-neutral-700 bg-neutral-900/70 p-6 shadow-xl shadow-black/20">
                        <p className="text-4xl font-bold text-white">
                            <Counter end={5} suffix="+" />
                        </p>
                        <p className="mt-2 text-sm text-neutral-400">
                            Projets livrés
                        </p>
                    </div>

                    <div className="rounded-3xl border border-neutral-700 bg-neutral-900/70 p-6 shadow-xl shadow-black/20">
                        <p className="text-4xl font-bold text-white">
                            <Counter end={6} suffix="+" />
                        </p>
                        <p className="mt-2 text-sm text-neutral-400">
                            Technologies
                        </p>
                    </div>

                    <div className="rounded-3xl border border-neutral-700 bg-neutral-900/70 p-6 shadow-xl shadow-black/20">
                        <p className="text-4xl font-bold text-white">
                            <Counter end={100} suffix="%" />
                        </p>
                        <p className="mt-2 text-sm text-neutral-400">
                            Satisfaction client
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};