"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function Mission() {
  return (
    <section className="py-16 md:py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Imagem vindo da Esquerda */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/SiteBes2023/nossa-missao.jpg"
              alt="Turma BES 2023 UEPA"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Texto vindo da Direita */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nossa Missão
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 text-pretty">
              Como futuros engenheiros de software, nosso compromisso vai além da sala de aula. 
              Buscamos desenvolver soluções tecnológicas que transformem positivamente a 
              realidade da região amazônica e do Brasil.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 text-pretty">
              A formatura representa o reconhecimento de anos de dedicação, aprendizado e 
              superação. Queremos celebrar essa conquista de forma memorável, reunindo 
              familiares, professores e amigos que fizeram parte dessa jornada.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold shadow-lg"
              >
                <Link href="#apoiar">Quero Contribuir</Link>
              </Button>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}