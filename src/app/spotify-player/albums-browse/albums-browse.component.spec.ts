import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsBrowseComponent } from './albums-browse.component';

describe('AlbumsBrowseComponent', () => {
  let component: AlbumsBrowseComponent;
  let fixture: ComponentFixture<AlbumsBrowseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumsBrowseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
