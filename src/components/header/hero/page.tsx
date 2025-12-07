import "./hero.css"
import Link from "next/link"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { IoArrowForwardOutline, IoArrowBackOutline } from "react-icons/io5"
import { MdOutlineInterests } from "react-icons/md"

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

              <p className="end-none">para</p>
            </div>

            <div className="tt">
              <p className="start-none">para</p>
              <span className="icon">
                <span className="right">
                  <IoArrowForwardOutline />
                </span>
                <span className="left">
                  <IoArrowBackOutline />
                </span>
              </span>
              <p>negocios</p>
              <span className="icon end-none">
                <span className="left">
                  <MdOutlineInterests />
                </span>
              </span>
              <p className="end-none">vida</p>
            </div>

            <div className="tt start-none">
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
      </section>
    </>
  )
}
