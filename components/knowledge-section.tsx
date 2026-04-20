"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function KnowledgeSection() {
  return (
    <section id="conquistas" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 text-balance"
        >
          Conhecimento que Transforma o Futuro
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Card Principal - Seja um Patrono */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:row-span-2 relative rounded-xl overflow-hidden min-h-[500px] group shadow-lg"
          >
            <Image
              src="/SiteBes2023/card1"
              alt="Alunos recebendo certificados"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">Seja um Patrono</h3>
              <p className="text-white/90 text-sm md:text-base mb-4 leading-relaxed">
                Sua contribuição financeira apoia a formação de novos engenheiros e fortalece o ecossistema local.
              </p>
              <Button asChild className="bg-secondary text-primary hover:bg-secondary/90 font-semibold">
                <Link href="#apoiar">Apoiar</Link>
              </Button>
            </div>
          </motion.div>

          {/* Card Hackathon */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 relative rounded-xl overflow-hidden min-h-[240px] group shadow-md"
          >
            <Image
              src="/SiteBes2023/card2.jpeg"
              alt="Vencedores Hackathon"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-center">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">1º Lugar Hackathon UEPA 2025</h3>
              <p className="text-white/90 text-sm md:text-base max-w-lg leading-relaxed">
                Equipe vencedora com o projeto <span className="font-semibold text-secondary">CHECK AI</span>.
              </p>
            </div>
          </motion.div>

          {/* Card SEMED */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative rounded-xl overflow-hidden min-h-[240px] group shadow-md"
          >
            <Image src="/SiteBes2023/card3.jpg" alt="Sistema SEMED" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-white text-lg font-bold">Sistema SEMED</h3>
              <p className="text-white/80 text-xs">Desenvolvimento de sistema de frequências.</p>
            </div>
          </motion.div>

          {/* Card Evento Escola */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="relative rounded-xl overflow-hidden min-h-[240px] group shadow-md"
          >
            <Image src="/SiteBes2023/card4.png" alt="Evento Escola" fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-white text-lg font-bold">Mostra de Tecnologia</h3>
              <p className="text-white/80 text-xs">Evento realizado em Concórdia do Pará.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}