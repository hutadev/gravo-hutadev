import { Card } from "../card/card"
import { TitleSection } from "../title/title"
import "./feature.css"

export function Feature() {
  return (
    <>
      <section className="feature">
        <TitleSection bt="Características" title="As características que tornam nosso negócio único" />

        <div className="grid-3">
          <Card icon="&#10070;" title="Pesquisa Qualitativa" text="Explorando experiências por meio de pesquisa qualitativa para obter insights significativos." />

          <Card icon="&#10070;" title="Ciências de Dados" text="Explorando dados para obter insights acionáveis ​​sobre comportamento e interacções." />

          <Card icon="&#10070;" title="Marketing Social" text="Aproveitando o marketing social para gerar resultados impactantes e significativos." />

          <Card icon="&#10070;" title="Suporte a Criptomoedas" text="Possibilitando transações seguras com criptomoedas para experiências digitais confiáveis." />

          <Card icon="&#10070;" title="Relatórios e Análises" text="Capacitando decisões por meio de insights abrangentes de dados da Kea." />

          <Card icon="&#10070;" title="Pagamentos Automáticos" text="Simplificando as finanças com pagamentos automáticos para uma gestão perfeita." />
        </div>
      </section>
    </>
  )
}
