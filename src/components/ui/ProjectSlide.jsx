import { ArrowUpRight, Code2 } from "lucide-react";


const ProjectSlide = ({ project, index, total }) => {
  const hasDemo = project.demoUrl && project.demoUrl !== "#";
  const hasSource = project.sourceUrl && project.sourceUrl !== "#";

  return (
    <div className="grid h-auto w-screen flex-shrink-0 grid-cols-1 md:h-screen md:grid-cols-2">
      {/* Colonne texte */}
      <div className="relative flex flex-col justify-center bg-slate-950 px-6 py-16 sm:px-16 md:py-0">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
          Projet
        </span>

        <h3 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl md:text-5xl">
          {project.title}
        </h3>

        <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-slate-700 px-3 py-1 font-mono text-[11px] uppercase tracking-wide text-slate-300"
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
                className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 font-mono text-xs font-medium text-slate-950 transition hover:bg-slate-200"
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
                className="flex items-center gap-1.5 font-mono text-xs text-slate-400 underline underline-offset-4 transition hover:text-white"
              >
                <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
                Code source
              </a>
            )}
          </div>
        )}

        {/* Compteur discret en bas de la colonne texte */}
        <span className="absolute bottom-6 left-6 font-mono text-[11px] text-slate-600 sm:left-16">
          0{index + 1} / 0{total}
        </span>
      </div>

      {/* Colonne image */}
      <div className="relative flex items-center justify-center bg-slate-100 p-6 sm:p-10">
        <div className="w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
          {/* Barre style navigateur, comme sur aquidev.com */}
          <div className="flex items-center gap-1.5 border-b border-slate-100 px-4 py-2.5">
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
