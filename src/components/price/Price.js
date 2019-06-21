import React from "react";
import {Container} from 'react-bootstrap';

const Price = () => {

  return (
    <Container>
        <div className="container-price-cards">
            <p className="title-price">O iDOK é uma solução de gestão documental</p>
            <p className="title-price" style={{fontWeight:'600'}} >integrada, flexível e tecnologicamente avançada</p>
            <span className="description-price text-justify mt-5">O iDOK é uma solução integrada de gestão documental que lhe permite aceder aos seus documentos em qualquer lugar, de uma forma
            <span className="font-weight-bold "> rápida</span>,<span className="font-weight-bold "> segura</span> e<span className="font-weight-bold"> intuitiva</span>. Conosco paga o que consome, apenas cobramos o espaço de armazenamento.</span>
            <span className="mt-5 description-price text-justify">O nosso serviço de suporte é TOTALMENTE GRATUITO!</span>
        </div>
        <div className="container-title-table mt-4">
            <span className="title-table ml-3">Preços mensais</span>
        </div>
        <div className="container-grid-prices">
            <div className="price price-1">
                <div className="memory">
                    <span className="small-text mr-1">Até</span>
                    <span className="longer-text mr-1">1</span>
                    <span className="medium-text">GB</span>
                </div>
                <div className="price-memory">
                    <span className="price-text mr-1">10 €</span>
                </div>
            </div>
            <div className="price price-2">
            <div className="memory">
                    <span className="small-text mr-1">Até</span>
                    <span className="longer-text mr-1">5</span>
                    <span className="medium-text">GB</span>
                </div>
                <div className="price-memory">
                    <span className="price-text mr-1">40 €</span>
                </div>
            </div>
            <div className="price price-3">
                <div className="memory">
                    <span className="small-text mr-1">Até</span>
                    <span className="longer-text mr-1">10</span>
                    <span className="medium-text">GB</span>
                </div>
                <div className="price-memory">
                    <span className="price-text mr-1">75 €</span>
                </div>
            </div>  
            <div className="price price-4">
                <div className="memory">
                        <span className="small-text mr-1">Até</span>
                        <span className="longer-text mr-1">20</span>
                        <span className="medium-text">GB</span>
                </div>
                <div className="price-memory">
                        <span className="price-text mr-1">140 €</span>
                </div>
            </div>
            <div className="price price-5">
                <div className="memory-20G">
                    <span className="longer-text mr-1">+ De 20</span>
                    <span className="medium-text">GB</span>
                </div>
                <div className="price-memory">
                    <div>
                        <span className="price-text mr-1">15 €</span>
                        <span className="medium-text-20G">POR CADA</span>
                        <span className="medium-text-20G">2 GB ADICIONAL</span>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  );
};

export default Price;
