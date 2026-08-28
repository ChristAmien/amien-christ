import { useState, useEffect, useRef } from 'react'

/**
 * Détecte la direction du scroll et retourne `true` quand l'élément
 * (ex: une navbar) doit être masqué.
 *
 * @param {number} threshold - distance (px) depuis le haut en dessous
 *   de laquelle on ignore le scroll (évite le flicker près du top)
 */
export function useHideOnScroll(threshold = 80) {
    const [hidden, setHidden] = useState(false)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY < threshold) {
                setHidden(false)
            } else if (currentScrollY > lastScrollY.current) {
                // scroll vers le bas → on cache
                setHidden(true)
            } else {
                // scroll vers le haut → on affiche
                setHidden(false)
            }

            lastScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [threshold])

    return hidden
}
