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
