import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ClassHighlights } from "@/components/class-highlights"
import { FocusAreas } from "@/components/focus-areas"
import { KnowledgeSection } from "@/components/knowledge-section"
import { Reveal } from "@/components/reveal"

import { GoalProgress } from "@/components/goal-progress"
import { Sponsors } from "@/components/sponsors"
import { Mission } from "@/components/mission"
import { HowToSupport } from "@/components/how-to-support"
import { Committee } from "@/components/committee"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Reveal children={undefined}/>
      <Header />
      <Hero />
      <ClassHighlights />
      <FocusAreas />
      <KnowledgeSection />
      <GoalProgress />
      <Sponsors />
      <Mission />
      <HowToSupport />
      <Committee />
      <Footer />
    </main>
  )
}
