"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Settings, TrendingUp, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function FocusAreas() {
  const areas = [
    {
      icon: Settings,
      title: "Desenvolvimento",
      description: "Soluções full-stack criadas com as tecnologias mais modernas.",
    },
    {
      icon: TrendingUp,
      title: "Inovação Regional",
      description: "Projetos focados em resolver problemas reais da nossa região.",
    },
    {
      icon: MessageCircle,
      title: "Colaboração",
      description: "Atuação em equipe e liderança em eventos de tecnologia.",
    },
  ]

  return (
    <section id="sobre" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Nossa turma se destaca em diversas áreas da engenharia de software
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="group h-full hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30">
                <CardContent className="p-6 md:p-8 text-center">
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  >
                    <area.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}