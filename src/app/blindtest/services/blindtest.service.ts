import { Injectable } from "@angular/core";
import { SpotifyTrack } from 'src/app/spotify-player/model/spotify-track-informations.model';
import { of, throwError } from 'rxjs';

const engArticlesLexicon = [
  'a', 'an', 'the', 'them', 'of', 'in',
];

@Injectable()
export class BlindtestService {

  constructor() {}

  /**
   * TODO
   * exclude articles
   * exclude punctuations
   * @param userInput
   * @param track
   */
  evaluatePlayerGuess(userInput: string, track: SpotifyTrack) {
    let score = 0;

    const regexpArtist = new RegExp(track.artists[0].name.toLowerCase(), 'g');
    const regexpTrackName = new RegExp(track.name.toLowerCase(), 'g');

    if (regexpArtist.test(userInput.toLowerCase())) {
      score += 10;
    }

    if (regexpTrackName.test(userInput.toLowerCase())) {
      score += 50;
    }

    if (score === 0) {
      return throwError(new Error('Wrong answer'));
    }

    return of({score});
  }
}
