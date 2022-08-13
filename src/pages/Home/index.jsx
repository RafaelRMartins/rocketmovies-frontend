import { Container, Head, Controller, List, NewButton, Search } from "./styles";
import { Header } from "../../components/Header";
import { Box } from "../../components/Box";
import { Input } from "../../components/Input";
import { AiOutlinePlus } from 'react-icons/ai';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from '../../services/api';

export function Home(){
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState([]);
  const navigate = useNavigate();

  function handleDetails(id){
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchNotes(){
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data)
    }

    fetchNotes();
  }, [search]);

  return(
    <Container>
      <Header />

      <Head>
        <h1>Meus filmes</h1>

        <Search>
          <Input placeholder="Pesquisar pelo título" onChange={(e) => setSearch(e.target.value)} />
        </Search>

        <Controller>
          <NewButton to="/new">
            <AiOutlinePlus/>Adicionar filme
          </ NewButton>
        </Controller>
      </Head>

      <main>
        <List>
          {
            notes.map(note => (
              <Box key={String(note.id)} data={note} onClick={() => handleDetails(note.id)} />
            ))
          }
        </List>
      </main>
      
    </Container>
  )
}