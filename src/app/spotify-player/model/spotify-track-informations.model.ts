export interface SpotifyTrack {
  artists: SpotifyArtist[];
  href: string;
  id: string;
  name: string;
}

export interface SpotifyArtist {
  id: string;
  name: string;
  uri: string;
}
