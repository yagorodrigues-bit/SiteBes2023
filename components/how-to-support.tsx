"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Building2, QrCode, Copy, Check, Award, Star, Diamond } from "lucide-react"
import Image from "next/image"
import { Reveal } from "@/components/reveal"
import { motion } from "framer-motion"

export function HowToSupport() {
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState<"individual" | "empresa">("individual")

  const pixKey = "bes2023.uepa@gmail.com"

  const handleCopy = () => {
    navigator.clipboard.writeText(pixKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const tiers = [
    {
      name: "Prata",
      icon: Award,
      value: "R$ 50 - R$ 199",
      benefits: [
        "Agradecimento nas redes sociais",
        "Nome na lista de apoiadores",
      ],
    },
    {
      name: "Ouro",
      icon: Star,
      value: "R$ 200 - R$ 499",
      benefits: [
        "Todos os benefícios Prata",
        "Logo em materiais digitais",
        "Menção especial na cerimônia",
      ],
    },
    {
      name: "Diamante",
      icon: Diamond,
      value: "R$ 500+",
      benefits: [
        "Todos os benefícios Ouro",
        "Logo no convite oficial",
        "Espaço exclusivo para banner",
        "2 convites para a cerimônia",
      ],
    },
  ]

  return (
    <section id="apoiar" className="relative py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/SiteBes2023/fundoPix.png"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <Reveal direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Como Apoiar
          </h2>
        </Reveal>
        <Reveal direction="up">
          <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto text-lg">
            Invista no sucesso da nossa turma e no futuro da tecnologia
          </p>
        </Reveal>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={activeTab === "individual" ? "secondary" : "outline"}
            onClick={() => setActiveTab("individual")}
            className={activeTab === "individual" 
              ? "bg-secondary text-primary" 
              : "bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white"
            }
          >
            <User className="w-4 h-4 mr-2" />
            Contribuição Individual
          </Button>
          <Button
            variant={activeTab === "empresa" ? "secondary" : "outline"}
            onClick={() => setActiveTab("empresa")}
            className={activeTab === "empresa" 
              ? "bg-secondary text-primary" 
              : "bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white"
            }
          >
            <Building2 className="w-4 h-4 mr-2" />
            Patrocínio Empresarial
          </Button>
        </div>

        {/* Individual Contribution */}
        {activeTab === "individual" && (
          <div className="max-w-2xl mx-auto">
            <Reveal direction="up">
              <Card className="bg-white/95 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-center text-foreground">
                    Apoie Nossa Turma
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <p className="text-muted-foreground mb-6">
                      Faça sua doação via PIX de forma rápida e segura
                    </p>

                    {/* QR Code Placeholder */}
                    <div className="w-48 h-48 mx-auto bg-muted rounded-lg flex items-center justify-center mb-6 border-2 border-dashed border-primary/20">
                      <QrCode className="w-24 h-24 text-primary/50" />
                    </div>

                    {/* PIX Key */}
                    <div className="bg-muted/50 rounded-lg p-4 flex items-center justify-between gap-4">
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground">Chave PIX (E-mail)</p>
                        <p className="font-mono text-foreground">{pixKey}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCopy}
                        className="shrink-0"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 mr-1" />
                            Copiado
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 mr-1" />
                            Copiar
                          </>
                        )}
                      </Button>
                    </div>

                    {/* Bank Details */}
                    <div className="mt-6 text-sm text-muted-foreground">
                      <p>Banco: Nubank</p>
                      <p>Titular: Comissão de Formatura BES 2023</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          </div>
        )}

        {/* Company Sponsorship */}
        {activeTab === "empresa" && (
          <div>
            <p className="text-white/80 text-center mb-8">
              Escolha a cota de patrocínio que melhor se adequa à sua empresa
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {tiers.map((tier, index) => (
                <Reveal key={tier.name} direction="right">
                  <Card
                    className={`bg-white/95 backdrop-blur-sm relative overflow-hidden ${
                      index === 2 ? "border-secondary border-2" : ""
                    }`}
                  >
                    {index === 2 && (
                      <div className="absolute top-0 right-0 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-bl-lg">
                        Destaque
                      </div>
                    )}
                    <CardHeader className="text-center">
                      <tier.icon className={`w-12 h-12 mx-auto mb-2 ${
                        index === 0 ? "text-gray-400" :
                        index === 1 ? "text-secondary" : "text-primary"
                      }`} />
                      <CardTitle className="text-foreground">{tier.name}</CardTitle>
                      <p className="text-primary font-bold text-lg">{tier.value}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {tier.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                          className="w-full mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                          Escolher {tier.name}
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}