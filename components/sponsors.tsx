import { Card } from "@/components/ui/card"
import Image from "next/image"

export function Sponsors() {
  // 1. COLOQUE OS CAMINHOS DAS SUAS IMAGENS AQUI
  // As imagens devem estar dentro da pasta /public/
  const logos = [
    { src: "/SiteBes2023/patrocinador.png", alt: "Patrocinador 1" },
    { src: "/SiteBes2023/patrocinador.png", alt: "Patrocinador 2" },
    { src: "/SiteBes2023/patrocinador.png", alt: "Patrocinador 3" },
    { src: "/SiteBes2023/patrocinador.png", alt: "Patrocinador 4" },
    { src: "/SiteBes2023/patrocinador.png", alt: "Patrocinador 5" },
    { src: "/SiteBes2023/patrocinador.png", alt: "Patrocinador 6" },
  ]

  return (
    <section className="w-full py-4 overflow-hidden">
      <div className="container mx-auto px-4 mb-4">
        <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] text-center">
          Nossos Patrocinadores
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        <div className="flex animate-scroll whitespace-nowrap gap-6 py-2 px-4">
          {/* Renderiza a lista original + a cópia para o giro infinito */}
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
                  className="object-contain filter grayscale brightness-200 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}