'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { tcaCardStackAnimation } from '@/animations/tcaCardsStack'

gsap.registerPlugin(ScrollTrigger)

export default function NosotrosPage() {
  const heroRef = useRef(null)
  const headingRef = useRef(null)
  const buttonRef = useRef(null)
  const subtitleRef = useRef(null)
  const imageRef = useRef(null)
  const heroContentRef = useRef(null)


  useEffect(() => {
    
    // Entrada animada al cargar
    const tl = gsap.timeline()

    tl.fromTo(imageRef.current,
      { opacity: 0, scale: 1 },
      { opacity: 1, duration: 1.2, ease: 'power2.out' }
    )
    .fromTo(headingRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
      '-=1' // inicia 1s antes que termine la animación anterior (superpuesto)
    )
    .fromTo(buttonRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
      '-=0.6'
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.5'
    )


    // Scroll: zoom de imagen y desaparecer contenido
    gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      }
    })
    .to(imageRef.current, {
      scale: 1.2,
      transformOrigin: 'center right',
      ease: 'none'
    })
    .to(heroContentRef.current, {
      y: 200,
      opacity: 0,
      ease: 'power1.out',
      stagger: 0.1
    }, 0)

    // Scroll: animación de tarjetas
    tcaCardStackAnimation({
      section: '.historia-stack',
      cards: '.tca-card',
      fromLeft: '300%',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      pin: true,
      stagger: 0.3,
    });
    
    
  }, [])
    
  return (
    <div>
      <section className="hero" ref={heroRef}>
        <div className="hero-image" ref={imageRef}></div>
        <div className="hero-overlay"></div>
        <div className="hero-content" ref={heroContentRef}>
          <h1 ref={headingRef}>Más que propiedades, acompañamos vidas.</h1>
          
          <p ref={subtitleRef} className="hero-subtext">
            Descubre cómo creamos experiencias memorables en cada etapa de tu camino inmobiliario.
          </p>
          <button ref={buttonRef} className="btn-cta">
            Conócenos <ArrowRight className="btn-icon" size={18} />
          </button>
        </div>
      </section>
      
      <section className="historia-stack tca-card-section">
        <div className="historia-content to-stay-card">
          <h2>Nuestra historia</h2>
          <span className="span-margin">Hecha de pasos reales.</span>
          <p className="p-margin ">
          En Gala Inmobiliaria creemos que cada paso cuenta. No nacimos como una empresa, sino como un sueño familiar. Con el tiempo, ese sueño se convirtió en una propuesta de valor que hoy acompaña a cientos de personas a encontrar algo más que un inmueble: su lugar en el mundo.
          <br/>
          </p>
          <p>
          <strong>Esta es nuestra historia, y también puede ser parte de la tuya.</strong>
          </p>
          
          
          <button className="btn-cta btn-margin">Se parte de nuestra historia</button>
        </div>
        <div className="historia-content tca-cards ">
          <div className="tca-card tca-card-1">
            <h3>El origen tiene nombre</h3>
            <p>Gala Inmobiliaria nace de la unión de dos apellidos: Garcez y Laverde. Más allá de ser nombres, representan valores familiares, esfuerzo compartido y la visión de construir algo duradero.</p>
          </div>
          <div className="tca-card tca-card-2">
            <h3>Un tributo y una promesa</h3>
            <p>Elegimos llamarnos “Gala” no solo como una fusión, sino como una palabra que evoca elegancia, distinción y momentos memorables.</p>
          </div>
          <div className="tca-card tca-card-3">
            <h3>De lo personal a lo profesional</h3>
            <p>Comenzamos entendiendo que un hogar es mucho más que cuatro paredes: es un espacio donde florecen historias, familias y sueños. Por eso, decidimos emprender con un enfoque profundamente humano.</p>
          </div>
          <div className="tca-card tca-card-4">
            <h3>Tecnología con corazón</h3>
            <p>Desde el principio, integramos herramientas digitales para hacer cada proceso más ágil, pero sin perder la cercanía. Escuchar, orientar y acompañar fueron siempre más importantes que cerrar una venta.</p>
          </div>
          <div className="tca-card tca-card-5">
            <h3>Miramos hacia adelante</h3>
            <p>Hoy, Gala se proyecta como una empresa moderna, confiable y en constante evolución. Soñamos con ser el referente inmobiliario del área metropolitana de Antioquia antes del 2030.</p>
          </div>
          <div className="tca-card tca-card-6">
            <h3>Más que inmuebles, bienestar</h3>
            <p>No vendemos propiedades. Facilitamos decisiones de vida. Con transparencia, eficiencia y calidez, <strong>seguimos creciendo para acompañarte mejor en cada etapa de tu camino.</strong></p>
          </div>
        </div>
      </section>


      <div style={{ height: '100vh' }}></div>
    </div>
  )
}

