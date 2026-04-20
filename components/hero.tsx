"use client" // Necessário para usar hooks como useEffect e useState

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Sponsors } from "./sponsors"

export function Hero() {
  const words = ["Inovação", "Tecnologia"]
  const [index, setIndex] = useState(0)
  const [fade, setFade] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false) // Começa o fade-out
      
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length)
        setFade(true) // Começa o fade-in após trocar a palavra
      }, 500) // Tempo da metade da transição
      
    }, 3000) // Troca a cada 3 segundos

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/SiteBes2023/fundo1.jpg"
          alt="Turma de formandos BES 2023"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white pt-20 flex flex-col items-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-2 text-balance max-w-5xl">
          BES 2023 – UEPA
        </h1>
       {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-balance max-w-4xl">
          BES 2023 – UEPA
        </h1>*/}
        
         {/*Texto Dinâmico com Animação */}
        <div className="h-[1.5em] mb-6"> 
          <span 
            className={`text-3xl md:text-4xl lg:text-5xl font-semibold transition-opacity duration-500 block ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {words[index]}
          </span>
        </div>

        <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed text-pretty">
          Desenvolvemos soluções tecnológicas de impacto regional durante nossa graduação na UEPA. 
          Conheça nossa trajetória e nos ajude a celebrar esta conquista acadêmica.
        </p>
        
        <Button
          asChild
          size="lg"
          className="bg-secondary text-primary hover:bg-secondary/90 font-semibold text-lg px-8 py-6"
        >
          <Link href="#apoiar">Quero Contribuir</Link>
        </Button>

        <div className="mt-12 w-full max-w-5xl">
          <Sponsors />
        </div>
      </div>

      {/* Scroll Indicator
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div> */}
    </section>
  )
}
