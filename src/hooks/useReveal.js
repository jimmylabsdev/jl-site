import { useEffect } from 'react'

/**
 * Adds the `.in` class to any element with `.reveal`, `.draw-path`, or `.pop`
 * when it scrolls into view. Used for staggered page-load and on-scroll
 * animations across the site.
 */
export default function useReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal')
    const drawEls = document.querySelectorAll('.draw-path, .pop')

    const revealIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            revealIO.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    const drawIO = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            drawIO.unobserve(e.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    revealEls.forEach((el) => revealIO.observe(el))
    drawEls.forEach((el) => drawIO.observe(el))

    return () => {
      revealIO.disconnect()
      drawIO.disconnect()
    }
  }, [])
}
