import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Button } from "../../components/Button";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Container, Form, Box, BoxNote, BoxButton } from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";


export function New(){
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("0");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  async function handleNewNote(){
    if(newTag){
      return alert("Tag não atribuída.");
    }
    
    await api.post("/notes", {
      title,
      description,
      rating,
      tags
    })

    alert("Nota criada com sucesso!");
    navigate("/");
  }

  return(
    <Container>
      <Header/>
      <main>
        <Form>
          <header>
            <Link to="/"><AiOutlineArrowLeft/>Voltar</Link>
            <h1>Novo filme</h1>
          </header>

          <Box>
            <Input 
              placeholder="Título"
              onChange={e => setTitle(e.target.value)}
            />
            <Input 
              placeholder="Sua nota (de 0 a 5)" 
              type="number" 
              min="0" max="5"
              onChange={e => setRating(e.target.value)}
            />
          </Box>

          <Textarea 
            placeholder="Observações"
            onChange={e => setDescription(e.target.value)}
          />

          
          <h2>Marcadores</h2>
          <BoxNote>
            {
              tags.map((tag, index) => (
                <NoteItem 
                  key={String(index)}
                  value={tag}
                  onClick={() => handleRemoveTag(tag)}
                />
              ))
            }

            <NoteItem 
              isNew 
              placeholder="Novo marcador" 
              onChange={e => setNewTag(e.target.value)} 
              value={newTag} 
              onClick={handleAddTag} 
            />

          </BoxNote>

          <BoxButton>
            <Button title="Excluir filme" blackcolor />
            <Button title="Salvar alterações" onClick={handleNewNote} />
          </BoxButton>
          
        </Form>
      </main>
    </Container>
  )
}