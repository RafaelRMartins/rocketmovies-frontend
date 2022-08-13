import { Input } from '../../components/Input';
import { Container, Form, Create, Background } from "./styles";
import { FiMail, FiLock } from 'react-icons/fi';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/auth';
import { useState } from 'react';

export function SignIn(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({ email, password });
  }

  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Faça seu login</h2>
        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={e => setEmail(e.target.value)}
        />
        <Input 
          placeholder="Senha"
          type="password"
          icon={FiLock}
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Create>
          <Link to="/register">
            Criar conta
          </Link>
        </Create>

      </Form>

      <Background />
    </Container>
  )
}