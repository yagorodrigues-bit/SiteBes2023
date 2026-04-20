"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"
import { motion } from "framer-motion"

export function Sponsors() {
  const logos = [
    { src: "/SiteBes2023/patrocinador.png", alt: "Patrocinador 1" },
    { src: "/SiteBes2023/patrocinador.png", alt: "Patrocinador 2" },
    { src: "/SiteBes2023/patrocinador.png", alt: "Patrocinador 3" },
    { src: "/SiteBes2023/patrocinador.png", alt: "Patrocinador 4" },
    { src: "/SiteBes2023/patrocinador.png", alt: "Patrocinador 5" },
    { src: "/SiteBes2023/patrocinador.png", alt: "Patrocinador 6" },
    { src: "/SiteBes2023/patrocinador.png", alt: "Patrocinador 7" },
    { src: "/SiteBes2023/patrocinador.png", alt: "Patrocinador 8" },
    { src: "/SiteBes2023/patrocinador.png", alt: "Patrocinador 9" },
  ]

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="w-full py-4 overflow-hidden"
    >
      <div className="container mx-auto px-4 mb-4">
        <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] text-center">
          Nossos Patrocinadores
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex animate-scroll whitespace-nowrap gap-6 py-2 px-4">
          {[...logos, ...logos].map((logo, index) => (
            <Card
              key={index}
              className="flex-shrink-0 w-[140px] h-[70px] flex items-center justify-center bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors overflow-hidden p-2"
            >
              <div className="relative w-full h-full">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  )
}