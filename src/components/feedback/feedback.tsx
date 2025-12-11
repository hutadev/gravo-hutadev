"use client"

import "./feedback.css"
import Image from "next/image"
import girlwork from "@/assets/girlwork.jpg"
import { TitleSection } from "../title/title"
import { RiDoubleQuotesR } from "react-icons/ri"
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6"
import { useRef, useState } from "react"

export function Feedback() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)

  const depoimentos = [
    {
      nome: "Ana Martins",
      cargo: "Gestora de Marketing",
      empresa: "Innovatech",
      mensagem: "O suporte foi excepcional e ajudou a nossa equipa a atingir os objectivos no prazo. Recomendo sem hesitar."
    },
    {
      nome: "Rui Silva",
      cargo: "Diretor de Produto",
      empresa: "Green Solutions",
      mensagem: "A experiência de trabalhar com esta equipa foi excelente. Profissionais atentos e muito competentes."
    },
    {
      nome: "Beatriz Costa",
      cargo: "Coordenadora de Operações",
      empresa: "BlueWave Consulting",
      mensagem: "O serviço superou todas as expectativas. A comunicação foi clara e as soluções entregues com rapidez."
    },
    {
      nome: "Miguel Sousa",
      cargo: "CEO",
      empresa: "NextGen Systems",
      mensagem: "Estamos extremamente satisfeitos com os resultados. A equipa demonstrou grande conhecimento e compromisso."
    },
    {
      nome: "Carla Fernandes",
      cargo: "Especialista em TI",
      empresa: "TechVision",
      mensagem: "Profissionalismo e atenção ao detalhe em cada etapa do projecto. Uma colaboração de alto nível."
    }
  ]

  const handleNext = () => {
    if (!carouselRef.current) return
    if (index < depoimentos.length - 1) {
      const containerWidth = carouselRef.current.clientWidth
      const newIndex = index + 1
      setIndex(newIndex)
      carouselRef.current.scrollTo({
        left: newIndex * containerWidth,
        behavior: "smooth"
      })
    }
  }

  const handlePrev = () => {
    if (!carouselRef.current) return
    if (index > 0) {
      const containerWidth = carouselRef.current.clientWidth
      const newIndex = index - 1
      setIndex(newIndex)
      carouselRef.current.scrollTo({
        left: newIndex * containerWidth,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="feedback">
      <div className="box-section">
        <figure>
          <Image src={girlwork} width={300} height={300} alt="capa" loading="lazy" />
        </figure>
        <div className="status">
          <div className="number">
            <p className="title">100+</p>
            <p className="desc">Projectos Concluídos</p>
          </div>

          <div className="number">
            <p className="title">25k+</p>
            <p className="desc">Clientes Mundiais</p>
          </div>
        </div>
      </div>

      <div className="client-feedback">
        <TitleSection bt="Feedback" title="Pessoas que já adoram o nosso suporte" />

        <div className="icon">
          <RiDoubleQuotesR />
        </div>

        <div className="depoiment-wrapper">
          <div className="depoiment" ref={carouselRef}>
            {depoimentos.map((d, i) => (
              <div className="content" key={i}>
                <p>{d.mensagem}</p>
                <div className="info">
                  <p className="name">{d.nome}</p>
                  <p className="cargo">
                    {d.cargo}, {d.empresa}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="btn">
          <button className={`btn-left ${index === 0 ? "disabled" : ""}`} onClick={handlePrev} disabled={index === 0}>
            <FaArrowLeftLong />
          </button>

          <button className={`btn-right ${index === depoimentos.length - 1 ? "disabled" : ""}`} onClick={handleNext} disabled={index === depoimentos.length - 1}>
            <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  )
}
