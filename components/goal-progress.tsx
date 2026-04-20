"use client"

import { useEffect, useState } from "react"
import { Target } from "lucide-react"

export function GoalProgress() {
  const [progress, setProgress] = useState(0)
  const targetProgress = 21 // 21% arrecadado

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(targetProgress)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Target className="w-8 h-8 text-secondary" />
            <h2 className="text-2xl md:text-3xl font-bold">Meta da Turma</h2>
          </div>

          <div className="bg-white/10 rounded-full h-6 mb-4 overflow-hidden">
            <div
              className="h-full bg-secondary rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
              style={{ width: `${progress}%` }}
            >
              {progress > 10 && (
                <span className="text-xs font-bold text-primary">{progress}%</span>
              )}
            </div>
          </div>

          <div className="flex justify-between text-white/80 text-sm mb-6">
            <span>R$ 4.200,00 arrecadados</span>
            <span>Meta: R$ 20.000,00</span>
          </div>

          <p className="text-white/90">
            Cada contribuição nos aproxima do nosso objetivo. Ajude-nos a alcançar 100%!
          </p>
        </div>
      </div>
    </section>
  )
}
