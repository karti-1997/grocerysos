import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-franchise',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.scss']
})
export class FranchiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onregister(form: NgForm): void {
    console.log(form.value.City);
    console.log(form.value.Pincode);
    console.log(form.value.District);
    console.log(form.value.Country);
    console.log(form.value.Franchisename);
    console.log(form.value.Franchiseadmin);
    console.log(form.value.CreatedBy);
    console.log(form.value.ManagedBy);
    if (form.invalid) {
      alert("Please check your given details");
    } else {
      alert("Franchise admin have been registered");
      //this.authService.login(form.value.username, form.value.password);
    }
  }
}
