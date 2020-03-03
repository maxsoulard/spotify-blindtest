import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';
import { ScoreService } from './score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
  providers: [ ScoreService ]
})
export class ScoreComponent implements OnInit {

  constructor(private store: Store<{ guess: string }>, private scoreService: ScoreService) { }

  ngOnInit(): void {
    /*this.store.pipe(
      select('guess'),
      filter(guessTerms => !!guessTerms),
      switchMap()
    )*/
  }

}
