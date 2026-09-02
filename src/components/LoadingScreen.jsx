import { useEffect, useState } from 'react'

export function LoadingScreen({
  label = 'AMIEN CHRIST',
  logoSrc = '/logo_amien.png',
  duration = 2200,
  onComplete,
}) {
  const [progress, setProgress] = useState(0)
  const [exiting, setExiting] = useState(false)
  const [entered, setEntered] = useState(false)

  useEffect(() => {
    // petit délai pour déclencher la transition d'entrée du logo + texte
    const enter = requestAnimationFrame(() => setEntered(true))

    const start = performance.now()
    let raf

    const tick = (now) => {
      const elapsed = now - start
      const pct = Math.min(1, elapsed / duration)
      setProgress(pct)

      if (pct < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setTimeout(() => {
          setExiting(true)
          setTimeout(() => onComplete?.(), 500)
        }, 200)
      }
    }

    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      cancelAnimationFrame(enter)
    }
  }, [duration, onComplete])

  const fillPercent = Math.round(progress * 100)

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 transition-opacity duration-500 ${
        exiting ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      {/* Même halo radial que le reste du site */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-4">
          {/* Logo, apparaît en même temps que le nom */}
          <img
            src={logoSrc}
            alt="AMIEN DEV"
            className={`h-10 w-10 object-contain transition-all duration-500 sm:h-14 sm:w-14 ${
              entered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
            }`}
          />

          <div className="relative">
            {/* Contour du texte, toujours visible */}
            <span
              aria-hidden="true"
              className={`block select-none text-[11vw] font-semibold leading-none tracking-tight text-transparent transition-opacity duration-500 sm:text-6xl md:text-7xl ${
                entered ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ WebkitTextStroke: '1.5px rgba(226,232,240,0.35)' }}
            >
              {label}
            </span>

            {/* Remplissage progressif */}
            <span
              className={`absolute inset-0 block select-none text-[11vw] font-semibold leading-none tracking-tight text-slate-100 transition-opacity duration-500 sm:text-6xl md:text-7xl ${
                entered ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ clipPath: `inset(0 ${100 - fillPercent}% 0 0)` }}
            >
              {label}
            </span>
          </div>
        </div>

        {/* Barre de progression */}
        <div className="mx-auto mt-10 h-px w-56 bg-slate-800">
          <div
            className="h-full bg-slate-100 transition-[width] duration-75 ease-linear"
            style={{ width: `${fillPercent}%` }}
          />
        </div>

        <div className="mt-3 text-center font-mono text-xs tracking-widest text-slate-400">
          {String(fillPercent).padStart(3, '0')}%
        </div>
      </div>
    </div>
  )
}