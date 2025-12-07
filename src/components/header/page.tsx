"use client"

import Link from "next/link"
import "./header.css"
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi"
import { useState, useEffect, useRef } from "react"

export function Header() {
  const [menuVisivel, setMenuVisivel] = useState(false)

  const menuRef = useRef<HTMLDivElement | null>(null)
  const botaoRef = useRef<HTMLButtonElement | null>(null)

  function alternarMenu() {
    setMenuVisivel(prev => !prev)
  }

  useEffect(() => {
    function fecharAoClicarFora(event: MouseEvent) {
      const alvo = event.target as Node

      const clicouNoMenu = menuRef.current?.contains(alvo)
      const clicouNoBotao = botaoRef.current?.contains(alvo)

      if (!clicouNoMenu && !clicouNoBotao) {
        setMenuVisivel(false)
      }
    }

    if (menuVisivel) {
      document.addEventListener("click", fecharAoClicarFora)
    }

    return () => {
      document.removeEventListener("click", fecharAoClicarFora)
    }
  }, [menuVisivel])

  return (
    <header>
      <div className="header">
        <Link href="/" className="logo">
          <figure>
            <img src="/logo.webp" alt="Logo do site" width={40} height={30} />
          </figure>
          <p>Gravo</p>
        </Link>

        <nav className="link-desk">
          <ul>
            <li>
              <Link href="#" className="link-home">
                Home
              </Link>
            </li>
            <li>
              <Link href="#">Sobre</Link>
            </li>
            <li>
              <Link href="#">Páginas</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Contacto</Link>
            </li>
            <li>
              <Link href="#">Preços</Link>
            </li>
          </ul>
        </nav>

        <div className="btn">
          <Link href="#" className="btn-contact">
            Contacte-nos
          </Link>

          <button ref={botaoRef} className="show-hidden-menu" onClick={alternarMenu}>
            <div className={`icon ${menuVisivel ? "oculto" : "visivel"}`}>
              <HiOutlineMenuAlt4 />
            </div>

            <div className={`icon ${menuVisivel ? "visivel" : "oculto"}`}>
              <HiX />
            </div>
          </button>
        </div>

        <div ref={menuRef} className={`menu-mobile ${menuVisivel ? "aberto" : ""}`}>
          <nav className="link-mobile">
            <ul>
              <li>
                <Link href="#" className="link-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#">Sobre</Link>
              </li>
              <li>
                <Link href="#">Páginas</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Contacto</Link>
              </li>
              <li>
                <Link href="#">Preços</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
