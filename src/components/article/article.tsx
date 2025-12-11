import Link from "next/link"
import { TitleSection } from "../title/title"
import "./article.css"
import Image from "next/image"
import article_startup from "@/assets/article_startup.webp"
import article_teach from "@/assets/article_teach.webp"

export function ArticleHome() {
  return (
    <>
      <section className="article">
        <div className="head-article-home">
          <TitleSection bt="Blogs" title="Consulte nossos artigos e recursos" />
          <Link href="#">Todos Artigos</Link>
        </div>

        <div className="article-home">
          <div className="the-article">
            <Link href="#" className="article">
              <figure>
                <Image src={article_startup} alt="Capa" width={400} height={270} loading="lazy" />
              </figure>

              <div className="tag-date">
                <p className="tag">Start Up</p>
                <p>11-Dez-2025</p>
              </div>

              <p className="title">Criando um ambiente de trabalho produtivo e inspirador</p>
            </Link>
            <Link href="#" className="article">
              <figure>
                <Image src={article_teach} alt="Capa" width={400} height={270} loading="lazy" />
              </figure>

              <div className="tag-date">
                <p className="tag">Start Up</p>
                <p>06-Out-2025</p>
              </div>

              <p className="title">Estratégias vencedoras para lançamento e expansão</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
