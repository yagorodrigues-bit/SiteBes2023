"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Linkedin, Mail } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { motion } from "framer-motion"

export function Committee() {
  const members = [
    {
      name: "Adrielly Carvalhedo",
      role: "...",
      initials: 
            <img 
              src="/SiteBes2023/Adrielly.png" 
              alt="Logo UEPA BES" 
              className="h-12 w-auto object-contain" 
            />,
    },
    {
      name: "Andre Luiz",
      role: "...",
      initials: 
            <img 
              src="/SiteBes2023/Andre.png" 
              alt="Logo UEPA BES" 
              className="h-12 w-auto object-contain" 
            />,
    },
    {
      name: "Annia Araujo",
      role: "...",
      initials: 
            <img 
              src="/SiteBes2023/Annia.png" 
              alt="Logo UEPA BES" 
              className="h-12 w-auto object-contain" 
            />,
    },
    {
      name: "Doglas Araujo",
      role: "...",
      initials:  
            <img 
              src="/SiteBes2023/Doglas.png" 
              alt="Logo UEPA BES" 
              className="h-12 w-auto object-contain" 
            />,
    },
    {
      name: "Fabricio Cardoso",
      role: "...",
      initials:  
            <img 
              src="/SiteBes2023/Fabricio.png" 
              alt="Logo UEPA BES" 
              className="h-12 w-auto object-contain" 
            />,
    },
    {
      name: "Glaucia Nunes",
      role: "...",
      initials:  
            <img 
              src="/SiteBes2023/Glaucia.png" 
              alt="Logo UEPA BES" 
              className="h-12 w-auto object-contain" 
            />,
    },
    {
      name: "Maria Joselia",
      role: "...",
      initials:  
            <img 
              src="/SiteBes2023/Joselia.png" 
              alt="Logo UEPA BES" 
              className="h-12 w-auto object-contain" 
            />,
    },
    {
      name: "Yago Cabral",
      role: "...",
      initials:  
            <img 
              src="/SiteBes2023/Yago.png" 
              alt="Logo UEPA BES" 
              className="h-12 w-auto object-contain" 
            />,
    },
  ]

  return (
    <section id="comissao" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <Reveal direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Nossa Comissão
          </h2>
        </Reveal>
        <Reveal direction="up">
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            A equipe responsável por organizar a formatura da turma BES 2023
          </p>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {members.map((member) => (
            <Reveal key={member.name} direction="up">
              <Card className="group hover:shadow-lg transition-all">
                <CardContent className="p-4 text-center">
                  <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary flex items-center justify-center group-hover:bg-primary/90 transition-colors">
                    <span className="text-lg font-bold text-white">{member.initials}</span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-xs text-secondary font-medium mb-3">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}