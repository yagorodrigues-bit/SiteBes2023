import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function KnowledgeSection() {
  return (
    <section id="conquistas" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12 text-balance">
          Conhecimento que Transforma o Futuro
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Card Esquerdo - Seja um Patrono (ocupa toda altura) */}
          <div className="lg:row-span-2 relative rounded-xl overflow-hidden min-h-[500px] group">
            <Image
              src="/SiteBes2023/card1"
              alt="Alunos recebendo certificados no evento SEMED"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
                Seja um Patrono
              </h3>
              <p className="text-white/90 text-sm md:text-base mb-4 leading-relaxed">
                Sua contribuição financeira apoia a formação de novos engenheiros e fortalece o ecossistema de tecnologia local. Participe da nossa história.
              </p>
              <Button
                asChild
                className="bg-secondary text-primary hover:bg-secondary/90 font-semibold"
              >
                <Link href="#apoiar">Apoiar</Link>
              </Button>
            </div>
          </div>

          {/* Card Direito Superior - Hackathon (largo) */}
          <div className="lg:col-span-2 relative rounded-xl overflow-hidden min-h-[240px] group">
            <Image
              src="/SiteBes2023/card2.jpeg"
              alt="Equipe vencedora do Hackathon UEPA 2025"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-center">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">
                1º Lugar Hackathon UEPA 2025
              </h3>
              <p className="text-white/90 text-sm md:text-base max-w-lg leading-relaxed">
                Equipe vencedora da <span className="font-semibold text-secondary">MARATONA HACKATHON - COMBATE A DESINFORMAÇÃO NA SAÚDE E MEIO AMBIENTE</span> conquistou o 1º lugar geral com o projeto <span className="font-semibold">CHECK AI</span>.
              </p>
            </div>
          </div>

          {/* Cards Inferiores - Dois lado a lado */}
          <div className="relative rounded-xl overflow-hidden min-h-[240px] group">
            <Image
              src="/SiteBes2023/card3.jpg"
              alt="Sistema de frequências desenvolvido para a SEMED"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-white text-lg md:text-xl font-bold mb-2">
                Sistema de frequências para a SEMED
              </h3>
              <p className="text-white/90 text-xs md:text-sm leading-relaxed">
                Alunos da turma desenvolvem sistema para credenciamento e frequência da Jornada Pedagógica 2026.
              </p>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden min-h-[240px] group">
            <Image
              src="/SiteBes2023/card4.png"
              alt="Realização de evento na escola municipal"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <h3 className="text-white text-lg md:text-xl font-bold mb-2">
                Realização de evento
              </h3>
              <p className="text-white/90 text-xs md:text-sm leading-relaxed">
                Nossa turma junto à escola municipal Nossa Senhora de Guadalupe realizou a Primeira Mostra de Cultura, Sociedade e Tecnologia do município de Concórdia do Pará.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
