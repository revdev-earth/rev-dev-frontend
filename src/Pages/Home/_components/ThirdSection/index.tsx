import { useEffect, useState, useRef } from "react"
// components
import { Button } from "@components"
// styles
import { Container, Circle, ControlLeft, ControlRigth } from "./styles"
// data
import { homeWorks } from "@data"
// assets
import Circles from "@assets/circles.svg"
import ArrowShort from "@assets/vector.svg"

// JSX
export const ThirdSection = () => {
  const slideshowThirdSection = useRef<HTMLDivElement>(null)
  const [pag, setPag] = useState(0)

  console.log(":: Slider ::", slideshowThirdSection)

  const siguiente = () => {
    //* Comprobando que el slide tenga elementos
    if (slideshowThirdSection.current !== null) {
      const { children } = slideshowThirdSection.current

      if (children.length > 0) {
        //*Obtener el primer elemento
        const primerElemento = children[0] as HTMLLIElement
        //* Estableciendo transicion para el slider
        slideshowThirdSection.current.style.transition = `600ms ease-out all`

        //* Tamaño de slider
        const tamañoSlide = primerElemento?.offsetWidth + 20

        //* Movemos el slideshowThirdSection
        slideshowThirdSection.current.style.transform = `translateX(-${tamañoSlide}px)`

        const transicion = () => {
          if (slideshowThirdSection.current !== null) {
            //* Reiniciamos le posicion del slideshowThirdSection
            slideshowThirdSection.current.style.transition = "none"
            slideshowThirdSection.current.style.transform = `translateX(0)`

            //* Tomamos el primer elemento y lo mandamos al final
            slideshowThirdSection.current.appendChild(primerElemento)

            //* Eliminar listener para que no se pause el slider hacia anterior
            slideshowThirdSection.current.removeEventListener(
              "transitionend",
              transicion
            )
          }
        }

        //* EventListener para cuando termina la animacion
        slideshowThirdSection.current.addEventListener(
          "transitionend",
          transicion
        )
      }
    }
  }

  const Anterior = () => {
    if (slideshowThirdSection.current !== null) {
      const { children } = slideshowThirdSection.current

      if (children.length > 0) {
        //* Identificamos la ultima posición
        const index = children.length - 1

        const ultimoElemento = children[index]

        slideshowThirdSection.current.insertBefore(
          ultimoElemento,
          slideshowThirdSection.current.firstChild
        )

        slideshowThirdSection.current.style.transition = "none"
        const { offsetWidth } = children[0] as any
        slideshowThirdSection.current.style.transform = `translateX(-${offsetWidth}px)`

        setTimeout(() => {
          if (slideshowThirdSection.current !== null) {
            slideshowThirdSection.current.style.transition = `600ms ease-out all`
            slideshowThirdSection.current.style.transform = `translateX(0)`
          }
        }, 30)
      }
    }
  }

  return (
    <Container pag={pag}>
      <h4>Portfolio</h4>
      <h3>Our Great Work</h3>
      <Circle src={Circles} alt="" />
      <div>
        <h4 onClick={() => setPag(0)}>Website Optimization</h4>

        <h4 onClick={() => setPag(1)}>Website Redesign</h4>

        <h4 onClick={() => setPag(2)}>Search Engine Optimization</h4>
      </div>
      <ul>
        <div ref={slideshowThirdSection}>
          {homeWorks[pag].map((item) => (
            <li key={Math.random() * 10}>
              <img src={item.img} alt="img-item" /> <p>{item.description}</p>
            </li>
          ))}
        </div>
        <ControlLeft>
          <img src={ArrowShort} onClick={Anterior} alt="Control left" />
        </ControlLeft>

        <ControlRigth>
          <img src={ArrowShort} onClick={siguiente} alt="" />
        </ControlRigth>
      </ul>
      <Button primary>See All</Button>
    </Container>
  )
}
