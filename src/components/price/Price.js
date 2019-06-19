import React from "react";
import {Image} from 'react-bootstrap';

const Price = () => {

  return (
    <>
        <div className="container-price-cards">
            <div className="card-1-gestao ">
                <p className="title-price">O iDOK é uma solução de gestão documental</p>
                <p className="title-price" style={{fontWeight:'600'}} >integrada, flexível e tecnologicamente avançada</p>
                <span class="descricao-precos">O iDOK é uma solução integrada de gestão documental que lhe permite aceder aos seus documentos em qualquer lugar, de uma forma
                <span class="text-bold fs-15">rápida</span>,
		        <span class="text-bold fs-15">segura</span>e
                <span class="text-bold fs-15">intuitiva</span>. Connosco paga o que consome, apenas cobramos o espaço de armazenamento.</span>
            </div> 
s        </div>
    </>
  );
};

export default Price;
