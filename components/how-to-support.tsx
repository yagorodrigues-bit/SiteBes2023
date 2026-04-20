"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Building2, Copy, Check, Award, Star, Diamond, MessageCircle } from "lucide-react"
import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { motion } from "framer-motion"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export function HowToSupport() {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<"individual" | "empresa">("individual")
  const [selectedTier, setSelectedTier] = useState<any | null>(null)

  const pixKey = "yagorodriguescabral@gmail.com"

  const handleCopy = (key: string) => {
    navigator.clipboard.writeText(key)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const tiers = [
    {
      name: "Prata",
      icon: Award,
      emoji: "🥈",
      value: "R$ 50 - R$ 199",
      qrCode: "/SiteBes2023/qrcode-prata.png", // Adicione estas imgs na pasta public
      whatsappMsg: "Olá! Sou apoiador Prata e quero enviar meus dados para o site.",
      benefits: [
        "Agradecimento oficial nas redes sociais da turma.",
        "Seu nome imortalizado na lista de apoiadores do site.",
      ],
    },
    {
      name: "Ouro",
      icon: Star,
      emoji: "🥇",
      value: "R$ 200 - R$ 499",
      qrCode: "/SiteBes2023/qrcode-ouro.png",
      whatsappMsg: "Olá! Sou apoiador Ouro e quero enviar minha logo para os materiais digitais.",
      benefits: [
        "Todos os benefícios da Cota Prata.",
        "Sua logo em destaque nos materiais digitais.",
        "Menção especial durante a cerimônia oficial.",
      ],
    },
    {
      name: "Diamante",
      icon: Diamond,
      emoji: "💎",
      value: "A partir de R$ 500",
      qrCode: "/SiteBes2023/qrcode-diamante.png",
      whatsappMsg: "Olá! Sou apoiador Diamante. Gostaria de alinhar os detalhes da entrega dos convites e o envio do banner.",
      benefits: [
        "Todos os benefícios da Cota Ouro.",
        "Sua logo impressa no convite oficial do evento.",
        "Espaço exclusivo para banner físico no local.",
        "2 Convites VIP para o evento presencial.",
      ],
    },
  ]

  return (
    <section id="apoiar" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background - Mantido conforme seu código original */}
      <div className="absolute inset-0 z-0">
        <Image src="/SiteBes2023/fundoPix.png" alt="Background" fill className="object-cover" />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <Reveal direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">Como Apoiar</h2>
          <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto text-lg">
            Invista no sucesso da nossa turma e no futuro da tecnologia
          </p>
        </Reveal>

        {/* Tab Buttons - Mantido conforme seu código original */}
        <div className="flex justify-center gap-4 mb-8">
          <Button 
            variant={activeTab === "individual" ? "secondary" : "outline"}
            onClick={() => setActiveTab("individual")}
            className={activeTab === "individual" ? "bg-secondary text-primary" : "text-white border-white/30"}
          >
            <User className="w-4 h-4 mr-2" /> Contribuição Individual
          </Button>
          <Button 
            variant={activeTab === "empresa" ? "secondary" : "outline"}
            onClick={() => setActiveTab("empresa")}
            className={activeTab === "empresa" ? "bg-secondary text-primary" : "text-white border-white/30"}
          >
            <Building2 className="w-4 h-4 mr-2" /> Patrocínio Empresarial
          </Button>
        </div>

        {/* Individual Contribution */}
        {activeTab === "individual" && (
           <div className="max-w-2xl mx-auto">
             <Reveal direction="up">
               <Card className="bg-white/95 backdrop-blur-sm">
                 <CardContent className="pt-6 text-center space-y-6">
                    <CardTitle className="text-foreground">Apoie Nossa Turma</CardTitle>
                    <p className="text-muted-foreground">Faça sua doação via PIX de forma rápida e segura</p>
                    <div className="w-48 h-48 mx-auto bg-white rounded-lg flex items-center justify-center border-2 border-primary/20 overflow-hidden relative">
                      <Image src="/SiteBes2023/qrcode-pix.jpeg" alt="QR Code" fill className="object-contain p-2" />
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between">
                      <div className="text-left">
                        <p className="text-xs text-muted-foreground uppercase font-bold">Chave PIX</p>
                        <p className="font-mono text-sm break-all">{pixKey}</p>
                      </div>
                      <Button variant="outline" size="sm" onClick={() => handleCopy(pixKey)}>
                        {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      </Button>
                    </div>
                 </CardContent>
               </Card>
             </Reveal>
           </div>
        )}

        {/* Company Sponsorship */}
        {activeTab === "empresa" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier, index) => (
              <Reveal key={tier.name} direction="up">
                <Card className={`bg-white/95 h-full flex flex-col ${index === 2 ? "border-secondary border-2" : ""}`}>
                  <CardHeader className="text-center relative">
                    {index === 2 && (
                      <div className="absolute top-0 right-0 bg-secondary text-primary text-[10px] font-bold px-2 py-1 rounded-bl-lg">DESTAQUE</div>
                    )}
                    <tier.icon className={`w-10 h-10 mx-auto mb-2 ${index === 0 ? "text-slate-400" : index === 1 ? "text-yellow-500" : "text-cyan-500"}`} />
                    <CardTitle>{tier.name}</CardTitle>
                    <p className="text-primary font-bold">{tier.value}</p>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col justify-between">
                    <ul className="space-y-2 mb-6">
                      {tier.benefits.map((b, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <Check className="w-3 h-3 text-primary shrink-0 mt-0.5" /> {b}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      onClick={() => setSelectedTier(tier)}
                    >
                      Escolher {tier.name}
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      {/* Modal de Cota */}
      <Dialog open={!!selectedTier} onOpenChange={() => setSelectedTier(null)}>
        <DialogContent className="sm:max-w-[425px] bg-white text-foreground">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">
              Apoiar como Cota {selectedTier?.name} {selectedTier?.emoji}
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 pt-4">
            <div className="text-center">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider">Valor Sugerido</p>
              <p className="text-2xl font-bold">{selectedTier?.value}</p>
            </div>

            <div className="bg-muted/30 p-4 rounded-lg">
              <p className="text-xs font-bold mb-2 uppercase">Benefícios Inclusos:</p>
              <ul className="space-y-2">
                {selectedTier?.benefits.map((benefit: string, i: number) => (
                  <li key={i} className="text-sm flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-40 h-40 relative border-2 border-primary/10 rounded-xl overflow-hidden bg-white">
                <Image 
                  src={selectedTier?.qrCode || "/SiteBes2023/qrcode-pix.jpeg"} 
                  alt="QR Code Cota" 
                  fill 
                  className="object-contain p-2" 
                />
              </div>
              
              <div className="w-full space-y-2">
                <Button 
                  variant="outline" 
                  className="w-full gap-2" 
                  onClick={() => handleCopy(pixKey)}
                >
                  {copied ? <><Check className="w-4 h-4 text-green-500" /> Copiado</> : <><Copy className="w-4 h-4" /> Copiar Chave PIX</>}
                </Button>

                <Button 
                  className="w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white gap-2"
                  asChild
                >
                  <a 
                    href={`https://wa.me/55919XXXXXXXX?text=${encodeURIComponent(selectedTier?.whatsappMsg || "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {selectedTier?.name === "Diamante" ? "Falar com a Comissão" : "Enviar Nome/Logo"}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}