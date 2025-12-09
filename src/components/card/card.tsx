import "./card.css"

interface CardProps {
  icon: React.ReactNode
  title: string
  text: string
}

export function Card({ icon, title, text }: CardProps) {
  return (
    <>
      <div className="card">
        <div className="icon-section">
          <div className="icon">{icon}</div>
        </div>

        <div className="info">
          <p className="title">{title}</p>
          <p className="text">{text}</p>
        </div>
      </div>
    </>
  )
}
