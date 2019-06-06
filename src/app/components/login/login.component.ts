import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router'

import {ApiService} from 'src/app/services/api.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  formLogin: FormGroup;
  constructor(private formBuilder: FormBuilder, private api: ApiService, private router: Router) { 
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {
    this.api.login_cs(this.formLogin.value).subscribe(
      response => {
        console.log(response.data)
      }
    )
  }

  ngOnDestroy(){

  }

}
