import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpotifyPlayerModule } from './spotify-player/spotify-player.module';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpotifyAuthInterceptor } from './interceptors/spotify-auth-interceptor';
import { SpotifyAuthModule } from './spotify-auth/spotify-auth.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { GameComponent } from './game/game.component';
import { BlindtestModule } from './blindtest/blindtest.module';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpotifyAuthModule,
    SpotifyPlayerModule,
    BlindtestModule,
    HttpClientModule,
    StoreModule.forRoot({
      // guess: guessReducer,
    }),
    StoreDevtoolsModule.instrument({
      name: 'Spotify Blindtest',
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpotifyAuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
