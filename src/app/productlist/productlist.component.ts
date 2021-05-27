import { Component, OnInit } from "@angular/core";
import { Router }from "@angular/router";
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
    constructor(private router:Router) { }

  ngOnInit() {
  }
list(){
     this.router.navigateByUrl("/registration-success");
}
}
