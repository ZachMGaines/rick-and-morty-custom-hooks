export const fetchCharacters = async (page) => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const characters = await res.json();
  return characters.slice((page) * 20, page * 20);
};

export const fetchCharacter = async (id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  return res.json();
};
