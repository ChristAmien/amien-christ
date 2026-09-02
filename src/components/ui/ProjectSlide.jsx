import { ArrowUpRight, Code2 } from "lucide-react";


const ProjectSlide = ({ project, index, total }) => {
  const hasDemo = project.demoUrl && project.demoUrl !== "#";
  const hasSource = project.sourceUrl && project.sourceUrl !== "#";

  return (
    <div className="grid h-auto w-screen flex-shrink-0 grid-cols-1 border-t border-neutral-800 bg-black md:h-screen md:grid-cols-2">
      {/* Colonne texte */}
      <div className="relative flex flex-col justify-center bg-black px-6 py-16 sm:px-16 md:py-0">
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
          Projet
        </span>

        <h3 className="mt-4 text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
          {project.title}
        </h3>

        <p className="mt-5 max-w-md text-sm leading-relaxed text-neutral-400 sm:text-base">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-neutral-700 bg-neutral-900/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-neutral-300"
            >
              {tech}
            </li>
          ))}
        </ul>

        {(hasDemo || hasSource) && (
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {hasDemo && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-black transition hover:bg-neutral-200"
              >
                Voir le projet
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
            {hasSource && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`Code source — ${project.title}`}
                className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400 underline underline-offset-4 transition hover:text-white"
              >
                <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
                Code source
              </a>
            )}
          </div>
        )}

        {/* Compteur discret en bas de la colonne texte */}
        <span className="absolute bottom-6 left-6 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600 sm:left-16">
          0{index + 1} / 0{total}
        </span>
      </div>

      {/* Colonne image */}
      <div className="relative flex items-center justify-center bg-neutral-950 p-6 sm:p-10">
        <div className="w-full overflow-hidden rounded-xl border border-neutral-800 bg-white shadow-2xl">
          {/* Barre style navigateur, comme sur aquidev.com */}
          <div className="flex items-center gap-1.5 border-b border-neutral-200 bg-neutral-100 px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <img
            src={project.image}
            alt={project.title}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectSlide;
