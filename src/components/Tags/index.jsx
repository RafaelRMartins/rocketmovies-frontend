import  { Container } from './styles';

export function Tags({ title, color = false, ...rest }){
  return(
    <Container typeColor={color} {...rest}>
      <span>{title}</span>
    </Container>
  )
}