import React from "react";
import {Container, Image} from 'react-bootstrap';

const Quality = () => {

  return (
    <Container>
        <div className="title-quality">
            <span className="text-title-quality">No Âmbito da Gestão de Qualidade</span>
            <span className="text-title-quality">e da Segurança da Informação</span>
        </div>
        <div className="img-sgs-quality">
            <Image className="img-sgs" src="../src/css/img/iso9001.png"></Image>
            <Image className="img-sgs" src="../src/css/img/iso27001.png"></Image>
            <Image className="img-sgs" src="../src/css/img/iso20000.png"></Image>
        </div>
        <div className="text-sgs-quality">
            <span className="text-quality">A ACIN, entidade gestora da plataforma iDOK, dispõe de um rigoroso sistema interno de controlo de qualidade. a Norma ISO 9001 oferece aos nossos clientes garantias adicionais ao nível dos compromissos de qualidade e satisfação.</span>
            <span className="text-quality">A garantia de confidencialidade, integridade e privacidade da informação gerida pelas nossas plataformas constitui uma das principais preocupações. a Norma ISO 27001 estabelece requisitos e protocolos de segurança da informação acreditados internacionalmente. a Política de Segurança de Informação da ACIN espelha os nossos compromissos para com esses requisitos e preocupações da organização.</span>
            <span className="text-quality">A Norma ISO/IEC 20000, padrão de referência internacional para a gestão de serviços das Tecnologias da Informação, visa gerir a qualidade dos serviços, identificando as exigências de cada cliente ou fornecedor, garantindo assim um nível de serviço superior. Com esta nova certificação, logramos alcançar um novo patamar diferenciador, uma vez que somos das únicas empresas em Portugal com esta tão exigente certificação.</span>
        </div>

    </Container>
  );
};

export default Quality;
