import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCharacters } from '../../state/character';
import Character from './Character';

const CharacterList = () => {
  const [page, setPage] = useState(1);
  const { characters, loading } = useCharacters(page);
  // eslint-disable-next-line keyword-spacing
  if (loading) return <h1>Loading...</h1>;

  const characterElements = characters.map((character) => (
    console.log(character),
    <li key={character.id}>
      <Link to={`/${character.id}`}>
        <Character {...character} />
      </Link>
    </li>
  ));

  return (
    <>
      <button
        disabled={page <= 1}
        onClick={() => setPage((prevPage) => prevPage - 1)}
      >
        &lt;
      </button>
      {page}
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>&gt;</button>
      <ul>{characterElements}</ul>
    </>
  );
};

export default CharacterList;
