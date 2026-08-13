import { HERO_CONTENT } from "../constants"
import profil from "../assets/christ amien.png"
import { delay, motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    }
})

export const Hero = () => {
    return (
        <div id="acceuil" className="border-neutral-900 py-24 pb-4 pt-32 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl text-white">
                            Amien Christ
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-white via-slate-200 to-violet-400 bg-clip-text text-4xl tracking-tight font-medium text-transparent">
                            Developpeur
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tight text-white">
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center lg:justify-end">
                        <motion.img
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2}}
                            src={profil}
                            alt="Christ Amien"
                            className="h-64 w-64 rounded-full object-cover border-4 border-violet-500 shadow-2xl shadow-violet-500/20 lg:h-80 lg:w-80"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}