import React, { useState, createRef, useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import Seo from "../components/seo"
import about from "../images/about.png"
import { DiJavascript1 } from "react-icons/di"
import { FaLanguage, FaNodeJs } from "react-icons/fa"
import { DiPhp } from "react-icons/di"
import { DiMongodb } from "react-icons/di"
import { FaJava } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { GrClose } from "react-icons/gr"
import { IoIosClose } from "react-icons/io"
import { GrGatsbyjs } from "react-icons/gr"
import { SiTailwindcss } from "react-icons/si"
import { GrWordpress } from "react-icons/gr"
import { FaAngleRight } from "react-icons/fa"
import lottie from "lottie-web"
import animationDeveloper from "../animations/developer.json"
import hype from "../images/hype1.png"
import landdy from "../images/casaalta.png"
import elanails from "../images/elanails.png"
import me from "../images/me.png"
import linkedin from "../images/linkedin.svg"
import whatsapp from "../images/whatsapp.svg"
import github from "../images/github.png"

const Layout = ({ children }) => {
  let animation = createRef()

  const [navClicked, setNavClicked] = useState(false)
  const [javascriptClicked, setJavascriptClicked] = useState(false)
  const [MongoClicked, setMongoClicked] = useState(false)
  const [wordpressClicked, setWordpressClicked] = useState(false)
  const [gatsbyClicked, setGatsbyClicked] = useState(false)
  const [cssClicked, setCssClicked] = useState(false)
  const [phpClicked, setPhpClicked] = useState(false)
  const [tailClicked, setTailClicked] = useState(false)
  const [nodeClicked, setNodeClicked] = useState(false)
  const [javaClicked, setJavaClicked] = useState(false)
  const [buttonClicked, setButtonClicked] = useState(false)
  const [hypeOn, setHypeOn] = useState(true)
  const [elaOn, setElaOn] = useState(false)
  const [landdyOn, setLanndyOn] = useState(false)

  //search animation
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animation.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationDeveloper,
    })
    return () => anim.destroy() // optional clean up for unmounting
  }, [animation])

  const handleAngleHype = () => {
    setHypeOn(false)
    setLanndyOn(true)
  }

  const handleAngleLanddy = () => {
    setLanndyOn(false)
    setElaOn(true)
  }

  const handleAngleEla = () => {
    setElaOn(false)
    setHypeOn(true)
  }

  const handleClick = () => {
    setNavClicked(!navClicked)
  }

  const handleJavascriptButton = () => {
    setJavascriptClicked(true)
    setButtonClicked(true)
  }

  const handleCssButton = () => {
    setCssClicked(true)
    setButtonClicked(true)
  }

  const handlePhpButton = () => {
    setPhpClicked(true)
    setButtonClicked(true)
  }

  const handleGatsbyButton = () => {
    setGatsbyClicked(true)
    setButtonClicked(true)
  }

  const handleTailButton = () => {
    setTailClicked(true)
    setButtonClicked(true)
  }

  const handleNodeButton = () => {
    setNodeClicked(true)
    setButtonClicked(true)
  }

  const handleJavaButton = () => {
    setJavaClicked(true)
    setButtonClicked(true)
  }

  const handleWordpressButton = () => {
    setWordpressClicked(true)
    setButtonClicked(true)
  }

  const handleMongoButton = () => {
    setMongoClicked(!MongoClicked)
    setButtonClicked(true)
  }

  const handleCloseNav = () => {
    setNavClicked(!navClicked)
  }

  const handleCloseModal = () => {
    setJavascriptClicked(false)
    setWordpressClicked(false)
    setMongoClicked(false)
    setButtonClicked(false)
    setJavaClicked(false)
    setNodeClicked(false)
    setGatsbyClicked(false)
    setTailClicked(false)
    setPhpClicked(false)
    setCssClicked(false)
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
          secondTitle
        }
      }
    }
  `)

  return (
    <>
      <div className="container">
        <div className="header">
          <Seo
            title={data.site.siteMetadata.title}
            description={data.site.siteMetadata.description}
            secondTitle={data.site.siteMetadata.secondTitle}
          />
          <div className="logo">
            <h2>
              PABLO <span>NAVEIRA</span>{" "}
            </h2>
          </div>

          <div className="text-header">
            <h2>FULL STACK</h2>
            <span>DEVELOPER</span>
          </div>

          <div
            className={navClicked ? "nav active" : "nav"}
            onClick={handleClick}
          >
            <div className="ham">
              <div className={navClicked ? "linea1 active" : "linea1"}></div>
              <div className={navClicked ? "linea2 active" : "linea2"}></div>
              <div className={navClicked ? "enlaces active" : "enlaces"}>
                <li>
                  {" "}
                  <a href="#info">SOBRE MÍ</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#skills">HABILIDADES</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#works">TRABAJOS</a>{" "}
                </li>
                <button onClick={handleCloseNav}>
                  <GrClose />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="info" id="info">
          <div className="wrapper-info">
            <div className="text-info">
              <h2>UN JEDI DEL FRONT-END </h2>
              <p>
                Soy Pablo Naveira, actualmente desarrollador Front-End. Aún así
                la vida me ha llevado por muchos caminos desde la producción
                audiovisual (edición de vídeo, fotografía y audio), producción
                teatral e incluso en el mundo del márketing. Soy un apasionado
                del SEO y del inbound márketing. Actualmente me dedico a seguir
                aprendiendo nuevas tecnologías web.
              </p>
            </div>
            <div className="img-info">
              <img src={me} alt="" />
            </div>
          </div>
        </div>

        <div className="about" id="skills">
          <div className="titulo-about">
            <h2>MIS HABILIDADES</h2>
          </div>
          <div
            className={buttonClicked ? "close-modal active" : "close-modal"}
            onClick={handleCloseModal}
          >
            {" "}
            <IoIosClose />{" "}
          </div>

          <div className="about-wrapper">
            <button
              className={buttonClicked ? "boton1 active" : "boton1"}
              onClick={handleJavascriptButton}
            >
              {" "}
              <DiJavascript1 />{" "}
            </button>
            <button
              className={buttonClicked ? "boton2 active" : "boton2"}
              onClick={handleTailButton}
            >
              {" "}
              <SiTailwindcss />{" "}
            </button>
            <button
              className={buttonClicked ? "boton3 active" : "boton3"}
              onClick={handleNodeButton}
            >
              {" "}
              <FaNodeJs />{" "}
            </button>
            <button
              className={buttonClicked ? "boton4 active" : "boton4"}
              onClick={handlePhpButton}
            >
              {" "}
              <DiPhp />{" "}
            </button>
            <button
              className={buttonClicked ? "boton5 active" : "boton5"}
              onClick={handleMongoButton}
            >
              {" "}
              <DiMongodb />{" "}
            </button>
            <button
              className={buttonClicked ? "boton6 active" : "boton6"}
              onClick={handleJavaButton}
            >
              {" "}
              <FaJava />{" "}
            </button>
            <button
              className={buttonClicked ? "boton7 active" : "boton7"}
              onClick={handleCssButton}
            >
              {" "}
              <FaCss3Alt />{" "}
            </button>
            <button
              className={buttonClicked ? "boton7 active" : "boton7"}
              onClick={handleGatsbyButton}
            >
              {" "}
              <GrGatsbyjs />{" "}
            </button>
            <button
              className={buttonClicked ? "boton7 active" : "boton8"}
              onClick={handleWordpressButton}
            >
              {" "}
              <GrWordpress />{" "}
            </button>

            <div
              className={javascriptClicked ? "javascript active" : "javascript"}
            >
              <h2>Javascript</h2>
              <p>
                El primer lenguaje de programación por el cuál me interesé,
                llevo aproximadamente un año con él y he realizado multitud de
                webs y aplicaciones con Javascript. Tras realizar un master
                online en Udemy y aprender por mi cuenta sobre Jquery y
                diferentes librerías de uso diario. He utilizado Scroll Magic y
                Gsap también en diferentes proyectos para realizar animaciones
                con Scroll. Si quieres ver más proyectos, ponte en contacto
                conmigo ;)
              </p>
              <div className="wrapper-progress">
                <div className="progress-bar"></div>
                <div className="pointers">
                  <div className="pointer"></div>
                  <div className="pointer"></div>
                  <div className="pointer"></div>
                </div>
                <div className="texto-progress">
                  <div className="text">Javascript</div>
                  <div className="text">Jquery</div>
                  <div className="text">Typescript y ES6</div>
                </div>
              </div>

              <div className="container-button">
                <button className="btn-works">
                  {" "}
                  <a href="#works">TRABAJOS</a>{" "}
                </button>
              </div>
            </div>

            <div className={cssClicked ? "css active" : "css"}>
              <h2>Css3</h2>
              <p>
                El CSS3 es mi vida, realmente es lo que me mueve, me encanta el
                diseño web y todo el proceso que conlleva. Desde el primer
                Sketch hasta su trabajo final de maquetación. He realizado más
                de 200 webs y he aprendido lo suficiente de diseño y maquetación
                para considerarme un buen conocedor de la misma y atreverme con
                cualquier proyecto o animación.
              </p>
              <div className="wrapper-progress">
                <div className="progress-bar"></div>
                <div className="pointers">
                  <div className="pointer"></div>
                  <div className="pointer"></div>
                  <div className="pointer"></div>
                </div>
                <div className="texto-progress">
                  <div className="text">Css</div>
                  <div className="text">Saas</div>
                  <div className="text">Tailwind y Bootstrap</div>
                </div>
              </div>

              <div className="container-button">
                <button className="btn-works">
                  {" "}
                  <a href="#works">TRABAJOS</a>{" "}
                </button>
              </div>
            </div>

            <div className={phpClicked ? "php active" : "php"}>
              <h2>Php</h2>
              <p>
                El siguiente lenguaje de programación que me interesó fue PHP.
                Tras más de 10 años realizando páginas web en wordpress decidí
                meterme de lleno en el mundo del desarrollo y entender un poco
                más el código. Antes, sólo Drag and Drop, ahora coding and
                design. He estudiado en Udemy el master online de Frameworks
                como Laravel o Symphony. No me considero un experto pero aprendo
                rápido.
              </p>
              <div className="wrapper-progress">
                <div className="progress-bar"></div>
                <div className="pointers">
                  <div className="pointer"></div>
                  <div className="pointer"></div>
                  <div className="pointer"></div>
                </div>
                <div className="texto-progress">
                  <div className="text">Php</div>
                  <div className="text">Laravel</div>
                  <div className="text">Symphony</div>
                </div>
              </div>

              <div className="container-button">
                <button className="btn-works">
                  {" "}
                  <a href="#works">TRABAJOS</a>{" "}
                </button>
              </div>
            </div>

            <div className={tailClicked ? "tail active" : "tail"}>
              <h2>Diseño Web</h2>
              <p>
                Si estás buscando un diseñador de webs...Has llegado al lugar
                correcto. Sueño con despertarme y que cada día mis ojos se
                peleen con una maquetación o con un desarrollo Front End. Domino
                la edición con Photoshop y Illustrator, también la edición de
                vídeo. Me gusta el diseño y he cursado un año en la escuela
                Ramón Falcón de Lugo.{" "}
              </p>
              <div className="wrapper-progress">
                <div className="progress-bar"></div>
                <div className="pointers">
                  <div className="pointer"></div>
                  <div className="pointer"></div>
                  <div className="pointer"></div>
                </div>
                <div className="texto-progress">
                  <div className="text">Photoshop</div>
                  <div className="text">Illustrator</div>
                  <div className="text">Sketch</div>
                </div>
              </div>

              <div className="container-button">
                <button className="btn-works">
                  {" "}
                  <a href="#works">TRABAJOS</a>{" "}
                </button>
              </div>
            </div>

            <div className={gatsbyClicked ? "gatsby active" : "gatsby"}>
              <h2>Gatsby</h2>
              <p>
                Esta web está diseñada con Gatsby. He creado webs con el Starter
                y sin el Starter. Adoro Gatsby por la facilidad para crear
                páginas webs estáticas que, si no me equivoco son el futuro por
                su facilidad, velocidad y posicionamiento.
              </p>
              <div className="wrapper-progress">
                <div className="progress-bar"></div>
                <div className="pointers">
                  <div className="pointer"></div>
                  <div className="pointer"></div>
                  <div className="pointer"></div>
                </div>
                <div className="texto-progress">
                  <div className="text">Gatsby</div>
                  <div className="text">Gatsby SEO</div>
                </div>
              </div>

              <div className="container-button">
                <button className="btn-works">
                  {" "}
                  <a href="#works">TRABAJOS</a>{" "}
                </button>
              </div>
            </div>

            <div className={nodeClicked ? "node active" : "node"}>
              <h2>Node JS</h2>
              <p>
                He creado varias apps con NodeJS y React. He creado varias Api
                Rest y también domino Express y su Routing. Me encantaría seguir
                aprendiendo y convertirme en un Full Stack without Google.
                También he realizado una app con chat en tiempo real con
                Socket.io
              </p>
              <div className="wrapper-progress">
                <div className="progress-bar"></div>
                <div className="pointers">
                  <div className="pointer"></div>
                  <div className="pointer"></div>
                  <div className="pointer"></div>
                </div>
                <div className="texto-progress">
                  <div className="text">Node JS</div>
                  <div className="text">Express</div>
                  <div className="text">Socket.io</div>
                </div>
              </div>

              <div className="container-button">
                <button className="btn-works">
                  {" "}
                  <a href="#works">TRABAJOS</a>{" "}
                </button>
              </div>
            </div>

            <div
              className={wordpressClicked ? "wordpress active" : "wordpress"}
            >
              <h2>Wordpress</h2>
              <p>
                Aquí donde me lees, me considero un diseñador web (es cierto que
                ahora soy más un desarrollador), llevo más de 10 años diseñado
                páginas en wordpress y también bocetando diseños UX y UI a
                medida. Desde que descubrí el código aborrezco un poco los CMS,
                si necesitas un diseñador...sílbame.
              </p>
              <div className="wrapper-progress">
                <div className="progress-bar"></div>
                <div className="pointers">
                  <div className="pointer"></div>
                  <div className="pointer"></div>
                  <div className="pointer"></div>
                </div>
                <div className="texto-progress">
                  <div className="text">Wordpress</div>
                  <div className="text">Jquery</div>
                  <div className="text">Typescript y ES6</div>
                </div>
              </div>

              <div className="container-button">
                <button className="btn-works">
                  {" "}
                  <a href="#works">TRABAJOS</a>{" "}
                </button>
              </div>
            </div>

            <div className={javaClicked ? "java active" : "java"}>
              <h2>Java</h2>
              <p>
                Estoy estudiando Desarrollo de aplicaciones web, por tanto he
                cursado un año entero de Java. Para ser sincero, no es mi
                devoción, me defiendo con la programación orientada a objetos
                pero no me considero ningún experto, si estás buscando un
                desarrollador de Java no soy el más apto. Aún así, si buscas un
                Full Stack que quiera aprender un poco de todo. ¡Soy tu hombre!
              </p>
              <div className="wrapper-progress">
                <div className="progress-bar"></div>
                <div className="pointers">
                  <div className="pointer"></div>
                  <div className="pointer"></div>
                  <div className="pointer"></div>
                </div>
                <div className="texto-progress">
                  <div className="text">Java</div>
                  <div className="text">POO</div>
                </div>
              </div>

              <div className="container-button">
                <button className="btn-works">
                  {" "}
                  <a href="#works">TRABAJOS</a>{" "}
                </button>
              </div>
            </div>

            <div className={MongoClicked ? "mongo active" : "mongo"}>
              <h2>Mongo DB</h2>
              <p>
                Mongo Db es la base de datos que más utilizo, como me considero
                un JS Full Stack, utilizo esta bd para crear aplicaciones en
                react o diferentes páginas que necesiten una base de datos como
                para la creación de un blog etc. He trabajado con el cloud y
                también en local.
              </p>
              <div className="wrapper-progress">
                <div className="progress-bar"></div>
                <div className="pointers">
                  <div className="pointer"></div>
                  <div className="pointer"></div>
                  <div className="pointer"></div>
                </div>
                <div className="texto-progress">
                  <div className="text">Mongo</div>
                  <div className="text">Mongoose</div>
                </div>
              </div>

              <div className="container-button">
                <button className="btn-works">
                  {" "}
                  <a href="#works">TRABAJOS</a>{" "}
                </button>
              </div>
            </div>

            <div
              className={buttonClicked ? "image-about active" : "image-about"}
            >
              <img src={about} alt="" />
            </div>
          </div>
          <div className="custom-wave">
            <svg
              height="100%"
              width="100%"
              id="svg"
              viewBox="0 0 1440 400"
              xmlns="http://www.w3.org/2000/svg"
              className="transition duration-300 ease-in-out delay-150"
            >
              <path
                d="M 0,400 C 0,400 0,200 0,200 C 125.53571428571428,196.82142857142856 251.07142857142856,193.64285714285714 366,205 C 480.92857142857144,216.35714285714286 585.2500000000001,242.24999999999997 702,237 C 818.7499999999999,231.75000000000003 947.9285714285716,195.3571428571429 1073,184 C 1198.0714285714284,172.6428571428571 1319.0357142857142,186.32142857142856 1440,200 C 1440,200 1440,400 1440,400 Z"
                stroke="none"
                strokeWidth="0"
                fill="#ffe156ff"
                className="transition-all duration-300 ease-in-out delay-150"
                transform="rotate(-180 720 200)"
              ></path>
            </svg>
          </div>
        </div>

        <div className="works" id="works">
          <div className="container-works">
            <div className="animation" ref={animation}></div>
            <div className="titulo-works">
              <h2>ÚLTIMOS TRABAJOS</h2>
            </div>
            {hypeOn ? (
              <div className="container-items-works">
                <div className="item-works">
                  <h2>escapismolugo.com</h2>
                  <div className="container-web-image">
                    <img src={hype} alt="" />
                  </div>
                  <div className="categorias-item">
                    <span>Bootstrap</span>
                    <span>CSS</span>
                    <span>SASS</span>
                    <span>Javascript</span>
                  </div>
                </div>
                <div className="angle" onClick={handleAngleHype}>
                  <FaAngleRight />
                </div>
              </div>
            ) : null}

            {landdyOn ? (
              <div className="container-items-works">
                <div className="item-works">
                  <h2>Casaalta.cat</h2>
                  <div className="container-web-image">
                    <img src={landdy} alt="" />
                  </div>
                  <div className="categorias-item">
                    <span>Wordpress</span>
                    <span>Javascript</span>
                    <span>PHP</span>
                    <span>Css</span>
                  </div>
                </div>
                <div className="angle" onClick={handleAngleLanddy}>
                  <FaAngleRight />
                </div>
              </div>
            ) : null}

            {elaOn ? (
              <div className="container-items-works">
                <div className="item-works">
                  <h2>elanails.com</h2>
                  <div className="container-web-image">
                    <img src={elanails} alt="" />
                  </div>
                  <div className="categorias-item">
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Javascript</span>
                  </div>
                </div>
                <div className="angle" onClick={handleAngleEla}>
                  <FaAngleRight />
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <footer>
          <div className="container-footer">
            <div className="footer-note">
              Esta página está diseñada con Gatsby (React). He realizado muchos
              más trabajos y prototipos, si quieres ver más entra en mi perfil
              de Github o ponte en contacto conmigo.{" "}
            </div>
            <div className="social">
              <a href="https://github.com/anbrela?tab=repositories">
                {" "}
                <img src={github} alt="full stack github" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=+34678725154&text=Hola!!">
                {" "}
                <img src={whatsapp} alt="full stack github" />
              </a>
              <a href="https://www.linkedin.com/in/naveiralopezpablo/">
                {" "}
                <img src={linkedin} alt="full stack github" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
