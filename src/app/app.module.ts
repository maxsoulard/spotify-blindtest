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
import { EffectsModule } from '@ngrx/effects';
import { GraphQLModule } from './graphql.module';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';

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
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Spotify Blindtest',
      maxAge: 25,
      logOnly: environment.production
    }),
    ApolloModule,
    HttpLinkModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpotifyAuthInterceptor,
      multi: true
    },
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: "https://graphql.anilist.co/"
          })
        }
      },
      deps: [HttpLink]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
