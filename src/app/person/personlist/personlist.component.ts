import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit {
persons:any
  constructor() { }

  ngOnInit(): void {
    this.persons=[
      {name:'Chandan Kumar', country:'India'},
      {name:'AJeet Kumar', country:'USA'},
      {name:'Mohit Gupta', country:'India'},
      {name:'Soni Kumari', country:'India'},
      {name:'Rohit Kumar', country:'India'},
    ]
  }

}
