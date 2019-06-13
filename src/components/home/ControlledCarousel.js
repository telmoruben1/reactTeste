import React from "react";
import { Carousel } from 'react-bootstrap';

class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
          controls={false}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/src/css/img/idok_banner_gts.jpg"
              alt="First slide"
            />
            <div className="carousel-img1-title1">NOVO SERVIÇO</div>
            <div className="carousel-img1-title2"></div>
            <div className="carousel-img1-title3">ASSINATURA DIGITAL</div>
            <div className="carousel-img1-title4">SEM JAVA, TOKENS OU LEITOR DE CARTÕES</div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/src/css/img/idok_banner7_1.jpg"
              alt="Third slide"
            />
            <div className="carousel-img2-title1">TORNE A SUA ENTIDADE<br></br>MAIS SUSTENTÁVEL</div>
            
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/src/css/img/idok_banner10_1.jpg"
              alt="Third slide"
            />
            <div className="carousel-img3-title1">Consulte os seus documentos</div>
            <div className="carousel-img3-title2">EM QUALQUER LUGAR</div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/src/css/img/idok_banner11_1.jpg"
              alt="Third slide"
            />
            <div className="carousel-img4-title1">Classificação e Numeração de Documentos</div>
            <div className="carousel-img4-title2">SIMPLES, RÁPIDO E SEGURO</div>
          </Carousel.Item>
        </Carousel>
      );
    }
  }
  
  export default ControlledCarousel;