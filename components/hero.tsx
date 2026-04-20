"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Sponsors } from "./sponsors"
import { motion, AnimatePresence } from "framer-motion"

export function Hero() {
  const words = ["Inovação", "Tecnologia"]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Fade In inicial */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/SiteBes2023/fundo1.jpg"
          alt="Turma de formandos BES 2023"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20 flex flex-col items-center">
        {/* Título Principal Animado */}
        <motion.h1 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-balance max-w-4xl"
        >
          BES 2023 – UEPA
        </motion.h1>
        
        {/* Container do Texto que Rola (Efeito Slide-up) */}
<div className="h-[1.5em] mb-6 overflow-hidden relative w-full flex justify-center items-center">
  <AnimatePresence mode="wait">
    <motion.span
      key={words[index]}
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -40, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="text-3xl md:text-4xl lg:text-5xl font-semibold block absolute"
    >
      {words[index]}
    </motion.span>
  </AnimatePresence>
</div>

        {/* Subtítulo com Fade In */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed text-pretty"
        >
          Desenvolvemos soluções tecnológicas de impacto regional durante nossa graduação na UEPA. 
          Conheça nossa trajetória e nos ajude a celebrar esta conquista acadêmica.
        </motion.p>
        
        {/* Botão com animação Spring */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20, 
            delay: 0.6 
          }}
        >
          <Button
            asChild
            size="lg"
            className="bg-secondary text-primary hover:bg-secondary/90 font-semibold text-lg px-8 py-6 shadow-xl transition-all"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="#apoiar">Quero Contribuir</Link>
            </motion.div>
          </Button>
        </motion.div>

        {/* Sponsors - Aparece por último */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 w-full max-w-5xl"
        >
          <Sponsors />
        </motion.div>
      </div>

      {/* Scroll Indicator Animado */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-8 h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <motion.div 
            animate={{ 
              y: [0, 16, 0],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-1.5 h-3 bg-white/70 rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  )
}