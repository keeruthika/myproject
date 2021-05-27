import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  colors: any[] = ["Green", "Orange", "Yellow", "white", "Brown"];
  constructor(private router: Router) {}

  ngOnInit() {}
  add() {
    this.router.navigateByUrl("/registration-success");
  }
}
