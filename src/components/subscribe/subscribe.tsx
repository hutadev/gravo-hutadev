import "./subscribe.css"

export function Subscribe() {
  return (
    <>
      <section className="subscribe">
        <p className="title">Receba atualizações diretamente no seu e-mail</p>

        <div className="input-box">
          <input type="text" placeholder="Escreva seu email" />
          <button>Inscreva-se</button>
        </div>
      </section>
    </>
  )
}
