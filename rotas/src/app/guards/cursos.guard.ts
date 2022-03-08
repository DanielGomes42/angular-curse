import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class CursosGuard implements CanActivateChild {

    	canActivateChild(
            route: ActivatedRouteSnapshot, // tira foto da rota 
            state: RouterStateSnapshot // mostra a rota os basicamente mostra a rota que está sendo acessada
        ): Observable<boolean>|boolean {

            console.log('guarda de rota filha');

            console.log(route)
            console.log(state) // coloque esses consoles para motras os detales da rota no browser 

            return true;
        }

}