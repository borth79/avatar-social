import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {
  formCompleted = false;
  uName = '';
  uEmail = '';
  uPassword = '';
  uAcceptTerms = false;
  joinBtnText = 'Join Now';
  constructor() { }

  ngOnInit() {
  }

  checkFormCompleted() {
    if(this.uName.length <1 || this.uEmail.length <1 || this.uPassword.length <1 || this.uAcceptTerms!==true) this.formCompleted = false;
    else {
      this.formCompleted = true;
    }
  }


  joinNow() {
    console.log(this.uName);
    console.log(this.uEmail);
    console.log(this.uPassword);
    return false;
  }

}
