import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyloadGuardGuard implements CanLoad {
  isloggedIn:boolean=false;
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (!this.isloggedIn) {
        alert("You have not rights to access this page");
        return false;
      }
      return true;

  }
}
