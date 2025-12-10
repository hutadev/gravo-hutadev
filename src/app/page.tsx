import { Benefits } from "@/components/benefits/benefits"
import { ClientCompany } from "@/components/clientcompany/page"
import { Feature } from "@/components/feature/feature"
import { Hero } from "@/components/hero/page"
import { HeroTeam } from "@/components/heroteam/heroteam"
import { Status } from "@/components/status/status"

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroTeam />
      <ClientCompany />
      <Feature />
      <Benefits />
      <Status />
    </main>
  )
}
