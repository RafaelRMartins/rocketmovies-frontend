import { Container, Body, Section, Info, Title } from "./styles";
import { Header } from "../../components/Header";
import { Text } from "../../components/Text";
import { Tags } from "../../components/Tags";
import { Star } from "../../components/Star";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { BiTime } from 'react-icons/bi';
import { useAuth } from '../../hooks/auth';


export function Details(){
  const { user } = useAuth();
  const navigate = useNavigate();

  const name = user.name;

  const [data, setData] = useState(null);

  const params = useParams();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}`: avatarPlaceholder;

  useEffect(() => {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data);
    }

    fetchNote();
  }, [])

  function handleBack(){
    navigate(-1);
  }

  function formatData(data){
    const formatted = String(data).replace(/-/g,"/").replace(/ /g," às ");
    const stringFormatted = formatted.slice(0, -3);
    
    return stringFormatted;
  }

  return(
    <Container>
      <Header/>
      {
        data && 
        <main>
          <Body>
            <a onClick={handleBack}><AiOutlineArrowLeft/>Voltar</a>
              <Title>
                <h1>{data.title}</h1>
                <Star size={20} note={String(data.rating)} />
              </Title>
              
              <Info>
                <div>
                  <img src={avatarUrl} alt="Foto do autor" />
                  <span>por {user.name}</span>
                </div>

                <div>
                  <BiTime /><span>{formatData(data.updated_at)}</span>
                </div>
              </Info>

            {
              data.tags &&
              <Section>
                {
                  data.tags.map(tag => (
                    <Tags key={String(tag.id)} title={tag.name} />
                  ))
                }
              </Section>
            }

            <Text>
              {data.description}
            </Text>
          </Body>
        </main>
      }
      
    </Container>
  )
}