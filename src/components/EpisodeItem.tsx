import { Episode } from './EpisodesListPagination';
import ImageItem from './ImageItem';

const EpisodeItem = ({
  episode,
  characters,
}: {
  episode: Episode;
  characters: Map<string, string>;
}) => {
  const images = episode.characters.map((url: string) => {
    const source = characters.get(url) as string;
    return <ImageItem key={url} source={source} />;
  });
  return (
    <div className='item'>
      <img
        className='ui medium image'
        alt={episode.name}
        src={episode.img_url}
      />
      <div className='content'>
        <div>{episode.name}</div>
        <div>{episode.air_date}</div>
      </div>
      <div className='ui grid right floated'>{images}</div>
    </div>
  );
};

export default EpisodeItem;
