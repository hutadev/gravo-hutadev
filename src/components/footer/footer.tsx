import Image from "next/image"
import "./footer.css"
import Link from "next/link"
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi"
import { LuFacebook, LuInstagram, LuYoutube } from "react-icons/lu"
import { FaXTwitter } from "react-icons/fa6"

export function Footer() {
  return (
    <footer className="footer">
      <div className="content">
        <div className="box-intro">
          <figure>
            <Image src="/logo.webp" alt="Logo do site" width={40} height={30} loading="lazy" />
            <figcaption>Gravo</figcaption>
          </figure>
          <p>A Gravo é uma das startups de tecnologia mais populares a impulsionar a inovação.</p>

          <div className="contact">
            <Link href="#">
              <div className="icon">
                <HiOutlinePhone />
              </div>
              +25801236678901
            </Link>
            <Link href="#">
              <div className="icon">
                <HiOutlineMail />
              </div>
              ola@gravo.com
            </Link>
          </div>
        </div>

        <div className="box-link">
          <p className="title">Menu</p>
          <ul>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Sobre</Link>
            </li>
            <li>
              <Link href="#">Recursos</Link>
            </li>
            <li>
              <Link href="#">Serviços</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
          </ul>
        </div>

        <div className="box-link">
          <p className="title">Componentes</p>
          <ul>
            <li>
              <Link href="#">Comece Aqui</Link>
            </li>
            <li>
              <Link href="#">Guia de Estilo</Link>
            </li>
            <li>
              <Link href="#">Protecção por Senha</Link>
            </li>
            <li>
              <Link href="#">Registo de Alteração</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className="box-link">
          <p className="title">Modelos de Páginas</p>
          <ul>
            <li>
              <Link href="#">Página do Admin</Link>
            </li>
            <li>
              <Link href="#">Página de Cadastro</Link>
            </li>
            <li>
              <Link href="#">Página de Login</Link>
            </li>
            <li>
              <Link href="#">Política de Privacidade</Link>
            </li>
            <li>
              <Link href="#">Termos e Condição</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="copy-right">
        <p>&#127275; Todos Direitos Reservados</p>
        <div className="social-media">
          <ul>
            <li>
              <Link href="#">
                <div className="icon">
                  <LuFacebook />
                </div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className="icon">
                  <LuInstagram />
                </div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className="icon">
                  <FaXTwitter />
                </div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className="icon">
                  <LuYoutube />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
