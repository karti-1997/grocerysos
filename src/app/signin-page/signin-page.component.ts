import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import {Observable} from 'rxjs';

import {Router,ActivatedRoute,ParamMap} from '@angular/router';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent {
  customer:string;
  haveordered:boolean;
  signin: boolean;
  signup: boolean;
  constructor(
    public router:Router,
    public route:ActivatedRoute,
    public dialogRef: MatDialogRef<SigninPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.haveordered=data.haveordered;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
  onLogin(form: NgForm) {
  if (form.invalid) {
    return;
  }
  console.log(form.value.username);
  console.log(form.value.password);
  //if(form.value.password==this.user && form.value.password==this.user){
  if(form.value.password==form.value.username){
    alert("You are successfully logged in");
    this.customer="123456";
    this.dialogRef.close({event:'close',data:this.customer});
  }
  }

  signUp() {
    this.signup = true;
    this.signin = false;
  }

  signIn() {
    this.signin = true;
    this.signup = false;
  }

  }

