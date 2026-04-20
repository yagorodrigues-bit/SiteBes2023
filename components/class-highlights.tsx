"use client"

import { GraduationCap, Users, Trophy } from "lucide-react"
import { motion } from "framer-motion"

export function ClassHighlights() {
  const stats = [
    { icon: Trophy, value: "7", label: "Semestres de Excelência" },
    { icon: GraduationCap, value: "8º", label: "Último Semestre" },
    { icon: Users, value: "45", label: "Alunos Ativos" },
  ]

  return (
    <section className="bg-primary py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-white text-center">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-center gap-3"
            >
              <stat.icon className="w-8 h-8 text-secondary" />
              <div>
                <span className="text-3xl md:text-4xl font-bold text-secondary">{stat.value}</span>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-white/90 text-center text-lg mt-8 max-w-3xl mx-auto text-pretty"
        >
          Desde 2023, nossa turma tem alcançado excelência acadêmica. 
          Chegamos ao 8º e último semestre da graduação com 45 alunos ativos!
        </motion.p>
      </div>
    </section>
  )
}