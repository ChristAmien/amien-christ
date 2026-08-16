import OrbitImages from './OrbitImages'
import BlobCursor from './BlobCursor'
import { technologies } from '../constants'

const TechIcon = ({ name, icon, badge }) => (
    <div
        title={name}
        className="flex h-full w-full flex-col items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900/80 p-2 shadow-lg shadow-black/20"
    >
        {badge ? (
            <div className={`flex items-center justify-center rounded-full p-2.5 ${badge}`}>
                <img src={icon} alt={name} className="h-8 w-8 object-contain" />
            </div>
        ) : (
            <img src={icon} alt={name} className="h-12 w-12 object-contain" />
        )}
        <span className="mt-1 truncate text-xs font-medium text-neutral-300">{name}</span>
    </div>
)

const orbitItems = technologies.map((tech) => (
    <TechIcon key={tech.name} {...tech} />
))

export const Technologies = () => {
    return (
        <section id="competences" className="">

            {/* ===== Desktop : orbite animée ===== */}
            <div className="relative left-1/2 hidden w-screen -translate-x-1/2 cursor-none overflow-hidden bg-black pb-12 md:block">

                {/* Fond grille + glow radial */}
                <div className="pointer-events-none absolute inset-0 z-0">
                    <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                    <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div>
                </div>

                {/* Blob cursor */}
                <div className="absolute inset-0 z-30" style={{ opacity: 0.4 }}>
                    <BlobCursor
                        blobType="circle"
                        fillColor="#5227FF"
                        trailCount={1}
                        sizes={[60]}
                        innerSizes={[20]}
                        innerColor="rgba(255,255,255,0.8)"
                        opacities={[0.6]}
                        shadowColor="rgba(0,0,0,0.75)"
                        shadowBlur={5}
                        shadowOffsetX={10}
                        shadowOffsetY={10}
                        filterStdDeviation={30}
                        useFilter={true}
                        fastDuration={0.1}
                        slowDuration={0.5}
                        zIndex={100}
                    />
                </div>

                <h2 className="mt-40 relative z-10 my-6 text-center text-4xl text-white">
                    Competences
                </h2>

                <div className="relative z-10 mx-auto h-[600px] max-w-6xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <OrbitImages
                            items={orbitItems}
                            shape="ellipse"
                            baseWidth={1600}
                            radiusX={650}
                            radiusY={280}
                            rotation={-8}
                            duration={34}
                            itemSize={150}
                            responsive={true}
                            direction="normal"
                            fill
                            showPath={false}
                            paused={false}
                        />
                    </div>
                </div>
            </div>

            {/* ===== Mobile : grille simple ===== */}
            <div className="relative left-1/2 w-screen -translate-x-1/2 bg-black pb-24 md:hidden">
                <h2 className="my-16 text-center text-4xl text-white">
                    Competences
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-4 px-4">
                    {technologies.map((tech) => (
                        <div
                            key={tech.name}
                            className="flex min-w-[140px] flex-col items-center justify-center rounded-2xl border border-neutral-700 bg-neutral-900/70 p-4 shadow-lg shadow-black/20"
                        >
                            {tech.badge ? (
                                <div className={`flex items-center justify-center rounded-full p-3 ${tech.badge}`}>
                                    <img src={tech.icon} alt={tech.name} className="h-9 w-9 object-contain" />
                                </div>
                            ) : (
                                <img src={tech.icon} alt={tech.name} className="h-14 w-14 object-contain" />
                            )}
                            <span className="mt-3 text-sm font-medium text-neutral-200">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}