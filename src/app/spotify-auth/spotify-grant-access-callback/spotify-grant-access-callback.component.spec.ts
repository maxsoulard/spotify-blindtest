import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotifyGrantAccessCallbackComponent } from './spotify-grant-access-callback.component';

describe('SpotifyGrantAccessCallbackComponent', () => {
  let component: SpotifyGrantAccessCallbackComponent;
  let fixture: ComponentFixture<SpotifyGrantAccessCallbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpotifyGrantAccessCallbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotifyGrantAccessCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
