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

const EpisodesListPagination = ({
  episodes,
  characters,
  currentPage,
  totalPages,
  onClickPreviousButton,
  onClickNextButton,
}: {
  episodes: Episode[];
  characters: Map<string, string>;
  currentPage: number;
  totalPages: number;
  onClickPreviousButton: () => void;
  onClickNextButton: () => void;
}) => {
  const listOfEpisodes = episodes.map((episode: Episode) => {
    return (
      <EpisodeItem key={episode.id} episode={episode} characters={characters} />
    );
  });

  return (
    <div>
      <div className='ui relaxed divided list'>{listOfEpisodes}</div>
      <div className='ui segment right floated'>
        <div className='ui three column grid right floated'>
          <button
            disabled={currentPage === 1}
            onClick={onClickPreviousButton}
            className='tiny ui button'
          >
            Previous
          </button>
          <div className='ui content center aligned'>
            {currentPage} of {totalPages}
          </div>
          <button
            disabled={currentPage === totalPages}
            onClick={onClickNextButton}
            className='tiny ui button'
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EpisodesListPagination;
