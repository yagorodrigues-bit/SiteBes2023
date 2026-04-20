'use client'
import { motion } from "framer-motion"

export const Reveal = ({ children, direction = "up" }: { children: React.ReactNode, direction?: "up" | "down" | "left" | "right" }) => {
  const directions = {
    up: { y: 50 },
    down: { y: -50 },
    left: { x: 50 },
    right: { x: -50 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }} // Anima apenas a primeira vez que aparece
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}