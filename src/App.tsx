import { Component } from 'react';
import httpClient from './api/httpClient';
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

  fetchEpisodes = async () => {
    try {
      const request = await httpClient.get('/episode');
      return request.data;
    } catch (err) {
      console.log(err);
    }
  };
  fetchCharacter = async (url: string) => {
    try {
      const characterId = url.substring(url.lastIndexOf('/', url.length));
      const request = await httpClient.get('/character' + characterId);
      const characterImage = request.data.img_url;
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
    const rawEpisodes = await this.fetchEpisodes();
    const rawCharacters = rawEpisodes
      .flatMap((episode: any) => episode.characters)
      .filter((v: string, i: number, a: string) => a.indexOf(v) === i);
    rawCharacters.forEach((url: string) => this.fetchCharacter(url));
    const totalPages = Math.ceil(rawEpisodes.length / this.state.pageSize);

    this.setState({ rawEpisodes: rawEpisodes, totalPages: totalPages });
  }

  render() {
    const from = (this.state.currentPage - 1) * this.state.pageSize;
    const to = from + this.state.pageSize;
    const episodes = this.state.rawEpisodes.slice(from, to);

    return (
      <div className='ui container'>
        <EpisodesList episodes={episodes} characters={this.state.characters} />
        <div className='ui segment right floated'>
          <div className='ui three column grid right floated'>
            <button
              disabled={this.state.currentPage === 1}
              onClick={this.previousPage}
              className='tiny ui button'
            >
              Previous
            </button>
            <div className='ui content center aligned'>
              {this.state.currentPage}
            </div>
            <button
              disabled={this.state.currentPage === this.state.totalPages}
              onClick={this.nextPage}
              className='tiny ui button'
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
