import React from "react";
import {Container, Image} from 'react-bootstrap';

const Contacts = () => {

  return (
    <Container>
        <div className="container-contacts">
            <span className="title-contact">Serviço de Apoio <span style={{fontWeight:'700'}}>GRATUITO</span></span>
            <p className="text-contacts">Estamos ao seu dispor, todos os dias úteis, das <span style={{fontWeight:'700'}}>08h30 às 19h00,</span> através dos seguintes contactos:</p>
            <div className="contacts-apoio">
                <span style={{marginBottom:'1%'}}><Image className="img-sgs" src="../src/css/img/telefone_c.png"></Image>707 451 451</span>
                <span><Image className="img-sgs" src="../src/css/img/mail_c.png"></Image>apoio@idok.pt</span>
            </div>
            <p className="text-contacts">Poderá ainda contactar-nos, dirigindo-se diretamente aos nossos escritórios:</p>
            <div className="text-location">
                <div className="container-coordinate">
                    <p className="title-location">PORTO</p>
                    <p className="text-street">ACIN iCloud Solutions</p>
                    <p className="text-street">Tecmaia</p>
                    <p className="text-street">Rua Eng. Frederico Ulrich, 2650</p>
                    <p className="text-street">4470-605 - Maia</p>
                    <p className="title-location" style={{marginTop:'5%'}}>Coordenadas GPS</p>
                    <div className="coordinates-area">
                        <Image className="img-sgs" style={{paddingLeft:'5%'}} src="../src/css/img/coordenadas.png"></Image>
                        <a className="href-coordinates" href="//www.google.com/maps/place/41%C2%B015'30.3%22N+8%C2%B038'29.2%22W/@41.2582831,-8.6403366,376m/data=!3m1!1e3!4m2!3m1!1s0x0:0x0" rel="noopener noreferrer" target="_blank">
                        {"41º 15' 30.26'N"}<br /> {"8º 38' 29.2'W"} </a>
                    </div>
                </div>
                <div className="container-coordinate">
                    <p className="title-location">LISBOA</p>
                    <p className="text-street">Avenida D. João II</p>
                    <p className="text-street">N° 25 - 3° Piso</p>
                    <p className="text-street">1990-079 - Lisboa</p>
                    <p className="title-location" style={{marginTop:'16%'}}>Coordenadas GPS</p>
                    <div className="coordinates-area">
                        <Image className="img-sgs" style={{paddingLeft:'5%'}} src="../src/css/img/coordenadas.png"></Image>
                        <a className="href-coordinates" href="//www.google.com/maps/place/38%C2%B045'57.9%22N+9%C2%B005'53.4%22W/@38.7662147,-9.0981066,130m/data=!3m1!1e3!4m2!3m1!1s0x0:0x0" rel="noopener noreferrer" target="_blank">
                        {"38º 45' 57.89'N"}<br /> {"9º 05' 53.36'W"} </a>
                    </div>
                </div>
                <div className="container-coordinate">
                    <p className="title-location">MADEIRA</p>
                    <p className="text-street">{"Estrada Regional 104 N.º 42-A"}</p>
                    <p className="text-street">9350-203 Ribeira Brava</p>
                    <p className="text-street">Madeira</p>
                    <p className="title-location" style={{marginTop:'16%'}}>Coordenadas GPS</p>
                    <div className="coordinates-area">
                        <Image className="img-sgs" style={{paddingLeft:'5%'}} src="../src/css/img/coordenadas.png"></Image>
                        <a className="href-coordinates" href="//www.google.com/maps/place/32%C2%B040'44.6%22N+17%C2%B003'36.0%22W/@32.6788585,-17.0601491,141m/data=!3m1!1e3!4m2!3m1!1s0x0:0x0" rel="noopener noreferrer" target="_blank">
                        {"32º 40' 44.6'N"}<br /> {"17º 03' 36.0' W"} </a>
                    </div>
                </div>
                <div className="container-coordinate">
                    <p className="title-location">AÇORES</p>
                    <p className="text-street">ACIN iCloud Solutions</p>
                    <p className="text-street">Rua da Alegria n° 101</p>
                    <p className="text-street">9500-157 Ponta Delgada</p>
                    <p className="text-street">Açores</p>
                    <p className="title-location" style={{marginTop:'5%'}}>Coordenadas GPS</p>
                    <div className="coordinates-area">
                        <Image className="img-sgs" style={{paddingLeft:'5%'}} src="../src/css/img/coordenadas.png"></Image>
                        <a className="href-coordinates" href="//www.google.com/maps/place/37%C2%B044'16.6%22N+25%C2%B040'36.3%22W/@37.7368414,-25.672673,792m/data=!3m1!1e3!4m2!3m1!1s0x0:0x0" rel="noopener noreferrer" target="_blank">
                        {"37º 44' 16.6'N"}<br /> {"25º 40' 36.3'W"} </a>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  );
};

export default Contacts;
