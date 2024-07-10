const api_marvel = import.meta.env.PUBLIC_URL_APIMARVEL;
const token_marvel = import.meta.env.SECRET_TOKEN_APIMARVEL;
const hash = import.meta.env.SECRET_HASH_APIMARVEL;
const ts = import.meta.env.SECRET_TS_APIMARVEL;
const api_casera = import.meta.env.PUBLIC_URL_APICASERA;
const token_api_casera = import.meta.env.SECRET_TOKEN_JWT_APICASERA;

export const getFilms = async () => {
  const response = await fetch(`${api_casera}films`, {
    headers: { Authorization: `Bearer ${token_api_casera}` },
  });

  const films = await response.json();
  return films;
};

export const getFilmBy = async ({id} : {id: string}) => {
  const response = await fetch(`${api_casera}film/${id}`, {
    headers: { Authorization: `Bearer ${token_api_casera}` },
  });

  const film = await response.json();
  return film[0];
};

export const getCharacters = async (amount) => {
  const response = await fetch(`${api_marvel}characters?series=22547&limit=${amount}&ts=${ts}&apikey=${token_marvel}&hash=${hash}`);

  const characters = await response.json();
  return characters.data.results;
};

export const getCharacterBy = async ({id} : {id: string}) => {
  const response = await fetch(`${api_marvel}characters/${id}?ts=1&apikey=bd83974f8c0124c0b4006bb69fecc3b4&hash=6253d203f94171a77b3b7f026a16e3b7`);
  const character = await response.json();
  return character.data.results[0];
};

export const getComics = async () => {
  const response = await fetch(`${api_marvel}comics?limit=48&ts=${ts}&apikey=${token_marvel}&hash=${hash}`);

  const comics = await response.json();
  return comics.data.results;
};

