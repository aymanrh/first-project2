import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( public ngFireAuth: AngularFireAuth,private router: Router) { }

    // Register user with email/password
    registerUser(email, password) {
      return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
    }

    signIn(email, password){
      return this.ngFireAuth.signInWithEmailAndPassword(email, password);
    }

    logout(){
      this.ngFireAuth.signOut().then(() => {
          localStorage.clear();
          this.router.navigateByUrl('/login', {replaceUrl: true});
      });
    }
}
