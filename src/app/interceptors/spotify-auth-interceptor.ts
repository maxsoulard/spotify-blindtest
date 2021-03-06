import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, from } from 'rxjs';

@Injectable()
export class SpotifyAuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('api.spotify.com')) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      });
    } else {
      req = req.clone({
        setHeaders: {
          'X-Spotify-Authorization': `Bearer ${localStorage.getItem('access_token')}`,
        }
      });
    }
    return next.handle(req);
  }
}
