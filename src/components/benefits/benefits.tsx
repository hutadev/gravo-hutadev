import Image from "next/image"
import { TitleSection } from "../title/title"
import "./benefits.css"
import { GoMegaphone, GoMail } from "react-icons/go"
import Link from "next/link"
import Girl from "@/assets/girl.png"

export function Benefits() {
  return (
    <>
      <section className="benefits">
        <div className="box-benefits">
          <TitleSection bt="Beneficios" title="Somos a experiência de negócio de próxima geração" />

          <div className="info">
            <div className="box">
              <div className="icon">
                <GoMegaphone />
              </div>
              <div className="detal">
                <p className="title">Campanhas personalizadas</p>
                <p>Revolucione o seu marketing com poderosas campanhas personalizadas que geram resultados.</p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <GoMail />
              </div>
              <div className="detal">
                <p className="title">Autoresponders de e-mail</p>
                <p>Otimize a sua comunicação com automação de e-mail que envolve os clientes.</p>
              </div>
            </div>

            <Link href="#">Começar agora</Link>
          </div>
        </div>

        <figure>
          <Image src={Girl} alt="Girl" width={300} height={400} loading="lazy" />
        </figure>
      </section>
    </>
  )
}
