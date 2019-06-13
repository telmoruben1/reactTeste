import React from "react";
import { Container, Row, Col, Image  } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container  style={{positionFixed:true,marginTop:"4%"}}>
        <Row className="justify-content-md-center">
            <Col className="col-md-6 col-xs-6 offset-md-3 offset-sm-3 offset-3">
                <Image className="facebook" src="../src/css/img/facebook.png"></Image>
                <Image className="youtube ml-3" src="../src/css/img/youtube.png"></Image>
                <Image className="linkedin ml-3" src="../src/css/img/linkedin.png"></Image>
                <Image className="new_google ml-3" src="../src/css/img/new_google+.png"></Image>
                <Image className="new_instagram ml-3" src="../src/css/img/new_instagram.png"></Image>
                
            </Col>
        </Row>
        <Row className="justify-contxent-md-center mt-2">
            <Col className="text-footer col-md-12 offset-sm-1">
                <span style={{fontWeight: '300',fontSize: '11px'}}> 
                    iDOK, 2019 © Todos os direitos reservados | Direitos de Propriedade | Política de Privacidade
                </span>
            </Col>
        </Row>
    </Container>
  );
};

export default Footer;