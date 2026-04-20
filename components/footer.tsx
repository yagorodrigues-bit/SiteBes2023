"use client"

import { ChevronUp, Instagram, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="container mx-auto px-4 py-4 flex items-center justify-between">
  <div className="flex items-center gap-3">
    <img 
      src="/SiteBes2023/logo1.png" 
      alt="Logo UEPA BES" 
      className="h-10 w-auto object-contain" 
    />
  </div>
</div>
            </div>
            <span className="text-white/80 text-sm">BES 2023 – UEPA</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/bestconp23/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:bes2023.uepa@gmail.com"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>


       <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/*  <p className="text-white/60 text-sm text-center md:text-left">
            Todos os direitos reservados © 2026 BES23-UEPA | desenvolvido por Yago Cabral
          </p> */}

        <p className="text-white/60 text-sm text-center md:text-left">
           Todos os direitos reservados © 2026 BES23-UEPA | desenvolvido por{" "}
             <a 
                  href="https://github.com/yagocabral" 
                  target="_blank" 
                   rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200 underline underline-offset-4"
                >
        Yago Cabral
          </a>
  </p>


          <Button
            variant="ghost"
            size="sm"
            onClick={scrollToTop}
            className="text-white/60 hover:text-white hover:bg-white/10"
          >
            <ChevronUp className="w-4 h-4 mr-1" />
            Voltar ao topo
          </Button>
        </div>
      </div>
    </footer>
  )
}
