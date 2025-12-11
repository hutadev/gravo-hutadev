import { ArticleHome } from "@/components/article/article"
import { Benefits } from "@/components/benefits/benefits"
import { ClientCompany } from "@/components/clientcompany/page"
import { EaseToUse } from "@/components/easetouse/easetouse"
import { Feature } from "@/components/feature/feature"
import { Feedback } from "@/components/feedback/feedback"
import { Hero } from "@/components/hero/page"
import { HeroTeam } from "@/components/heroteam/heroteam"
import { Relable } from "@/components/relable/relable"
import { Status } from "@/components/status/status"
import { Subscribe } from "@/components/subscribe/subscribe"

export default function Home() {
  return (
    <main>
      {/*<Hero />
      <HeroTeam />
      <ClientCompany />
      <Feature />
      <Benefits />
      <Status />
      <Relable />
      <Feedback />
      <EaseToUse /> */}
      <ArticleHome />
      <Subscribe />
    </main>
  )
}
