import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isLoginFailure = false;
  form: FormGroup;

  constructor(    
    private formBuilder: FormBuilder, 
    private authService: AuthService,
    private router : Router,
    private authenticationService: AuthService,
    ) {
      if (this.authenticationService.checkAuthenticated()) { 
        this.router.navigate(['/']);
      }
    }

  async ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async onSubmit() {
    const val = this.form.value;   
    try {
      await this.authService.login(val.username, val.password)      
    } catch (error) {
      this.isLoginFailure = true;
      console.error(error);
    }
  }
}
