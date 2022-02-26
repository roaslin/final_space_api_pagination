import { Key } from 'react';
import EpisodeItem from './EpisodeItem';

interface Episode {
  id: Key;
  name: String;
  air_date: String;
  director: String;
  writer: String;
  characters_images: ReadonlyArray<String>;
  img_url: String;
}

const EpisodesList = ({
  episodes,
  characters,
}: {
  episodes: Episode[];
  characters: Map<string, string>;
}) => {
  const listOfEpisodes = episodes.map((episode: Episode) => {
    return <EpisodeItem key={episode.id} episode={episode} characters={characters} />;
  });

  return <div className='ui relaxed divided list'>{listOfEpisodes}</div>;
};

export default EpisodesList;
