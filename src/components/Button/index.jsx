import { Container } from "./styles";

export function Button({ icon: Icon, title, blackcolor, loading = false, ...rest }) {
  return(
    <Container type="button" disabled={loading} blackcolor={blackcolor} {...rest} >
      {Icon && <Icon size={16} />}
      {loading ? 'carregando...': title}
    </Container>
  )
  
}