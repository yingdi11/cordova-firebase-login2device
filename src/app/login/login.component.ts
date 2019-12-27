import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: firebase.User = null;
  constructor(public afAuth: AngularFireAuth , private router: Router, private cd: ChangeDetectorRef) {
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
      this.user = result.user;
      this.cd.detectChanges();
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
    this.afAuth.auth.signOut().then(() => {
      this.user = null;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {
  }

}
