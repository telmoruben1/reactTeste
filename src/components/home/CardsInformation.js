import React from "react";
import { Container, Row, Col, Image  } from 'react-bootstrap';

const CardsInformation = () => {
  return (
    <Container className="d-none d-xl-block d-md-none" style={{height:'255px'}}>
    <Row  className="justify-content-md-center " >
      <Col className="border-color mt-4 " md="3" xs="12" style={{height:'205px'}}>
        <Row className="justify-content-md-center">
          <Col md="6" >
            <Image className="ml-4" src="../src/css/img/registe-se.png"></Image>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="mt-2 titel-cards" md="6">
            Registo Grátis
          </Col>
        </Row>
        <Row>
          <Col className="mt-3 ml-2 text-cards" md="11">
            Registe gratuitamente a sua empresa e usufrua de todas as vantagens desta plataforma de gestão documental online.
          </Col>
        </Row>
        <Row>
          <Col className="col-md-7 mt-2" style={{marginLeft:'55%'}}>
             <a className="ref-cards" href="/aderir">Registe-se aqui!</a>
          </Col>
        </Row>
      </Col>
      <Col className="border-color mt-4 " md="3" xs="12">
        <Row className="justify-content-md-center">
          <Col md="6" >
            <Image className="ml-4" src="../src/css/img/simples.png"></Image>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="mt-2 titel-cards ml-3" md="8">
            Simples e Intuitivo
          </Col>
        </Row>
        <Row>
          <Col className="mt-3 ml-2 text-cards" md="11">
            Com o iDOK, é muito simples e intuitivo registar, consultar ou mesmo arquivar toda a documentação da sua empresa.
          </Col>
        </Row>
        <Row>
          <Col className="col-md-8 mt-2" style={{marginLeft:'46%'}}>
             <a className="ref-cards" href="/aderir">Consulte o catálogo!</a>
          </Col>
        </Row>
      </Col>
      <Col className="border-color mt-4 " md="3" xs="12">
        <Row className="justify-content-md-center">
          <Col md="6" >
            <Image className="ml-4" src="../src/css/img/liberte-se.png"></Image>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="mt-2 titel-cards ml-3" md="8">
            Liberte-se do papel
          </Col>
        </Row>
        <Row>
          <Col className="mt-3 ml-2 text-cards" md="11">
            Em apenas alguns cliques, aceda facilmente a todos os documentos e a toda a informação relevante da sua empresa.
          </Col>
        </Row>
        <Row>
          <Col className="col-md-7 mt-2" style={{marginLeft:'44%'}}>
             <a className="ref-cards" href="/aderir">Conheça as vantagens!</a>
          </Col>
        </Row>
      </Col>
      <Col className="mt-4" md="3" xs="12">
        <Row className="justify-content-md-center">
          <Col md="6" >
            <Image className="ml-4" src="../src/css/img/apoio.png"></Image>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="mt-2 titel-cards mr-3" md="6">
            Apoio ao cliente
          </Col>
        </Row>
        <Row>
          <Col className="mt-3 ml-2 text-cards" md="11">
            Estamos ao seu dispor todos os dias úteis, das 8h30 às 19h00, através dos seguintes contactos:
          </Col>
        </Row>
        <Row>
          <Col className="mt-2 ml-2" md="12">
            <Image className="mr-1" src="../src/css/img/telefone.png"></Image><span className="pr-1" style={{fontSize: "12px"}}>707 451 451</span> | <Image className="ml-2 mr-1" src="../src/css/img/mail.png"></Image><span style={{fontSize: "12px"}}>apoio@idok.pt</span>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
  );
};

export default CardsInformation;