import { ClientCompany } from "@/components/clientcompany/page"
import { Hero } from "@/components/hero/page"
import { HeroTeam } from "@/components/heroteam/heroteam"

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroTeam />
      <ClientCompany />
    </main>
  )
}
