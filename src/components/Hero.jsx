import { useState, useEffect } from "react";
import slideImage1 from "../assets/images/slide1.0.cropped.webp";
import slideImage2 from "../assets/images/slide2.0.cropped.webp";
import "./hero.css";

const slides = [
  {
    image: slideImage1,
    title: (
      <>
        Consultas sem <b>Sair de Casa</b>
      </>
    ),
    text: (
      <>
        Com a <b>MentoraMed</b>, você acessa consultas médicas online de forma
        rápida, segura e prática.
        <br />
        <br />
        Mais conforto, menos espera.
      </>
    ),
    buttonText: "Fale com um Especialista",
    buttonLink: "#contato",
    titleColor: "#0A5046",
    paragraphColor: "#000",
    buttonClass: "btn btn-md r-08 btn--bruswick-green hover--tra-blue",
    alignment: "left",
    textMaxWidth: "600px", // max width for this slide text
  },
  {
    image: slideImage2,
    title: (
      <>
        Acompanhe seus <b>Resultados</b>
      </>
    ),
    text: (
      <>
        Com o <b>MentoraMed</b>, ficou mais fácil marcar retornos, acompanhar
        resultados de exames e manter um contato frequente com o médico,
        garantindo um cuidado mais próximo e personalizado.
      </>
    ),
    buttonText: "Fale com um Especialista",
    buttonLink: "#contato",
    titleColor: "#0A5046",
    paragraphColor: "#000",
    buttonClass: "btn btn-md r-08 btn--bruswick-green hover--tra-blue",
    alignment: "right",
    textMaxWidth: "600px",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[index];

  return (
    <section id="sobre" className="hero-1 hero-section py-90">
      <div className="slideshow">
        <div className="slide-content division">
          <div className="container-xxl">
            <div className="row">
              <div
                className={`col-lg-8 col-xl-7 ${
                  currentSlide.alignment === "right" ? "ms-auto text-end" : ""
                }`}
              >
                <div
                  className="caption"
                  style={{
                    alignItems:
                      currentSlide.alignment === "right"
                        ? "flex-end"
                        : "flex-start",
                  }}
                >
                  <div className="title">
                    <h2 style={{ color: currentSlide.titleColor }}>
                      {currentSlide.title}
                    </h2>
                  </div>
                  <div
                    className="text"
                    style={{
                      color: currentSlide.paragraphColor,
                      maxWidth: currentSlide.textMaxWidth || "100%",
                    }}
                  >
                    <p className="fs-20">{currentSlide.text}</p>
                    <a
                      href={currentSlide.buttonLink}
                      className={currentSlide.buttonClass}
                    >
                      {currentSlide.buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background image(s) with fade effect */}
        <div className="image-container">
          {slides.map((slide, i) => (
            <img
              key={i}
              src={slide.image}
              alt="slide-background"
              className={i === index ? "active" : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
