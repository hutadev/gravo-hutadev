import "./heroteam.css"
import heroTeam from "../../assets/hero-team.webp"
import Image from "next/image"

export function HeroTeam() {
  return (
    <>
      <div className="hero-team">
        <p className="title">Adoptamos a abordagem de design mais centrada no utilizador.</p>
        <figure>
          <Image src={heroTeam} alt="Team" width={400} height={300} loading="lazy" />
        </figure>
      </div>
    </>
  )
}
