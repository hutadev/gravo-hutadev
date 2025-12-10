import "./status.css"
import { FaStar } from "react-icons/fa6"

export function Status() {
  return (
    <>
      <section className="Status">
        <p className="title tt">Visualiza o rank dos seus sites com facilidade.</p>
        <div className="box-section">
          <div className="box">
            <p className="title">
              97<span>/</span>100
            </p>
            <div className="star">
              <div className="icon">
                <FaStar />
              </div>
              <div className="icon">
                <FaStar />
              </div>
              <div className="icon">
                <FaStar />
              </div>
              <div className="icon">
                <FaStar />
              </div>
              <div className="icon">
                <FaStar />
              </div>
            </div>
            <p className="desc">Outro site de avaliações</p>
          </div>
          <div className="box">
            <p className="title">
              99<span>/</span>100
            </p>
            <div className="star">
              <div className="icon">
                <FaStar />
              </div>
              <div className="icon">
                <FaStar />
              </div>
              <div className="icon">
                <FaStar />
              </div>
              <div className="icon">
                <FaStar />
              </div>
              <div className="icon">
                <FaStar />
              </div>
            </div>
            <p className="desc">Site de avaliações mundial</p>
          </div>
        </div>
      </section>
    </>
  )
}
