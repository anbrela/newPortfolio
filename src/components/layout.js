
import React, {useState, createRef, useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import about from "../images/about.png"
import { DiJavascript1 } from "react-icons/di"
import { FaLanguage, FaNodeJs } from "react-icons/fa"
import { DiPhp } from "react-icons/di"
import { DiMongodb } from "react-icons/di"
import { FaJava } from "react-icons/fa"
import { FaCss3Alt } from "react-icons/fa"
import { GrClose } from "react-icons/gr"
import { IoIosClose } from "react-icons/io"
import {GrGatsbyjs} from "react-icons/gr"
import {SiTailwindcss} from "react-icons/si"
import {GrWordpress} from "react-icons/gr"
import {FaAngleRight} from "react-icons/fa"
import lottie from 'lottie-web';
import animationDeveloper from '../animations/developer.json';
import hype from "../images/hype1.png"
import landdy from "../images/avisual.jpg"





const Layout = () => {

  let animation = createRef()


  const [navClicked, setNavClicked] = useState(false);
  const [javascriptClicked, setJavascriptClicked] = useState(false);
  const [MongoClicked, setMongoClicked] = useState(false);
  const [wordpressClicked, setWordpressClicked] = useState(false);
  const [gatsbyClicked, setGatsbyClicked] = useState(false); 
  const [cssClicked, setCssClicked] = useState(false);
  const [phpClicked, setPhpClicked] = useState(false);
  const [tailClicked, setTailClicked] = useState(false);
  const [nodeClicked, setNodeClicked] = useState(false);
  const [javaClicked, setJavaClicked] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [hypeOn, setHypeOn] = useState(true);
  const [landdyOn, setLanndyOn] = useState(false);

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
  
    lottie.loadAnimation({
      container: animation.current, // current instance of our container!
      animationData: animationDeveloper, // animation file!
      renderer: "svg",
      loop: true,
      autoplay: true,
    })

  
  const handleAngleHype = () => {

    setHypeOn(false);
    setLanndyOn(true);

  }

  const handleAngleLanddy = () => {
    setLanndyOn(false);
  }


  const handleClick = () => {
    setNavClicked(!navClicked);
  }


  const handleJavascriptButton= () => {
    setJavascriptClicked(true);
    setButtonClicked(true);

  }

  const handleCssButton= () => {
    setCssClicked(true);
    setButtonClicked(true);

  }

  const handlePhpButton= () => {
    setPhpClicked(true);
    setButtonClicked(true);

  }

  const handleGatsbyButton= () => {
    setGatsbyClicked(true);
    setButtonClicked(true);

  }

  const handleTailButton= () => {
    setTailClicked(true);
    setButtonClicked(true);

  }

  const handleNodeButton= () => {
    setNodeClicked(true);
    setButtonClicked(true);

  }

  const handleJavaButton= () => {
    setJavaClicked(true);
    setButtonClicked(true);

  }

  const handleWordpressButton= () => {
    setWordpressClicked(true);
    setButtonClicked(true);

  }



  const handleMongoButton= () => {
    setMongoClicked(!MongoClicked);
    setButtonClicked(true);

  }

  const handleCloseNav = () => {
    setNavClicked(!navClicked);
  }

  const handleCloseModal = () => {
    setJavascriptClicked(false);
    setWordpressClicked(false);
    setMongoClicked(false);
    setButtonClicked(false);
    setJavaClicked(false);
    setNodeClicked(false);
    setGatsbyClicked(false);
    setTailClicked(false);
    setPhpClicked(false);
    setCssClicked(false);
  }
 


  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div className="container">
    <div className="header">

    <div className="logo">
    <h2>PABLO <span>NAVEIRA</span> </h2>  
    </div> 

    <div className="text-header">
    <h2>FULL STACK</h2>
    <span>DEVELOPER</span>

    </div>

    <div className={navClicked ? "nav active" : "nav"}  onClick={handleClick}>

    <div className="ham">
      <div className={navClicked ? "linea1 active" : "linea1"}></div>
      <div className={navClicked ? "linea2 active" : "linea2"}></div>
      <div className={navClicked ? "enlaces active" : "enlaces"}>
        <li> <a href="#">INICIO</a> </li>
        <li> <a href="#">SOBRE MÍ</a> </li>
        <li> <a href="#">HABILIDADES</a> </li>
        <li> <a href="#">TRABAJOS</a> </li>
        <li> <a href="#">CONTACTO</a> </li>
        <button onclick={handleCloseNav}><GrClose /></button>
      </div>
    </div>

    </div>
      
    </div> 


    <div className="about">
    <div className="titulo-about">
      <div className="lines">
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
    <h2>MIS HABILIDADES</h2>
    </div>  
    <div className={buttonClicked ? "close-modal active" : "close-modal"} onClick={handleCloseModal}> <IoIosClose /> </div>

    <div className="about-wrapper">
    
    <button className={buttonClicked ? "boton1 active" : "boton1"} onClick={handleJavascriptButton}> <DiJavascript1 /> </button>
    <button className={buttonClicked ? "boton2 active" : "boton2"} onClick={handleTailButton}> <SiTailwindcss /> </button>
    <button className={buttonClicked ? "boton3 active" : "boton3"} onClick={handleNodeButton}> <FaNodeJs /> </button>
    <button className={buttonClicked ? "boton4 active" : "boton4"} onClick={handlePhpButton}> <DiPhp /> </button>
    <button className={buttonClicked ? "boton5 active" : "boton5"} onClick={handleMongoButton}> <DiMongodb /> </button>
    <button className={buttonClicked ? "boton6 active" : "boton6"} onClick={handleJavaButton}> <FaJava /> </button>
    <button className={buttonClicked ? "boton7 active" : "boton7"} onClick={handleCssButton}> <FaCss3Alt /> </button>
    <button className={buttonClicked ? "boton7 active" : "boton7"} onClick={handleGatsbyButton}> <GrGatsbyjs /> </button>
    <button className={buttonClicked ? "boton7 active" : "boton8"} onClick={handleWordpressButton}> <GrWordpress /> </button>



    <div className={javascriptClicked ? "javascript active" : "javascript"}>
      <h2>Javascript</h2>
      <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
      <div className="wrapper-progress">
      <div className="progress-bar"></div>
      <div className="pointers">
      <div className="pointer"></div>
      <div className="pointer"></div>  
      <div className="pointer"></div>  
      </div>  
      <div className="texto-progress">
        <div className="text">
          Javascript
        </div>
        <div className="text">
        Jquery
        </div>
        <div className="text">
        Typescript y ES6
        </div>

      </div>
      

      </div>

      <div className="container-button">

      <button className="btn-works">TRABAJOS</button>

      </div>


    </div>


    <div className={cssClicked ? "css active" : "css"}>
      <h2>Css3</h2>
      <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
      <div className="wrapper-progress">
      <div className="progress-bar"></div>
      <div className="pointers">
      <div className="pointer"></div>
      <div className="pointer"></div>  
      <div className="pointer"></div>  
      </div>  
      <div className="texto-progress">
        <div className="text">
          Css
        </div>
        <div className="text">
        Css
        </div>
        <div className="text">
        Typescript y ES6
        </div>

      </div>
      

      </div>

      <div className="container-button">

      <button className="btn-works">TRABAJOS</button>

      </div>


    </div>


    <div className={phpClicked ? "php active" : "php"}>
      <h2>Php</h2>
      <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
      <div className="wrapper-progress">
      <div className="progress-bar"></div>
      <div className="pointers">
      <div className="pointer"></div>
      <div className="pointer"></div>  
      <div className="pointer"></div>  
      </div>  
      <div className="texto-progress">
        <div className="text">
          Php
        </div>
        <div className="text">
        Laravel
        </div>
        <div className="text">
        Synphony
        </div>

      </div>
      

      </div>

      <div className="container-button">

      <button className="btn-works">TRABAJOS</button>

      </div>


    </div>



    <div className={tailClicked ? "tail active" : "tail"}>
      <h2>Tailwind CSS</h2>
      <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
      <div className="wrapper-progress">
      <div className="progress-bar"></div>
      <div className="pointers">
      <div className="pointer"></div>
      <div className="pointer"></div>  
      <div className="pointer"></div>  
      </div>  
      <div className="texto-progress">
        <div className="text">
          Tailwind 
        </div>
        <div className="text">
        Styles
        </div>
        <div className="text">
        Material UI
        </div>

      </div>
      

      </div>

      <div className="container-button">

      <button className="btn-works">TRABAJOS</button>

      </div>


    </div>


    <div className={gatsbyClicked ? "gatsby active" : "gatsby"}>
      <h2>Gatsby</h2>
      <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
      <div className="wrapper-progress">
      <div className="progress-bar"></div>
      <div className="pointers">
      <div className="pointer"></div>
      <div className="pointer"></div>  
      <div className="pointer"></div>  
      </div>  
      <div className="texto-progress">
        <div className="text">
          Gatsby
        </div>
        <div className="text">
        Gatsby SEO
        </div>
        <div className="text">
        Typescript y ES6
        </div>

      </div>
      

      </div>

      <div className="container-button">

      <button className="btn-works">TRABAJOS</button>

      </div>


    </div>


    <div className={nodeClicked ? "node active" : "node"}>
      <h2>Node JS</h2>
      <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
      <div className="wrapper-progress">
      <div className="progress-bar"></div>
      <div className="pointers">
      <div className="pointer"></div>
      <div className="pointer"></div>  
      <div className="pointer"></div>  
      </div>  
      <div className="texto-progress">
        <div className="text">
          Node JS
        </div>
        <div className="text">
        NOSE
        </div>
        <div className="text">
        Typescript y ES6
        </div>

      </div>
      

      </div>

      <div className="container-button">

      <button className="btn-works">TRABAJOS</button>

      </div>


    </div>

    <div className={wordpressClicked ? "wordpress active" : "wordpress"}>
      <h2>Wordpress</h2>
      <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
      <div className="wrapper-progress">
      <div className="progress-bar"></div>
      <div className="pointers">
      <div className="pointer"></div>
      <div className="pointer"></div>  
      <div className="pointer"></div>  
      </div>  
      <div className="texto-progress">
        <div className="text">
          Wordpress
        </div>
        <div className="text">
        Jquery
        </div>
        <div className="text">
        Typescript y ES6
        </div>

      </div>
      

      </div>

      <div className="container-button">

      <button className="btn-works">TRABAJOS</button>

      </div>


    </div>


    <div className={javaClicked ? "java active" : "java"}>
      <h2>Java</h2>
      <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
      <div className="wrapper-progress">
      <div className="progress-bar"></div>
      <div className="pointers">
      <div className="pointer"></div>
      <div className="pointer"></div>  
      <div className="pointer"></div>  
      </div>  
      <div className="texto-progress">
        <div className="text">
          Java
        </div>
        <div className="text">
        POO
        </div>
        <div className="text">
        Typescript y ES6
        </div>

      </div>
      

      </div>

      <div className="container-button">

      <button className="btn-works">TRABAJOS</button>

      </div>


    </div>


    <div className={MongoClicked ? "mongo active" : "mongo"}>
      <h2>Mongo DB</h2>
      <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
      <div className="wrapper-progress">
      <div className="progress-bar"></div>
      <div className="pointers">
      <div className="pointer"></div>
      <div className="pointer"></div>  
      <div className="pointer"></div>  
      </div>  
      <div className="texto-progress">
        <div className="text">
          Mongo
        </div>
        <div className="text">
        Mongoose
        </div>
        <div className="text">
        Typescript y ES6
        </div>

      </div>
      

      </div>

      <div className="container-button">

      <button className="btn-works">TRABAJOS</button>

      </div>


    </div>


    <div className={buttonClicked ? "image-about active" : "image-about"}>
    <img src={about} alt="" />
    </div>
    </div>
    <div className="custom-wave">
    <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,600 C 0,600 0,300 0,300 C 77.45454545454547,336.8421052631579 154.90909090909093,373.6842105263158 255,361 C 355.09090909090907,348.3157894736842 477.81818181818176,286.10526315789474 594,261 C 710.1818181818182,235.89473684210526 819.8181818181818,247.89473684210532 910,277 C 1000.1818181818182,306.1052631578947 1070.909090909091,352.3157894736842 1156,359 C 1241.090909090909,365.6842105263158 1340.5454545454545,332.8421052631579 1440,300 C 1440,300 1440,600 1440,600 Z" stroke="none" stroke-width="0" fill="#ffffffff" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 300)"></path></svg>
    </div>
    </div>

    <div className="works">
      <div className="container-works">
      <div className="animation" ref={animation}></div>
    <div className="titulo-works">
      <div className="lines">
        <div className="line1"></div>
        <div className="line2"></div>
      </div>
    <h2>ÚLTIMOS TRABAJOS</h2>
    </div>  
    {hypeOn ?
    <div className="container-items-works">

    <div className="item-works">
    <h2>escapismolugo.com</h2>
    <div className="container-web-image">
    <img src={hype} alt="" /> 
    </div>
    <div className="categorias-item">
      <span>javascript</span>
      <span>wordpress</span>
      <span>mysql</span>
      <span>elementor</span>
      </div>
   
 
    </div>
    <div className="angle" onClick={handleAngleHype}>
    <FaAngleRight />
    </div>
    </div>

    : null }


{landdyOn ?
    <div className="container-items-works">

    <div className="item-works">
    <h2>landdy.io</h2>
    <div className="container-web-image">
    <img src={landdy} alt="" /> 
    </div>
    <div className="categorias-item">
      <span>Gatsby</span>
      <span>ReactJS</span>
      <span>Tailwind</span>
      <span>GraphiQl</span>
      </div>
   
 
    </div>
    <div className="angle" onClick={handleAngleLanddy}>
    <FaAngleRight />
    </div>
    </div>

    : null }

    </div>

    </div>
    </div>     
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
