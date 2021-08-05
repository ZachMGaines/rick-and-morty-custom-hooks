import React from 'react';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../../state/character';

const CharacterDetails = () => {
  const { id } = useParams();
  const character = useCharacter(id);
  // eslint-disable-next-line keyword-spacing
  if (!character) return <h1>Loading...</h1>;

  return (
    <section>
      <h2>Character Details</h2>
      <dl>
        <dt>Name</dt>
        <dd>{character.name}</dd>

        <dt>Status</dt>
        <dd>{character.status}</dd>

        <dt>Image</dt>
        <dd>
          <img src={character.image} alt={character.name} />
        </dd>
      </dl>
    </section>
  );
};

export default CharacterDetails;
