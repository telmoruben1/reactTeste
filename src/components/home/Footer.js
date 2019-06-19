import React from "react";
import { Container, Row, Col, Image  } from 'react-bootstrap';
import { faDivide } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="container-footer">
        <div className="container-social-networks">
            <Image className="facebook" src="../src/css/img/facebook.png"></Image>
            <Image className="youtube ml-3" src="../src/css/img/youtube.png"></Image>
            <Image className="linkedin ml-3" src="../src/css/img/linkedin.png"></Image>
            <Image className="new_google ml-3" src="../src/css/img/new_google+.png"></Image>
            <Image className="new_instagram ml-3" src="../src/css/img/new_instagram.png"></Image>
        </div>
        <div className="container-social-networks mt-2">
            <span style={{fontWeight: '300',fontSize: '11px'}}> 
                iDOK, 2019 © Todos os direitos reservados | Direitos de Propriedade | Política de Privacidade
            </span>
        </div>
    </div>
  );
};

export default Footer;