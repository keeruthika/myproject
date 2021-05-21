import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.less']
})
export class ViewusersComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
registeredusers() {
     this.router.navigateByUrl('/registration');
}

}
