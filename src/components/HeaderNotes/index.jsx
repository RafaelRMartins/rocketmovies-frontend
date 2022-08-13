import  { Container, Info, Title } from './styles';
import { BiTime } from 'react-icons/bi'
import { Star } from '../Star';


export function HeaderNotes({ }){
  return(
    <Container>
      <Title>
        <h1>Interestellar</h1>
        <Star size={20}/>
      </Title>
      
      <Info>
        <div>
          <img src="https://github.com/RafaelRMartins.png" alt="Foto do autor" />
          <span>por Rafael Martins</span>
        </div>

        <div>
          <BiTime /><span>23/05/22 às 08:00</span>
        </div>
      </Info>

    </Container>
  )
}