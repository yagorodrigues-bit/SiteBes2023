"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Settings, TrendingUp, Award, CheckCircle, Smartphone, MessageSquare } from "lucide-react"
import { motion } from "framer-motion"

export function FocusAreas() {
  const areas = [
    {
      icon: Settings,
      title: "Desenvolvimento Avançado",
      description: "Mais do que conceitos teóricos, nossa turma entrega softwares funcionais desde as primeiras disciplinas do curso. Desenvolvemos soluções robustas com tecnologias modernas, preparando profissionais altamente capacitados para os desafios reais e dinâmicos do mercado de trabalho de tecnologia.",
    },
    {
      icon: TrendingUp,
      title: "Inovação & Impacto Regional",
      description: "Criamos tecnologia sob medida para os desafios da nossa região. Desenvolvemos soluções eficientes e sustentáveis focadas na otimização de processos públicos e privados, validando a qualidade, a prontidão e o impacto social das nossas entregas acadêmicas.",
    },
    {
      icon: Award,
      title: "Cultura Hackathon & Liderança",
      description: "Nossa turma lidera e se destaca sob pressão em competições de alto nível. Unimos criatividade, agilidade e engenharia técnica para solucionar problemas complexos da sociedade, conquistando posições de destaque e reconhecimento em ecossistemas de inovação.",
    },
  ]

  return (
    <section id="sobre" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Cabeçalho Principal */}
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
            Nossa turma se destaca em diversas áreas da engenharia de software através da prática e de conquistas reais
          </p>
        </motion.div>

        {/* Grid de Cards Superiores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-20">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="group h-full hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30">
                <CardContent className="p-6 md:p-8 text-center flex flex-col h-full">
                  <motion.div 
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  >
                    <area.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed text-justify sm:text-center">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Subseção Sugerida: Cases de Sucesso e Conquistas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
            Cases de Sucesso e Conquistas
          </h3>
          <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto text-sm">
            Aplicações práticas e validações de mercado desenvolvidas pela nossa equipe.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Coluna 1: Case Concórdia / SENAI / UFPA */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-l-4 border-l-primary bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-primary/10 rounded-lg text-primary">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">
                      Sistema de Gestão de Frequência
                    </h4>
                  </div>
                  <p className="text-sm text-secondary font-medium tracking-wide uppercase">
                    Semed Concórdia / SENAI / UFPA
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed text-justify">
                    Desenvolvido sob medida para a Secretaria Municipal de Educação de Concórdia do Pará, 
                    o sistema automatizou as inscrições e o controle de presença via leitura de código de barras/QR Code na 
                    Jornada Pedagógica de 2026. Pela sua altíssima eficiência, sustentabilidade e rapidez no gerenciamento, 
                    o projeto recebeu convites oficiais de expansão e adaptação para eventos do SENAI e da UFPA.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Coluna 2: Pódio no Hackathon COP30 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-l-4 border-l-secondary bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 md:p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-secondary/10 rounded-lg text-secondary">
                      <Award className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">
                      Dobradinho no Hackathon da UEPA
                    </h4>
                  </div>
                  <p className="text-sm text-secondary font-medium tracking-wide uppercase">
                    Evento Paralelo à COP30 – Belém
                  </p>
                  
                  <div className="space-y-4 pt-1">
                    <div className="flex gap-3 items-start">
                      <div className="mt-1 bg-amber-500/10 text-amber-500 rounded p-1 text-xs font-bold shrink-0">1º</div>
                      <div>
                        <h5 className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                          Equipe CheckAI <MessageSquare className="w-3.5 h-3.5 text-muted-foreground" />
                        </h5>
                        <p className="text-xs text-muted-foreground leading-relaxed text-justify">
                          Um assistente inteligente integrado diretamente ao WhatsApp que valida notícias falsas utilizando 
                          fontes jornalísticas confiáveis. Foi totalmente personalizado para a cultura amazônica, respondendo com a 
                          linguagem, expressões e vocabulário regional do Pará.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-start">
                      <div className="mt-1 bg-slate-400/10 text-slate-400 rounded p-1 text-xs font-bold shrink-0">3º</div>
                      <div>
                        <h5 className="text-sm font-semibold text-foreground flex items-center gap-1.5">
                          Aplicativo Mobile de Combate à Desinformação <Smartphone className="w-3.5 h-3.5 text-muted-foreground" />
                        </h5>
                        <p className="text-xs text-muted-foreground leading-relaxed text-justify">
                          Plataforma focada na mitigação de fake news em larga escala, promovendo o engajamento comunitário, 
                          auditoria cidadã e gamificação voltada para as áreas de Saúde e Educação.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}