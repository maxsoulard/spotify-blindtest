export interface SpotifyItem {
  track: SpotifyTrack;
}

export interface SpotifyTrack {
  artists: SpotifyArtist[];
  href: string;
  id: string;
  name: string;
  uri: string;
}

export interface SpotifyArtist {
  id: string;
  name: string;
  uri: string;
}
