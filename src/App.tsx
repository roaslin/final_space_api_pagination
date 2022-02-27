import { Component } from 'react';
import { fetchCharacter, fetchEpisodes } from './api/api';
import './App.css';
import EpisodesList from './components/EpisodesList';

class App extends Component {
  state = {
    rawEpisodes: [],
    characters: new Map(),
    currentPage: 1,
    pageSize: 10,
    totalPages: 0,
  };

  storeCharactersImages = async (url: string) => {
    try {
      const characterId = url.substring(url.lastIndexOf('/', url.length));
      const character = await fetchCharacter(characterId);
      const characterImage = character.img_url;
      const newCharacters = new Map(this.state.characters);
      newCharacters.set(url, characterImage);
      this.setState({
        characters: newCharacters,
      });
    } catch (err) {
      console.log(err);
    }
  };

  nextPage = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };
  previousPage = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  };

  async componentDidMount() {
    const rawEpisodes = await fetchEpisodes();
    const rawCharactersUrls = rawEpisodes
      .flatMap((episode: any) => episode.characters)
      .filter((v: string, i: number, a: string) => a.indexOf(v) === i);
    rawCharactersUrls.forEach((url: string) => this.storeCharactersImages(url));
    const totalPages = Math.ceil(rawEpisodes.length / this.state.pageSize);

    this.setState({ rawEpisodes: rawEpisodes, totalPages: totalPages });
  }

  render() {
    const from = (this.state.currentPage - 1) * this.state.pageSize;
    const to = from + this.state.pageSize;
    const episodes = this.state.rawEpisodes.slice(from, to);

    return (
      <div className='ui container'>
        <EpisodesList
          episodes={episodes}
          characters={this.state.characters}
          currentPage={this.state.currentPage}
          totalPages={this.state.totalPages}
          onClickPreviousButton={this.previousPage}
          onClickNextButton={this.nextPage}
        />
      </div>
    );
  }
}

export default App;
