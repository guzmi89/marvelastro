import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const films = await getCollection('films');
    return rss({
      title: 'Marvel Project',
      description: 'Web ejemplo de desarrollo con temática del universo de Marvel',
      site: context.site,
      items: films.map((film) => ({
        title: film.title,
        description: film.description,
        // Calcula el link RSS desde el `slug` del post
        // Este ejemplo asume que todos los posts son renderizados como rutas `/blog/[slug]`
        link: `/films/${film.id}/`,
      })),
    });
  }