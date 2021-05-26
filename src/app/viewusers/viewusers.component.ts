import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.less']
})
export class ViewusersComponent implements OnInit {

    columnDefs = [
        { field: 'make' },
        { field: 'model' },
        { field: 'price'}
    ];

    rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ];

  constructor(private router:Router) { }

  ngOnInit() {
  }
registeredusers() {
     this.router.navigateByUrl('/registration');
}

}
