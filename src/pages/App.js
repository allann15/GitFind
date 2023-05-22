import gitlogo from '../assets/gitlogo.png'
import { Container } from './styles';
import Input from '../components/input';
import ItemRepo from '../components/itemRepo';
import { useState } from 'react';
import Button from '../components/Button';
import { api } from '../services/api';

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const {data} = await api.get(`/repos/${currentRepo}`)

    if(data.id){
      const isExist = repos.find(repo => repo.id === data.id)
      if(!isExist){
      setRepos(prev => [...prev, data])
      setCurrentRepo(' ')
      return
      }
    }
    alert('Repositório Nâo Encontrado ou Repitido')
  }
  const handleRemoveRepo = (id) => {
    setRepos(repos.filter(repo => repo.id !== id))
  }
  
  return (
    <Container >
      <img src={gitlogo} width={72} height={72}/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
