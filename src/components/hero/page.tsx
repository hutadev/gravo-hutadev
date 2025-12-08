import Image from "next/image"
import "./hero.css"
import Link from "next/link"
import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5"
import { MdOutlineInterests } from "react-icons/md"
import heroTeam from "../../assets/hero-team.webp"

export function Hero() {
  return (
    <>
      <section className="hero-section">
        <div className="box">
          <div className="title">
            <div className="tt">
              <p>Soluçoes</p>
              <span className="icon">
                <span className="right">
                  <IoArrowForwardOutline />
                </span>
                <span className="left">
                  <IoArrowBackOutline />
                </span>
              </span>

              <p>para</p>
            </div>

            <div className="tt">
              <span className="icon">
                <span className="right">
                  <IoArrowForwardOutline />
                </span>
                <span className="left">
                  <IoArrowBackOutline />
                </span>
              </span>
              <p>negocios</p>
              <span className="icon">
                <span className="left">
                  <MdOutlineInterests />
                </span>
              </span>
              <p>vida</p>
            </div>
          </div>

          <p>Conduzimos uma análise exaustiva da concorrência, avaliando os seus productos para identificar funcionalidades chave, forças e fraquezas</p>

          <div className="btn">
            <Link href="#" className="start">
              Começar
            </Link>
            <Link href="#" className="learn">
              Saber mais
            </Link>
          </div>
        </div>

        <div className="hero-team">
          <p className="title">Adoptamos a abordagem de design mais centrada no utilizador.</p>
          <figure>
            <Image src={heroTeam} alt="Team" width={400} height={300} loading="lazy" />
          </figure>
        </div>
      </section>
    </>
  )
}
