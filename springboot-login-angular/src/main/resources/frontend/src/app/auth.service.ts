import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  // singleton
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<String>;

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    this.userSubject = new BehaviorSubject<String>(sessionStorage.getItem('user'));
  }

  public checkAuthenticated() {
    // const authenticated = await this.authClient.session.exists();
    // this.isAuthenticated.next(authenticated);
    // console.log(this.userSubject);
    // console.log(this.userSubject.value);
    return this.userSubject.value != null;    
  }

  public username() {
    return this.userSubject.value;
  }
  

  async login(username: string, password: string) {
    const url = 'http://localhost:8080/api/user';
    var authorizationBasic = window.btoa(username + ':' + password);
    let headers = new HttpHeaders({'Authorization' : 'Basic ' + authorizationBasic});

    try {      
      const data = await this.http.get<any>(url, {headers}).toPromise();      
      console.log("Data: " + JSON.stringify(data)); 
      sessionStorage.setItem('user', username);
      this.userSubject.next(username);
      this.router.navigate(['']);
    } catch (error) {      
      throw error;
    }

  }

  async logout() {
    try {
      // await this.authClient.signOut();
      sessionStorage.removeItem('user');
      this.userSubject.next(null);
      this.router.navigate(['login']);
    } catch (err) {
      console.error(err);
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status == 401) {
      console.error("Wrong password");
    } else {
      console.error(error);
    }
  };
  
}
