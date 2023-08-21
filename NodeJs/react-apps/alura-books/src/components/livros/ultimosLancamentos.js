import { livros } from './dadosUltimosLancamentos.js';
import { Titulo } from '../titulo/titulo.js';
import Card from '../cards/card.js';
import ImgCard from '../../imgs/livro2.png';
import styled from 'styled-components';

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor="#EB9B00"
                tamanhoFonte="36px"
            >
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map( livro => (
                    <img alt="" src={livro.src}/>
                ))}
            </NovosLivrosContainer>
            <Card
                titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={ImgCard}
            />
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos;