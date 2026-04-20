import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Linkedin, Mail } from "lucide-react"

export function Committee() {
  const members = [
    {
      name: "Adrielly Carvalhedo",
      role: "...",
      initials: 
            <img 
              src="/Adrielly.png" 
              alt="Logo UEPA BES" 
              className="h-12 w-auto object-contain" 
            />,
    },
    {
      name: "Andre Luiz",
      role: "...",
      initials: 
            <img 
              src="/Andre.png" 
              alt="Logo UEPA BES" 
              className="h-12 w-auto object-contain" 
            />,
    },
    {
      name: "Annia Araujo",
      role: "...",
      initials: 
            <img 
              src="/Annia.png" 
              alt="Logo UEPA BES" 
              className="h-12 w-auto object-contain" 
            />,
    },
    {
      name: "Doglas Araujo",
      role: "...",
      initials:  
            <img 
              src="/Doglas.png" 
              alt="Logo UEPA BES" 
              className="h-12 w-auto object-contain" 
            />,
    },
    {
      name: "Fabricio Cardoso",
      role: "...",
      initials:  
            <img 
              src="/Fabricio.png" 
              alt="Logo UEPA BES" 
              className="h-12 w-auto object-contain" 
            />,
    },
    {
      name: "Glaucia Nunes",
      role: "...",
      initials:  
            <img 
              src="/Glaucia.png" 
              alt="Logo UEPA BES" 
              className="h-12 w-auto object-contain" 
            />,
    },
    {
      name: "Maria Joselia",
      role: "...",
      initials:  
            <img 
              src="/joselia.png" 
              alt="Logo UEPA BES" 
              className="h-12 w-auto object-contain" 
            />,
    },
    {
      name: "Yago Cabral",
      role: "...",
      initials:  
            <img 
              src="/Yago.png" 
              alt="Logo UEPA BES" 
              className="h-12 w-auto object-contain" 
            />,
    },
  ]

  return (
    <section id="comissao" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
          Nossa Comissão
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A equipe responsável por organizar a formatura da turma BES 2023
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {members.map((member) => (
            <Card key={member.name} className="group hover:shadow-lg transition-all">
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
              {/*  <div className="flex justify-center gap-2">
                  <a
                    href="#"
                    className="w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label={`Instagram de ${member.name}`}
                  >
                    <Instagram className="w-3 h-3" />
                  </a>
                  <a
                    href="#"
                    className="w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin className="w-3 h-3" />
                  </a>
                  <a
                    href="#"
                    className="w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label={`Email de ${member.name}`}
                  >
                    <Mail className="w-3 h-3" />
                  </a>
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
