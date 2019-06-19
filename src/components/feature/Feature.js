import React from "react";
import {Image} from 'react-bootstrap';

const Feature = () => {

  return (
    <>
        <div className="container-img-feature">
            <Image  src="../src/css/img/idok_banner8_1.png"></Image>
        </div> 
        <div className="feature-title">
            <div className="feature-title-1">
                A MANEIRA MAIS SIMPLES
            </div>
            <div className="feature-title-2">
                PARA GERIR DOCUMENTOS
            </div>
            <div className="feature-title-3">
                <div className="feature-title-4">
                    O iDOK é um software de gestão documental que permite registar, consultar e arquivar toda a documentação da sua entidade. Esta solução, para além de otimizar e organizar o seu funcionamento interno, salvaguarda os dados digitalmente, reduz custos e aumenta a performance dos seus colaboradores.
                </div>
            </div>
        </div>
        <div className="container-feature-cards">
            <div className="card-1-gestao ">
                <p className="title-feature">Gestão automática de Documentos</p>
                <div className="img-feature-card">
                    <Image  src="../src/css/img/geracaoautomatica.png"></Image>
                </div>
                <p className="text-feature mt-2">Este módulo permite-lhe a geração automática de documentos modelos (ofícios, atestados, etc.), recorrendo a modelos pré-definidos, configurados por si, o que possibilita uma imagem uniformizada e consolidada da sua entidade. Utilizamos ainda a tecnologia de Reconhecimento Ótico de Caracteres (OCR) para facilitar a pesquisa de conteúdo dos documentos.</p>
            </div> 
            <div className="card-1-gestao mt-5">
                <p className="title-feature">Atribuição de Prioridades</p>
                <div className="img-feature-card">
                    <Image  src="../src/css/img/atribuicaoprioridades.png"></Image>
                </div>
                <p className="text-feature mt-2">De uma forma integrada, o sistema permite o encaminhamento interno dos documentos, o que possibilita a atribuição de prioridade aos documentos. Tem ainda a possibilidade de alertar os utilizadores para a necessidade de responder aos documentos com urgência.</p>
            </div>    
            <div className="card-1-gestao mt-5">
                <p className="title-feature">Elaboração de processos de workflow</p>
                <div className="img-feature-card">
                    <Image  src="../src/css/img/fluxos.png"></Image>
                </div>
                <p className="text-feature mt-2"> A sua empresa pode definir fluxos para o seguimento dos documentos. 
                    De forma personalizada, o fluxo pode seguir caminhos diferentes, 
                    dependendo da informação introduzida. Com esta solução, terá um maior controlo
                    dos fluxos de circulação de documentos, uma vez que as etapas estão ao cuidado 
                    de um grupo restrito de pessoas.</p>
            </div>    
            <div className="card-1-gestao mt-5">
                <p className="title-feature">Gestão de Processos</p>
                <div className="img-feature-card">
                    <Image  src="../src/css/img/gestao_processos.png"></Image>
                </div>
                <p className="text-feature mt-2">Consiste numa pasta virtual, agregadora de documentos, que permite associar ficheiros a um determinado processo, para garantir que toda a informação se encontre organizada e centralizada. Poderá ainda atribuir gestores, consultar e exportar informações individualmente ou de forma agrupada.</p>
            </div>
            <div className="card-1-gestao mt-5">
                <p className="title-feature">Gestão de Entidades</p>
                <div className="img-feature-card">
                    <Image  src="../src/css/img/gestao_entidades.png"></Image>
                </div>
                <p className="text-feature mt-2">Associe entidades aos documentos, processos, fluxos, entre outros. Crie campos adicionais e visualize toda a informação de forma organizada e agrupada aos documentos. Deste modo, poderá facilmente aceder às informações adicionais nos vários filtros de pesquisa.</p>
            </div>    
            <div className="card-1-gestao mt-5">
                <p className="title-feature">Acesso Restrito de Utilizadores</p>
                <div className="img-feature-card">
                    <Image  src="../src/css/img/acesso_restrito.png"></Image>
                </div>
                <p className="text-feature mt-2">Poderá facilmente restringir o acesso de utilizadores a determinados departamentos, seja para o encaminhamento, classificação ou pesquisa de documentos. Determine a informação que pode ser introduzida, alterada, eliminada e consultada, limitando o acesso a menus e módulos da plataforma.</p>
            </div>    
            <div className="card-1-gestao mt-5">
                <p className="title-feature">Assinatura digital</p>
                <div className="img-feature-card">
                    <Image  src="../src/css/img/cartaocidadao.png"></Image>
                </div>
                <p className="text-feature mt-2">Realize no seu computador a assinatura digital dos documentos carregados e encaminhados, através do certificado digital qualificado ou do cartão de cidadão. Com esta solução, garante a autoria dos seus documentos e que os mesmos não são alterados.</p>
            </div>    
            <div className="card-1-gestao mt-5">
                <p className="title-feature">Gestão de Módulos</p>
                <div className="img-feature-card">
                    <Image  src="../src/css/img/gestao_modulos.png"></Image>
                </div>
                <p className="text-feature mt-2">Esta ferramenta permite-lhe facilmente criar vários tipos de módulos. Poderá ajustar e/ou criar novos módulos de acordo com as necessidades de cada cliente, por exemplo, para a gestão de recursos humanos, contabilidade, entre outros.</p>
            </div>    
            <div className="card-1-gestao mt-5">
                <p className="title-feature">Configurações Avançadas</p>
                <div className="img-feature-card">
                    <Image  src="../src/css/img/configuracoes.png"></Image>
                </div>
                <p className="text-feature mt-2">A sua entidade poderá facilmente configurar o iDOK consoante as suas especificações. Deste modo, poderá adicionar novas funcionalidades que complementam a gestão documental, o que proporciona um ambiente mais intuitivo e user friendly aos utilizadores.</p>
            </div>    
            <div className="card-1-gestao mt-5">
                <p className="title-feature">Serviço de Apoio Gratuito</p>
                <div className="img-feature-card">
                    <Image  src="../src/css/img/apoioheadset.png"></Image>
                </div>
                <p className="text-feature mt-2">O serviço de apoio e suporte ao cliente garante um acompanhamento personalizado, assim como uma resposta rápida e eficiente às suas necessidades, sem qualquer custo adicional.</p>
            </div>    
        </div>
    </>
  );
};

export default Feature;
