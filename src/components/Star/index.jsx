import { Container } from "./styles";
import { MdOutlineStar, MdOutlineStarOutline } from 'react-icons/md';


export function Star({ size, note }) {
  switch (note) {
    case '0':
      return(
        <Container>
          <MdOutlineStarOutline size={size}/>
          <MdOutlineStarOutline size={size}/>
          <MdOutlineStarOutline size={size}/>
          <MdOutlineStarOutline size={size}/>
          <MdOutlineStarOutline size={size}/>
        </Container>
      )
    case '1':
      return(
        <Container>
          <MdOutlineStar size={size}/>
          <MdOutlineStarOutline size={size}/>
          <MdOutlineStarOutline size={size}/>
          <MdOutlineStarOutline size={size}/>
          <MdOutlineStarOutline size={size}/>
        </Container>
      )
    case '2':
      return(
        <Container>
          <MdOutlineStar size={size}/>
          <MdOutlineStar size={size}/>
          <MdOutlineStarOutline size={size}/>
          <MdOutlineStarOutline size={size}/>
          <MdOutlineStarOutline size={size}/>
        </Container>
      )
    case '3':
      return(
        <Container>
          <MdOutlineStar size={size}/>
          <MdOutlineStar size={size}/>
          <MdOutlineStar size={size}/>
          <MdOutlineStarOutline size={size}/>
          <MdOutlineStarOutline size={size}/>
        </Container>
      )
    case '4':
      return(
        <Container>
          <MdOutlineStar size={size}/>
          <MdOutlineStar size={size}/>
          <MdOutlineStar size={size}/>
          <MdOutlineStar size={size}/>
          <MdOutlineStarOutline size={size}/>
        </Container>
      )
    case '5':
      return(
        <Container>
          <MdOutlineStar size={size}/>
          <MdOutlineStar size={size}/>
          <MdOutlineStar size={size}/>
          <MdOutlineStar size={size}/>
          <MdOutlineStar size={size}/>
        </Container>
      )
    default:
      return(
        <Container>
          <MdOutlineStarOutline size={size}/>
          <MdOutlineStarOutline size={size}/>
          <MdOutlineStarOutline size={size}/>
          <MdOutlineStarOutline size={size}/>
          <MdOutlineStarOutline size={size}/>
        </Container>
      )
  }
}