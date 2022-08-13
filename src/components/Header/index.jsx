import  { Container, Profile, Logo, Search } from './styles';
import { useAuth } from '../../hooks/auth';
import { Link } from 'react-router-dom';
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { api } from '../../services/api';

export function Header(newSearch){
  const { signOut, user } = useAuth();
  

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder;

  return(
    <Container>
      <Logo>
        RocketMovies
      </Logo>

      <Profile>
        <div>
        <Link to="/profile"><strong>{user.name}</strong></Link>
          <Link to="/" onClick={signOut}>sair</Link>
        </div>

        <Link to="/profile">
          <img src={avatarUrl} alt="Foto do usuário" />
        </Link>
      </Profile>
    </Container>
  )
}
