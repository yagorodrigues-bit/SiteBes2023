"use client"

import { Target } from "lucide-react"
import { motion } from "framer-motion"

export function GoalProgress() {
  const targetProgress = 21 // 21% arrecadado

  return (
    <section className="py-16 md:py-20 bg-primary overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center text-white"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Target className="w-8 h-8 text-secondary" />
            </motion.div>
            <h2 className="text-2xl md:text-3xl font-bold">Meta da Turma</h2>
          </div>

          {/* Barra de Progresso Animada */}
          <div className="bg-white/10 rounded-full h-8 mb-4 overflow-hidden p-1 border border-white/5">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${targetProgress}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
              className="h-full bg-secondary rounded-full flex items-center justify-end pr-3 shadow-[0_0_15px_rgba(234,179,8,0.4)]"
            >
              <span className="text-xs font-black text-primary">{targetProgress}%</span>
            </motion.div>
          </div>

          <div className="flex justify-between text-white/80 text-sm mb-8 font-medium">
            <motion.span 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ delay: 1 }}
            >
              R$ 4.200,00 arrecadados
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              transition={{ delay: 1 }}
            >
              Meta: R$ 20.000,00
            </motion.span>
          </div>

          <p className="text-white/90 leading-relaxed italic">
            "Cada contribuição nos aproxima do nosso objetivo. Ajude-nos a alcançar 100%!"
          </p>
        </motion.div>
      </div>
    </section>
  )
}