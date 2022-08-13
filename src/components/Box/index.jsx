import { Container } from "./styles";
import { Star } from "../Star";
import { Tags } from "../Tags";

export function Box({ data, ...rest}) {
  return(
    <Container {...rest}>
      <h2>{data.title}</h2>
      <Star size={12}  note={String(data.rating)} />
      <p>{String(data.description).substr(1, 254)}</p>

      {
        data.tags && 
        <footer>
          {
            data.tags.map(tag => <Tags color title={tag.name} key={tag.id}/>)
          }
        </footer>
      }
    </Container>
  )
}