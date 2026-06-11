import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WordsPullUp({
  text,
  showAsterisk = false,
  className = '',
  delay = 0,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const words = text.split(' ')

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`} style={{ gap: '0.25em' }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-flex"
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
          {showAsterisk && i === words.length - 1 && word.endsWith('a') && (
            <span className="text-[0.31em] relative top-[-0.3em]">*</span>
          )}
        </motion.span>
      ))}
    </span>
  )
}

export function WordsPullUpMultiStyle({
  segments,
  className = '',
  delay = 0,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  let wordIndex = 0
  const allWords = segments.flatMap(seg => {
    return seg.text.split(' ').map(word => ({
      word,
      className: seg.className || '',
      globalIndex: wordIndex++,
    }))
  })

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center ${className}`} style={{ gap: '0.2em' }}>
      {allWords.map(({ word, className: wordClass, globalIndex }) => (
        <motion.span
          key={globalIndex}
          className={`inline-flex ${wordClass}`}
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{
            duration: 0.6,
            delay: delay + globalIndex * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}
