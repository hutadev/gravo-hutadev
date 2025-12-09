import { Card } from "../card/card"
import { TitleSection } from "../title/title"
import "./feature.css"
import { HiBeaker, HiOutlinePresentationChartLine, HiBell, HiPhone, HiChartPie, HiCurrencyDollar } from "react-icons/hi"

export function Feature() {
  return (
    <>
      <section className="feature">
        <TitleSection bt="Características" title="As características que tornam nosso negócio único" />

        <div className="grid-3">
          <Card icon={<HiBeaker />} title="Pesquisa Qualitativa" text="Explorando experiências por meio de pesquisa qualitativa para obter insights significativos." />

          <Card icon={<HiOutlinePresentationChartLine />} title="Ciências de Dados" text="Explorando dados para obter insights acionáveis ​​sobre comportamento e interacções." />

          <Card icon={<HiBell />} title="Marketing Social" text="Aproveitando o marketing social para gerar resultados impactantes e significativos." />

          <Card icon={<HiPhone />} title="Suporte a Criptomoedas" text="Possibilitando transações seguras com criptomoedas para experiências digitais confiáveis." />

          <Card icon={<HiChartPie />} title="Relatórios e Análises" text="Capacitando decisões por meio de insights abrangentes de dados da Kea." />

          <Card icon={<HiCurrencyDollar />} title="Pagamentos Automáticos" text="Simplificando as finanças com pagamentos automáticos para uma gestão perfeita." />
        </div>
      </section>
    </>
  )
}
