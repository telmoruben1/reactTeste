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
      <div className="title-quality">
          <span className="text-title-quality">Reconhecimento da Excelência ACIN!</span>
      </div>
      <div className="img-sgs-quality">
          <Image className="img-sgs" src="../src/css/img/excelencia15.png"></Image>
          <Image className="img-sgs" src="../src/css/img/pme16.png"></Image>
      </div>
      <div className="text-sgs-quality">
          <span className="text-quality">É com grande satisfação que o grupo ACIN conquista, pelo segundo ano consecutivo, mais um importante galardão, PME Excelência o reconhecimento máximo atribuído às empresas. Com este reconhecimento, a ACIN, faz parte do restrito lote de empresas que respeitam os critérios relativos ao estatuto de PME Excelência. Esta distinção criada pelo IAPMEI, numa parceria com a Banca e o Turismo de Portugal, vem reconhecer publicamente o sucesso da nossa estratégia empresarial e a importância do nosso contributo para a economia nacional.</span>
          <span className="text-quality">Este prémio foi recebido com a responsabilidade de continuarmos a fazer o nosso melhor, regidos pelos elevados padrões de qualidade que sempre nos identificaram. A esta atribuição, a ACIN - iCloudSolutions, LDA, junta o Estatuto de Estatuto de PME Líder, obtido entre 2011 e 2016.</span>
          <span className="text-quality">Com estas distinções, a ACIN vê reconhecido o seu desempenho e crescimento, que, aliado a uma aposta na área de desenvolvimento aplicacional, utilizando a tecnologia de Cloud Computing, continua a sua afirmação como uma empresa de vanguarda, inovadora e dinâmica..</span>
      </div>
    </Container>
  );
};

export default Quality;
