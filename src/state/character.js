import { useEffect, useState } from 'react';
import { fetchCharacter, fetchCharacters } from '../services/rickAndMortyAPI';

export const useCharacters = (page) => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters(page)
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, [page]);

  return { characters, loading };
};

export const useCharacter = (id) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetchCharacter(id).then(setCharacter);
  }, []);

  return character;
};
