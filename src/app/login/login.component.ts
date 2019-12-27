import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth , private router: Router) {
  }
  login() {
    let provider = new auth.GoogleAuthProvider();
    auth().signInWithRedirect(provider).then(function() {
      return auth().getRedirectResult();
    }).then((result) => {
      // This gives you a Google Access Token.
      // You can use it to access the Google API.
      var token = (result.credential as any).accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(result)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error)
    });
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

}
