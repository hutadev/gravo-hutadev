import Image from "next/image"
import webflow from "@/assets/webflow-logo.webp"
import editorx from "@/assets/editorx-logo.webp"
import framer from "@/assets/framer-logo.webp"
import spotify from "@/assets/spotify-logo.webp"
import wordpress from "@/assets/wordpress-logo.webp"
import squarespace from "@/assets/squarespace-logo.webp"
import "./clientcompany.css"

export function ClientCompany() {
  return (
    <>
      <section className="clientcompany">
        <p>De start-ups a fortune $400+ associamo-nos a marcas de todos os tamanhos.</p>
        <div className="container">
          <figure>
            <Image className="webflow" src={webflow} alt="Logo da webflow" width={100} height={30} loading="lazy" />
          </figure>
          <figure>
            <Image className="editorx" src={editorx} alt="Logo do editorx" width={100} height={30} loading="lazy" />
          </figure>
          <figure>
            <Image className="framer" src={framer} alt="Logo da framer" width={100} height={30} loading="lazy" />
          </figure>
          <figure>
            <Image className="spotify" src={spotify} alt="Logo do spotify" width={100} height={30} loading="lazy" />
          </figure>
          <figure>
            <Image className="wordpress" src={wordpress} alt="Logo do wordpress" width={100} height={30} loading="lazy" />
          </figure>
          <figure>
            <Image className="squarespace" src={squarespace} alt="Logo da squarespace" width={100} height={30} loading="lazy" />
          </figure>
        </div>
      </section>
    </>
  )
}
