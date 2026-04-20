import { GraduationCap, Users, Trophy } from "lucide-react"

export function ClassHighlights() {
  return (
    <section className="bg-primary py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-white text-center">
          <div className="flex items-center gap-3">
            <Trophy className="w-8 h-8 text-secondary" />
            <div>
              <span className="text-3xl md:text-4xl font-bold text-secondary">7</span>
              <p className="text-white/80 text-sm">Semestres de Excelência</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-secondary" />
            <div>
              <span className="text-3xl md:text-4xl font-bold text-secondary">8º</span>
              <p className="text-white/80 text-sm">Último Semestre</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-secondary" />
            <div>
              <span className="text-3xl md:text-4xl font-bold text-secondary">45</span>
              <p className="text-white/80 text-sm">Alunos Ativos</p>
            </div>
          </div>
        </div>
        
        <p className="text-white/90 text-center text-lg mt-8 max-w-3xl mx-auto text-pretty">
          Desde 2023, nossa turma tem alcançado excelência acadêmica. 
          Chegamos ao 8º e último semestre da graduação com 45 alunos ativos!
        </p>
      </div>
    </section>
  )
}
