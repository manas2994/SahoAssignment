import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {
company:any
  constructor() { }

  ngOnInit(): void {
    this.company = [
      { name: 'HCL', country: 'India' },
      { name: 'Sahosoft', country: 'India' },
      { name: 'TCS', country: 'India' },
      { name: 'infosys', country: 'India' },
      { name: 'online24x7', country: 'India' },
      { name: 'TCS', country: 'India' },

    ]
  }

}
