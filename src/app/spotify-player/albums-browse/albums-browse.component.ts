import { Component, OnInit } from '@angular/core';
import { AlbumsBrowseService } from './albums-browse.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-albums-browse',
  templateUrl: './albums-browse.component.html',
  styleUrls: ['./albums-browse.component.scss'],
  providers: [
    AlbumsBrowseService
  ]
})
export class AlbumsBrowseComponent implements OnInit {

  albums$: Observable<any[]>;

  constructor(private albumsBrowseService: AlbumsBrowseService) { }

  ngOnInit() {
    this.albums$ = this.albumsBrowseService.getUserAlbums();
    this.albums$.subscribe(albums => {
      console.log(albums);
    });
  }

}
