import { ArrowDown } from "lucide-react";

// Premier "écran" du scroll horizontal : gros titre d'intro, façon Aquilas Dev
const ProjectsIntro = () => {
  return (
    <div className="flex h-screen w-screen flex-shrink-0 flex-col justify-center bg-slate-950 px-6 sm:w-[70vw] sm:px-16 md:w-[60vw] lg:w-[50vw]">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
        Projets sélectionnés
      </p>

      <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-white sm:text-5xl md:text-6xl">
        Des projets conçus pour{" "}
        <span className="italic text-slate-400">convertir</span>.
      </h2>

      <p className="mt-6 max-w-md text-sm leading-relaxed text-slate-400 sm:text-base">
        Une sélection de projets web et mobile réalisés en formation, en
        freelance ou à titre personnel du site vitrine à l'application
        complète.
      </p>

      <div className="mt-10 flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-slate-500">
        <ArrowDown className="h-4 w-4 animate-bounce" aria-hidden="true" />
        Défilez vers le bas pour explorer
      </div>
    </div>
  );
};

export default ProjectsIntro;
