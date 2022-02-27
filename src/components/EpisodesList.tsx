import { Key } from 'react';
import EpisodeItem from './EpisodeItem';

export interface Episode {
  id: Key;
  name: string;
  air_date: string;
  director: string;
  writer: string;
  characters: ReadonlyArray<string>;
  img_url: string;
}

const EpisodesList = ({
  episodes,
  characters,
}: {
  episodes: Episode[];
  characters: Map<string, string>;
}) => {
  const listOfEpisodes = episodes.map((episode: Episode) => {
    return (
      <EpisodeItem key={episode.id} episode={episode} characters={characters} />
    );
  });

  return <div className='ui relaxed divided list'>{listOfEpisodes}</div>;
};

export default EpisodesList;
