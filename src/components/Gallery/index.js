import { useEffect, useState } from "react"

import clsx from "clsx"

import styles from "./index.module.scss"

function Gallery({ children, startIndex = 0, intervalMs = 5000 }) {
  const [selectedIndex, setSelectedIndex] = useState(startIndex)
  const shownItem = children[selectedIndex]

  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectedIndex((selectedIndex + 1) % children.length)
    }, intervalMs)

    return () => {
      clearTimeout(timer)
    }
  }, [selectedIndex, children.length, intervalMs])

  return (
    <div>
      <div>{shownItem}</div>
      <div className={styles.selector}>
        {children.map((_, index) => (
          <button
            className={clsx(styles.selectorItemContainer)}
            key={index}
            onClick={() => setSelectedIndex(index)}
          >
            <span
              className={clsx(
                styles.selectorItem,
                index === selectedIndex && styles.selectorItemActive
              )}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Gallery
