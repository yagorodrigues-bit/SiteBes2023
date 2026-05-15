"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Linkedin, Mail, Github, MessageCircle, Globe } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { motion } from "framer-motion"

export function Committee() {
  const members = [
    {
      name: "Adrielly Carvalhedo",
      // role: "...",
      initials: 
            <img 
              src="/SiteBes2023/Adrielly.png" 
              alt="Logo UEPA BES" 
              className="h-12 w-auto object-contain" 
            />,
      links: {
        whatsapp: "",
        github: "",
        linkedin: "",
        portfolio: ""
      }
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
      links: {
        whatsapp: "",
        github: "",
        linkedin: "",
        portfolio: ""
      }
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
      links: {
        whatsapp: "",
        github: "",
        linkedin: "",
        portfolio: ""
      }
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
      links: {
        whatsapp: "https://web.whatsapp.com/send/?phone=5591991164273&text=Ol%C3%A1",
        github: "https://github.com/DouglasD2sa",
        linkedin: "www.linkedin.com/in/douglas-sousa-dgsss",
        portfolio: ""
      }
    },
    {
      name: "Fabricio Cardoso",
      // role: "...",
      initials:  
            <img 
              src="/SiteBes2023/Fabricio.png" 
              alt="Logo UEPA BES" 
              className="h-12 w-auto object-contain" 
            />,
      links: {
        whatsapp: "https://web.whatsapp.com/send/?phone=5591991211880&text=Ol%C3%A1",
        github: "",
        linkedin: "https://www.linkedin.com/in/fabricio-brito-92718076/",
        portfolio: ""
      }
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
      links: {
        whatsapp: "http://lattes.cnpq.br/9195193517473990",
        github: "https://github.com/GlauciaNunes",
        linkedin: "https://www.linkedin.com/in/glaucia-nunes-3011352a9/",
        portfolio: "http://lattes.cnpq.br/9195193517473990"
      }
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
      links: {
        whatsapp: "",
        github: "",
        linkedin: "",
        portfolio: ""
      }
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
      links: {
        whatsapp: "https://wa.me/5591991186294?",
        github: "https://github.com/yagorodrigues-bit",
        linkedin: "www.linkedin.com/in/yago-kabraw-b764581b1",
        portfolio: "https://yagorodrigues-bit.github.io/Portif-lio-Yago-Kbraw/"
      }
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
                  <div className="flex items-center justify-center gap-2">
                    {member.links.whatsapp && (
                      <a href={member.links.whatsapp} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <MessageCircle size={16} />
                      </a>
                    )}
                    {member.links.github && (
                      <a href={member.links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={16} />
                      </a>
                    )}
                    {member.links.linkedin && (
                      <a href={member.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin size={16} />
                      </a>
                    )}
                    {member.links.portfolio && (
                      <a href={member.links.portfolio} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Globe size={16} />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}