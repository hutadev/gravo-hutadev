import Link from "next/link"
import { Card } from "../card/card"
import { TitleSection } from "../title/title"
import "./relable.css"
import { FaPeopleGroup, FaBuilding, FaBullseye } from "react-icons/fa6"

export function Relable() {
  return (
    <>
      <div className="relable">
        <TitleSection bt="Seguro" title="O futuro dos negócios estratégicos" />

        <div className="grid-3">
          <Card icon={<FaPeopleGroup />} title="Para indivíduos" text="Analisamos dados para descobrir insights, compreender comportamentos, otimizar interações, aprimorar estratégias e tomar decisões mais inteligentes." />
          <Card icon={<FaBullseye />} title="Para startups" text="Nosso aplicativo simplifica e agiliza as operações diárias, aumentando a eficiência, impulsionando a produtividade, economizando tempo e promovendo o crescimento." />
          <Card icon={<FaBuilding />} title="Para grandes empresas" text="Nosso aplicativo atende com eficiência às necessidades de grandes corporações, otimizando operações, aumentando a produtividade e impulsionando o crescimento." />
        </div>

        <Link href="#">Começar agora</Link>
      </div>
    </>
  )
}
