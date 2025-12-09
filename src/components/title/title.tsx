import "./title.css"

interface TitleProps {
  bt: string
  title: string
}

export function TitleSection({ bt, title }: TitleProps) {
  return (
    <>
      <div className="title-section">
        <p className="bt">{bt}</p>
        <p className="title">{title}</p>
      </div>
    </>
  )
}
