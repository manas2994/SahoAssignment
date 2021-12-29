import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  regform: FormGroup;
  constructor() {
    // this.elRef.nativeElement.style.color="blue" 
    
  }

  ngOnInit(): void {
    this.regform=new FormGroup({
   id:new FormControl(),
   fname:new FormControl(),
   lname:new FormControl(),
   email:new FormControl(),
   mobileNo:new FormControl(),
  })
  }
  Login(formData:FormGroup){
     console.log(this.regform.value);
   console.log(this.regform.get('fname')!.value);
    // console.log(this.regForm.get('mobileno').value)

  }

}
