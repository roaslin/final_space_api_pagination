import httpClient from './httpClient';

export async function fetchEpisodes() {
  try {
    const request = await httpClient.get('/episode');
    return request.data;
  } catch (err) {
    console.log(err);
  }
}

export async function fetchCharacter(url: string) {
  try {
    const characterId = url.substring(url.lastIndexOf('/', url.length));
    const request = await httpClient.get('/character' + characterId);
    return request.data;
  } catch (err) {
    console.log(err);
  }
}
