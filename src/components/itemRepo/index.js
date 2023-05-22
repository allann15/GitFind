import React from 'react'
import { ItemContainer } from './styles'

export default function ItemRepo({repo, handleRemoveRepo}) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }
  return (
    <ItemContainer onClick={handleRemove}> 
        <h3>{repo.name}</h3>
        <p>{repo.fullname}</p>
        <a href={repo.html_url} target="_blank" rel='noreferrer' className='ver-repo'>Ver Repositório</a><br/>
        <a href='#' className='remover' rel='noreferrer'> Remover</a>
        <hr/>
    </ItemContainer>
  )
}
