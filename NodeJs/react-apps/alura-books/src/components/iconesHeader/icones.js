import perfil from '../../imgs/perfil.svg';
import sacola from '../../imgs/sacola.svg';
import styled from 'styled-components';

const Icones = styled.ul`
  display: flex;
  align-items: center;
` 

const Icone = styled.li`
  margin-right: 40px;
  width: 25px;
`

const icones = [perfil, sacola];

function IconesHeader() {
   return (
       <Icones>
           { icones.map( (icone) => (
             <Icone><img src={icone} alt={"icons do header"}></img></Icone>
           )) }
       </Icones>
   )
}
export default IconesHeader;